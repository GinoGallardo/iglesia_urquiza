# Iglesia Cristiana de Villa Urquiza — Setup Supabase

## Schema (resumen)

| Tabla | Campos | Uso |
|-------|--------|-----|
| `admins` | `user_id` (PK → `auth.users`), `created_at` | 1–2 admins autorizados |
| `devocionales` | `id`, `fecha` (unique), `titulo`, `versiculo_referencia`, `contenido`, `autor_id`, `created_at`, `updated_at` | Contenido del día |

RLS: lectura pública de `devocionales`; escritura solo si `is_admin()`.

## Pasos

1. Crear proyecto en Supabase.
2. SQL Editor → pegar y ejecutar [`schema.sql`](./schema.sql).
3. Authentication → Users → Create user (email + password).
4. Copiar el UUID del usuario e insertar:
   ```sql
   insert into public.admins (user_id) values ('UUID-AQUI');
   ```
5. Project Settings → API → copiar `Project URL` y `anon public` key a:
   - `.env` local
   - Vercel Environment Variables (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`)
6. Abrir `/admin/login` en el sitio.
