import { env } from "./env";

/**
 * Stub de analytics listo para enchufar Plausible o GA4.
 * Mientras VITE_ANALYTICS_ENABLED !== "true", no carga scripts ni envía eventos.
 */
export function initAnalytics(): void {
  if (!env.analyticsEnabled || typeof window === "undefined") {
    return;
  }

  // TODO: cargar script de Plausible o gtag aquí cuando se active.
  // Ejemplo Plausible:
  // const script = document.createElement("script");
  // script.defer = true;
  // script.dataset.domain = "iglesiaurquiza.com.ar";
  // script.src = "https://plausible.io/js/script.js";
  // document.head.appendChild(script);
}

export function trackEvent(
  name: string,
  props?: Record<string, string | number | boolean>
): void {
  if (!env.analyticsEnabled) return;

  // TODO: window.plausible?.(name, { props }) o gtag("event", name, props)
  if (import.meta.env.DEV) {
    console.debug("[analytics:stub]", name, props);
  }
}
