import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./i18n";
import { initAnalytics } from "./lib/analytics";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('Root element "#root" not found');
}

initAnalytics();

createRoot(rootElement).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);
