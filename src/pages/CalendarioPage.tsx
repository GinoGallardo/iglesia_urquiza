import CalendarioVersiculos from "../components/Calendario/CalendarioVersiculos";
import Seo from "../components/Seo/Seo";

export default function CalendarioPage() {
  return (
    <>
      <Seo
        title="Calendario de versículos · Iglesia de Urquiza"
        description="Repasá los versículos del mes: los que ya pasaron y los que vienen."
        path="/calendario"
      />
      <CalendarioVersiculos />
    </>
  );
}
