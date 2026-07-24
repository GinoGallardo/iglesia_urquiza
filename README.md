# Iglesia Cristiana de Villa Urquiza

Landing institucional de la **Iglesia Cristiana de Villa Urquiza** (Roosevelt 5537, CABA).

- Repo: [GinoGallardo/iglesia_urquiza](https://github.com/GinoGallardo/iglesia_urquiza)
- Deploy: https://iglesia-de-urquiza.vercel.app/

---

## Stack

| Capa | Tecnología |
|------|------------|
| UI | React 19 + TypeScript (strict) |
| Bundler | Vite 6 |
| Estilos | Tailwind CSS 4 |
| Router | React Router |
| Mapas | Leaflet + React Leaflet |
| i18n | i18next (es default) |
| SEO | react-helmet-async, robots, sitemap, Open Graph |
| Tests | Vitest + React Testing Library |
| Backend | Supabase (Auth + Postgres) — admin/devocionales |
| Deploy | Vercel (`vercel.json`) + CI GitHub Actions |

---

## Arquitectura

```
/                     Landing (Header, Home+versículo, DevocionalHoy?, Nosotros, Visitanos, Actividades, Oracion, Footer)
/admin/login          Login email/password
/admin/devocionales   Panel CRUD (protegido)
```

---

## Variables de entorno

Ver [`.env.example`](.env.example):

| Variable | Descripción |
|----------|-------------|
| `VITE_WHATSAPP_NUMBER` | WhatsApp |
| `VITE_MAP_LAT` / `LNG` / `ZOOM` | Mapa |
| `VITE_SITE_URL` | URL canónica SEO |
| `VITE_GOOGLE_MAPS_URL` | Link del popup |
| `VITE_ANALYTICS_ENABLED` | stub analytics |
| `VITE_SUPABASE_URL` | Proyecto Supabase |
| `VITE_SUPABASE_ANON_KEY` | Anon key |

---

## Scripts

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run test
npm run build
npm run preview
```

---

## Supabase (devocionales + admin)

1. Crear proyecto en Supabase.
2. Ejecutar [`supabase/schema.sql`](supabase/schema.sql).
3. Crear 1–2 usuarios (Authentication → Users).
4. Insertar UUID en `admins`:
   ```sql
   insert into public.admins (user_id) values ('<uuid>');
   ```
5. Configurar `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` en `.env` y en Vercel.
6. Guía corta: [`supabase/README.md`](supabase/README.md).

La sección **Devocional de Hoy** solo se renderiza si existe un registro con `fecha = hoy`.

---

## Deploy (Vercel)

- Rewrite SPA: [`vercel.json`](vercel.json).
- Variables `VITE_*` en Project Settings → Environment Variables.
- CI: [`.github/workflows/ci.yml`](.github/workflows/ci.yml).
