-- FASE 3 — Schema Supabase para Iglesia de Urquiza
-- Corré este SQL en: Supabase Dashboard → SQL Editor → New query

-- 1) Tabla de administradores (1–2 usuarios autorizados)
create table if not exists public.admins (
  user_id uuid primary key references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);

-- 2) Devocionales del día
create table if not exists public.devocionales (
  id uuid primary key default gen_random_uuid(),
  fecha date not null,
  titulo text not null,
  versiculo_referencia text not null,
  contenido text not null,
  autor_id uuid not null references auth.users (id) on delete restrict,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint devocionales_fecha_unique unique (fecha)
);

create index if not exists devocionales_fecha_idx on public.devocionales (fecha desc);

-- 3) Helper: ¿el usuario autenticado es admin?
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.admins a where a.user_id = auth.uid()
  );
$$;

-- 4) RLS
alter table public.admins enable row level security;
alter table public.devocionales enable row level security;

-- Admins: solo el propio usuario (o service role) puede verse a sí mismo
drop policy if exists "admins_select_own" on public.admins;
create policy "admins_select_own"
  on public.admins for select
  to authenticated
  using (user_id = auth.uid());

-- Devocionales: lectura pública (landing)
drop policy if exists "devocionales_public_read" on public.devocionales;
create policy "devocionales_public_read"
  on public.devocionales for select
  to anon, authenticated
  using (true);

-- Devocionales: escritura solo admins
drop policy if exists "devocionales_admin_insert" on public.devocionales;
create policy "devocionales_admin_insert"
  on public.devocionales for insert
  to authenticated
  with check (public.is_admin() and autor_id = auth.uid());

drop policy if exists "devocionales_admin_update" on public.devocionales;
create policy "devocionales_admin_update"
  on public.devocionales for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists "devocionales_admin_delete" on public.devocionales;
create policy "devocionales_admin_delete"
  on public.devocionales for delete
  to authenticated
  using (public.is_admin());

-- 5) Trigger updated_at
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists devocionales_set_updated_at on public.devocionales;
create trigger devocionales_set_updated_at
  before update on public.devocionales
  for each row execute function public.set_updated_at();

-- 6) Después de crear usuarios en Authentication → Users:
--    insert into public.admins (user_id) values ('<uuid-del-usuario>');
