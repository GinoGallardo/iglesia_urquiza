import { loadEnv } from "vite";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/** Fallbacks para tests locales/CI si falta `.env`. */
const TEST_ENV_DEFAULTS: Record<string, string> = {
  VITE_WHATSAPP_NUMBER: "91121697373",
  VITE_MAP_LAT: "-34.5761956",
  VITE_MAP_LNG: "-58.4920701",
  VITE_MAP_ZOOM: "16",
  VITE_SITE_URL: "https://iglesiaurquiza.com.ar",
  VITE_GOOGLE_MAPS_URL:
    "https://www.google.com.ar/maps/place/Iglesia+Urquiza/@-34.5761956,-58.4920701,20.5z",
  VITE_ANALYTICS_ENABLED: "false",
};

export default defineConfig(({ mode }) => {
  const fileEnv = loadEnv(mode, process.cwd(), "");
  for (const [key, value] of Object.entries(TEST_ENV_DEFAULTS)) {
    if (!process.env[key] && !fileEnv[key]) {
      process.env[key] = value;
    }
  }

  return {
    plugins: [tailwindcss(), react()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/test/setup.ts",
      css: true,
    },
  };
});
