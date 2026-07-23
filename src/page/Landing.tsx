import { lazy, Suspense } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/Header";
import Home from "../components/Inicio/Home";
import Nosotros from "../components/Nosotros/Nosotros";
import Oracion from "../components/Oramos/Oracion";
import ButtonWhatsApp from "../components/WhatsApp/ButtonWhatsApp";

const Visitanos = lazy(() => import("../components/Visitanos/Visitanos"));
const Actividades = lazy(() => import("../components/Actividades/Actividades"));

function SectionFallback() {
  return (
    <div
      className="flex min-h-48 items-center justify-center text-[#5f0404]"
      role="status"
      aria-live="polite"
    >
      Cargando…
    </div>
  );
}

function Landing() {
  return (
    <>
      <Header />
      <Home />
      <Nosotros />
      <Suspense fallback={<SectionFallback />}>
        <Visitanos />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Actividades />
      </Suspense>
      <Oracion />
      <ButtonWhatsApp />
      <Footer />
    </>
  );
}

export default Landing;
