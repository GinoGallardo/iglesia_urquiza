/**
 * Variables de entorno públicas (prefijo VITE_).
 * En producción Vercel deben estar configuradas; si faltan usamos
 * defaults seguros para no dejar la web en blanco.
 */
const DEFAULTS = {
  VITE_WHATSAPP_NUMBER: "91121697373",
  VITE_MAP_LAT: "-34.5761956",
  VITE_MAP_LNG: "-58.4920701",
  VITE_MAP_ZOOM: "16",
  VITE_SITE_URL: "https://iglesia-de-urquiza.vercel.app",
  VITE_GOOGLE_MAPS_URL:
    "https://www.google.com.ar/maps/place/Iglesia+Urquiza/@-34.5761956,-58.4920701,20.5z",
} as const;

function readEnv(
  key: keyof typeof DEFAULTS | "VITE_ANALYTICS_ENABLED"
): string | undefined {
  const value = import.meta.env[key];
  if (typeof value === "string" && value.length > 0) return value;
  return undefined;
}

function envOrDefault(key: keyof typeof DEFAULTS): string {
  return readEnv(key) ?? DEFAULTS[key];
}

export const env = {
  whatsappNumber: envOrDefault("VITE_WHATSAPP_NUMBER"),
  mapLat: Number(envOrDefault("VITE_MAP_LAT")),
  mapLng: Number(envOrDefault("VITE_MAP_LNG")),
  mapZoom: Number(readEnv("VITE_MAP_ZOOM") ?? DEFAULTS.VITE_MAP_ZOOM),
  siteUrl: envOrDefault("VITE_SITE_URL").replace(/\/$/, ""),
  googleMapsUrl: envOrDefault("VITE_GOOGLE_MAPS_URL"),
  analyticsEnabled: import.meta.env.VITE_ANALYTICS_ENABLED === "true",
} as const;

export function whatsappUrl(message?: string): string {
  const base = `https://api.whatsapp.com/send?phone=${env.whatsappNumber}`;
  if (!message) return base;
  return `${base}&text=${encodeURIComponent(message)}`;
}
