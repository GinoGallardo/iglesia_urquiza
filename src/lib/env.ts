function requireEnv(key: keyof ImportMetaEnv): string {
  const value = import.meta.env[key];
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`Missing required env var: ${key}`);
  }
  return value;
}

export const env = {
  whatsappNumber: requireEnv("VITE_WHATSAPP_NUMBER"),
  mapLat: Number(requireEnv("VITE_MAP_LAT")),
  mapLng: Number(requireEnv("VITE_MAP_LNG")),
  mapZoom: Number(import.meta.env.VITE_MAP_ZOOM ?? "16"),
  siteUrl: requireEnv("VITE_SITE_URL").replace(/\/$/, ""),
  googleMapsUrl: requireEnv("VITE_GOOGLE_MAPS_URL"),
  analyticsEnabled: import.meta.env.VITE_ANALYTICS_ENABLED === "true",
} as const;

export function whatsappUrl(message?: string): string {
  const base = `https://api.whatsapp.com/send?phone=${env.whatsappNumber}`;
  if (!message) return base;
  return `${base}&text=${encodeURIComponent(message)}`;
}
