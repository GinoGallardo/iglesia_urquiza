import { useEffect, useMemo, useState } from "react";
import UbicacionesSidebar from "../components/Ubicaciones/UbicacionesSidebar";
import UbicacionesMap from "../components/Ubicaciones/UbicacionesMap";
import type { Iglesia } from "../types/iglesia";
import Seo from "../components/Seo/Seo";

export default function UbicacionesPage() {
  const [iglesias, setIglesias] = useState<Iglesia[]>([]);
  const [seleccionada, setSeleccionada] = useState<Iglesia | null>(null);
  const [busqueda, setBusqueda] = useState("");
  const [provincia, setProvincia] = useState("Todas");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch("/data/iglesias.json")
      .then((res) => res.json())
      .then((data: Iglesia[]) => {
        if (cancelled) return;
        setIglesias(data);
        const destacada = data.find((i) => i.destacada) ?? data[0] ?? null;
        setSeleccionada(destacada);
        setLoading(false);
      })
      .catch(() => {
        if (!cancelled) {
          setIglesias([]);
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const provincias = useMemo(() => {
    const set = new Set(iglesias.map((i) => i.provincia));
    return [...set].sort((a, b) => a.localeCompare(b, "es"));
  }, [iglesias]);

  const filtradas = useMemo(() => {
    const q = busqueda.trim().toLowerCase();
    return iglesias.filter((i) => {
      const matchProvincia =
        provincia === "Todas" || i.provincia === provincia;
      if (!matchProvincia) return false;
      if (!q) return true;
      const haystack = [
        i.nombre,
        i.ciudad,
        i.provincia,
        i.direccion,
        i.nota ?? "",
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [iglesias, busqueda, provincia]);

  return (
    <>
      <Seo
        title="Ubicaciones · Iglesia de Urquiza"
        description="Encontrá iglesias Hermanos Libres (Iglesia Cristiana Evangélica) en CABA y Buenos Aires. Mapa y direcciones."
        path="/ubicaciones"
      />
      <div className="flex h-[calc(100svh-4.75rem)] flex-col bg-surface lg:flex-row">
        <div className="h-[48%] min-h-0 w-full lg:h-full lg:w-[min(26rem,38%)]">
          {loading ? (
            <div className="flex h-full items-center justify-center text-sm text-muted">
              Cargando ubicaciones…
            </div>
          ) : (
            <UbicacionesSidebar
              filtradas={filtradas}
              seleccionada={seleccionada}
              busqueda={busqueda}
              provincia={provincia}
              provincias={provincias}
              onBusqueda={setBusqueda}
              onProvincia={setProvincia}
              onSelect={setSeleccionada}
            />
          )}
        </div>
        <div className="relative min-h-0 flex-1">
          {!loading && (
            <UbicacionesMap
              iglesias={filtradas.length > 0 ? filtradas : iglesias}
              seleccionada={seleccionada}
              onSelect={setSeleccionada}
            />
          )}
        </div>
      </div>
    </>
  );
}
