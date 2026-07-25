import { Navigate, useParams } from "react-router-dom";
import { getMinisterio } from "../data/ministerios";
import MinisterioLayout from "../components/Actividades/MinisterioLayout";
import FormularioOracion from "../components/Actividades/FormularioOracion";

export default function MinisterioPage() {
  const { slug } = useParams<{ slug: string }>();
  const ministerio = slug ? getMinisterio(slug) : undefined;

  if (!ministerio) {
    return <Navigate to="/" replace />;
  }

  return (
    <MinisterioLayout ministerio={ministerio}>
      {ministerio.slug === "oracion" ? <FormularioOracion /> : null}
    </MinisterioLayout>
  );
}
