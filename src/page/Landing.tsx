import Hero from "../components/Inicio/Hero";
import DestacadosSemana from "../components/Destacados/DestacadosSemana";
import LugarConectar from "../components/Inicio/LugarConectar";
import Oracion from "../components/Oramos/Oracion";
import DevocionalHoy from "../components/Devocional/DevocionalHoy";
import Seo from "../components/Seo/Seo";

function Landing() {
  return (
    <>
      <Seo />
      <Hero />
      <DestacadosSemana />
      <LugarConectar />
      <DevocionalHoy />
      <Oracion />
    </>
  );
}

export default Landing;
