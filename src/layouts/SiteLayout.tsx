import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import ButtonWhatsApp from "../components/WhatsApp/ButtonWhatsApp";

function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, "");
  if (!id) return;
  const section = document.getElementById(id);
  if (!section) return;
  const offset = 80;
  const top = section.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function SiteLayout() {
  const location = useLocation();
  const isUbicaciones = location.pathname.startsWith("/ubicaciones");
  const hideFooter = isUbicaciones;

  useEffect(() => {
    if (location.hash) {
      // Lazy routes: reintentar hasta que el ancla exista
      let attempts = 0;
      const tryScroll = () => {
        const el = document.getElementById(location.hash.replace(/^#/, ""));
        if (el) {
          scrollToHash(location.hash);
          return;
        }
        attempts += 1;
        if (attempts < 20) window.setTimeout(tryScroll, 50);
      };
      requestAnimationFrame(tryScroll);
    } else if (!isUbicaciones) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash, isUbicaciones]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
      <ButtonWhatsApp />
    </>
  );
}
