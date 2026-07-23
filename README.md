# Iglesia Cristiana de Villa Urquiza

Landing page institucional de la **Iglesia Cristiana de Villa Urquiza** (Franklin D. Roosevelt 5525 / Roosevelt 5537, CABA). SPA estática de una sola página.

Repositorio: [GinoGallardo/iglesia_urquiza](https://github.com/GinoGallardo/iglesia_urquiza)

URL de producción (placeholder): `https://iglesiaurquiza.com.ar`

---

## Stack

| Capa | Tecnología |
|------|------------|
| UI | React 19 + TypeScript (strict) |
| Bundler | Vite 6 |
| Estilos | Tailwind CSS 4 |
| Mapas | Leaflet + React Leaflet (OpenStreetMap) |
| i18n | i18next + react-i18next (es default / en) |
| SEO | react-helmet-async, `robots.txt`, `sitemap.xml`, Open Graph |
| Tests | Vitest + React Testing Library |
| Deploy | Netlify (`netlify.toml`) + GitHub Actions CI |

---

## Arquitectura

```
Browser
  └── Netlify CDN / Vite dev
        └── index.html → main.tsx → App → Landing
              ├── Seo (Helmet)
              ├── Header
              ├── Home (above-the-fold)
              ├── Nosotros
              ├── Visitanos (lazy + Leaflet)
              ├── Actividades (lazy + JSON)
              ├── Oracion
              ├── ButtonWhatsApp
              └── Footer
```

- Sin backend ni router.
- Datos de ministerios: [`public/data/actividades.json`](public/data/actividades.json).
- Tipos en [`src/types/index.ts`](src/types/index.ts).
- Config sensible en `.env` (`VITE_*`).

### Estructura

```
src/
  components/   # Header, Home, Nosotros, Visitanos, Actividades, Oracion, WhatsApp, Footer, Seo
  lib/          # env.ts, analytics.ts (stub)
  page/         # Landing.tsx
  types/        # Actividad, NavLink, …
  test/         # setup Vitest
public/
  assets/       # JPG/PNG + WebP/AVIF
  data/         # actividades.json
  locales/      # es | en
```

---

## Variables de entorno

Copiá [`.env.example`](.env.example) a `.env`:

| Variable | Descripción |
|----------|-------------|
| `VITE_WHATSAPP_NUMBER` | Número WhatsApp (sin +) |
| `VITE_MAP_LAT` / `VITE_MAP_LNG` / `VITE_MAP_ZOOM` | Mapa Leaflet |
| `VITE_SITE_URL` | URL canónica (SEO / OG) |
| `VITE_GOOGLE_MAPS_URL` | Link “Ir Ahora” del popup |
| `VITE_ANALYTICS_ENABLED` | `false` por defecto (stub en `src/lib/analytics.ts`) |

---

## Scripts

```bash
npm install
npm run dev          # Desarrollo
npm run typecheck    # tsc --noEmit
npm run lint         # ESLint (typescript-eslint)
npm run test         # Vitest
npm run build        # typecheck + build → dist/
npm run preview      # Preview del build
```

---

## Deploy (Netlify)

1. Conectar el repo en Netlify (branch `main`).
2. Build command / publish dir ya están en [`netlify.toml`](netlify.toml): `npm run build` → `dist`.
3. Definir las variables `VITE_*` en el panel de Netlify.
4. Actualizar `VITE_SITE_URL`, `public/sitemap.xml` y `public/robots.txt` cuando el dominio sea definitivo.

CI en cada PR/push a `main`: [`.github/workflows/ci.yml`](.github/workflows/ci.yml) (typecheck + lint + test + build).

---

## Performance y a11y (resumen)

- Imágenes en `public/assets` con variantes **WebP/AVIF** y fallback original.
- `loading="lazy"` fuera del hero.
- Code-splitting con `React.lazy` para **Visitanos** (Leaflet) y **Actividades**.
- `aria-label` en WhatsApp flotante, menú móvil y controles del carrusel.
- Contraste del subtítulo “Oramos por Vos” ajustado sobre fondo oscuro (`#ffd6d6` sobre overlay).

---

## Analytics (preparado, desactivado)

[`src/lib/analytics.ts`](src/lib/analytics.ts) expone `initAnalytics()` / `trackEvent()`. Con `VITE_ANALYTICS_ENABLED=false` no carga scripts. Para activar Plausible/GA4: poner `true` e implementar el TODO del stub.
