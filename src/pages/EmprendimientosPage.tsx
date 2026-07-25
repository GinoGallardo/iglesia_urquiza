import Emprendimientos from "../components/Emprendimientos/Emprendimientos";
import Seo from "../components/Seo/Seo";

export default function EmprendimientosPage() {
  return (
    <>
      <Seo
        title="Emprendimientos · Iglesia de Urquiza"
        description="Hermanos y hermanas que trabajan de forma independiente o tienen su propio negocio. Conocelos y apoyalos."
        path="/emprendimientos"
      />
      <Emprendimientos />
    </>
  );
}
