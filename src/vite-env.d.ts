/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WHATSAPP_NUMBER: string;
  readonly VITE_MAP_LAT: string;
  readonly VITE_MAP_LNG: string;
  readonly VITE_MAP_ZOOM: string;
  readonly VITE_SITE_URL: string;
  readonly VITE_ANALYTICS_ENABLED: string;
  readonly VITE_GOOGLE_MAPS_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "*.png?url" {
  const src: string;
  export default src;
}
