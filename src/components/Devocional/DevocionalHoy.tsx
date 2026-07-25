import { useEffect, useState } from "react";
import { fetchDevocionalDeHoy } from "../../lib/devocionalesApi";
import type { Devocional } from "../../types/devocional";
import { Reveal } from "../ui/Reveal";

export default function DevocionalHoy() {
  const [devocional, setDevocional] = useState<Devocional | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      const data = await fetchDevocionalDeHoy();
      if (!cancelled) {
        setDevocional(data);
        setLoading(false);
      }
    };
    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading || !devocional) {
    return null;
  }

  return (
    <section
      id="devocional"
      className="section-space bg-surface-elevated"
      aria-labelledby="devocional-title"
    >
      <div className="section-shell max-w-3xl">
        <Reveal>
          <p className="subtitulo text-2xl text-brand md:text-3xl dark:text-brand-light">
            Devocional de Hoy
          </p>
          <h2
            id="devocional-title"
            className="mt-2 font-sans text-3xl font-bold tracking-tight text-ink md:text-4xl"
          >
            {devocional.titulo}
          </h2>
          <p className="mt-3 font-sans text-sm font-semibold tracking-wide text-brand uppercase dark:text-brand-light">
            {devocional.versiculo_referencia}
          </p>
        </Reveal>
        <Reveal delayMs={120} from="up">
          <div className="mt-6 rounded-2xl border border-black/5 bg-surface p-6 md:p-8 dark:border-white/10">
            <p className="whitespace-pre-line font-sans text-base leading-relaxed text-ink md:text-lg">
              {devocional.contenido}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
