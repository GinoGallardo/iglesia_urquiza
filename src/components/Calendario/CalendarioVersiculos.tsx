import { useMemo, useState } from "react";
import { Check, Lock } from "lucide-react";
import { getDayOfYear } from "../../hooks/useVersiculoDelDia";
import { VERSICULOS_CURADOS } from "../../data/versiculosCurados";

const HOY = new Date();
const NOMBRE_MES = HOY.toLocaleDateString("es-AR", {
  month: "long",
  year: "numeric",
});
const DIAS_SEMANA = ["D", "L", "M", "M", "J", "V", "S"];

interface VersiculoDia {
  dia: number;
  texto: string;
  referencia: string;
}

/**
 * Deriva el versículo de cada día del mes actual desde VERSICULOS_CURADOS,
 * usando la misma lógica (día del año) que el hook del versículo diario.
 * Así el calendario comparte la fuente de datos, sin JSON paralelo.
 */
function construirMes(): VersiculoDia[] {
  const anio = HOY.getFullYear();
  const mes = HOY.getMonth();
  const diasEnMes = new Date(anio, mes + 1, 0).getDate();

  return Array.from({ length: diasEnMes }, (_, i) => {
    const dia = i + 1;
    const fecha = new Date(anio, mes, dia);
    const index = getDayOfYear(fecha) % VERSICULOS_CURADOS.length;
    const ref = VERSICULOS_CURADOS[index] ?? VERSICULOS_CURADOS[0]!;
    return {
      dia,
      texto: ref.fallbackTexto,
      referencia: ref.label,
    };
  });
}

export default function CalendarioVersiculos() {
  const versiculos = useMemo(() => construirMes(), []);
  const [diaSeleccionado, setDiaSeleccionado] = useState<number | null>(null);

  const diaHoy = HOY.getDate();
  const primerDiaSemana = new Date(
    HOY.getFullYear(),
    HOY.getMonth(),
    1
  ).getDay();
  const celdasVacias = Array.from({ length: primerDiaSemana });
  const diaActivo = diaSeleccionado ?? diaHoy;
  const versiculoActivo =
    versiculos.find((v) => v.dia === diaActivo) ?? null;

  return (
    <section id="calendario" className="bg-surface px-4 py-8 md:py-10">
      <div className="section-shell max-w-5xl">
        <p className="text-center text-sm tracking-[0.3em] text-brand uppercase dark:text-brand-light">
          Calendario de versículos
        </p>
        <h2 className="mt-2 text-center font-accent text-3xl capitalize text-brand dark:text-white">
          {NOMBRE_MES}
        </h2>

        <div className="mt-6 grid gap-8 lg:mt-8 lg:grid-cols-[1.2fr_1fr] lg:gap-10">
          <div className="grid grid-cols-7 gap-1.5 text-center sm:gap-2">
            {DIAS_SEMANA.map((d, i) => (
              <div
                key={i}
                className="text-xs font-semibold text-gray-400 dark:text-gray-500"
              >
                {d}
              </div>
            ))}
            {celdasVacias.map((_, i) => (
              <div key={`vacio-${i}`} />
            ))}
            {versiculos.map((v) => {
              const esPasado = v.dia < diaHoy;
              const esHoy = v.dia === diaHoy;
              const esFuturo = v.dia > diaHoy;
              const estaSeleccionado = diaActivo === v.dia;

              return (
                <button
                  key={v.dia}
                  type="button"
                  disabled={esFuturo}
                  onClick={() => setDiaSeleccionado(v.dia)}
                  className={`relative flex aspect-square flex-col items-center justify-center rounded-xl text-sm transition-colors
                    ${
                      esFuturo
                        ? "cursor-not-allowed text-gray-300 dark:text-gray-700"
                        : "text-ink hover:bg-brand/10 dark:hover:bg-white/10"
                    }
                    ${
                      esHoy
                        ? "bg-brand text-white hover:bg-brand dark:bg-white dark:text-[#140505]"
                        : ""
                    }
                    ${
                      estaSeleccionado && !esHoy
                        ? "ring-2 ring-brand dark:ring-white"
                        : ""
                    }`}
                >
                  {v.dia}
                  {esPasado && (
                    <Check
                      size={10}
                      className="absolute bottom-1 text-green-600 dark:text-green-400"
                    />
                  )}
                  {esFuturo && (
                    <Lock size={9} className="absolute bottom-1" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="rounded-2xl bg-brand/5 p-6 dark:bg-white/5 md:p-8">
            {versiculoActivo ? (
              <>
                <p className="text-xs tracking-widest text-brand uppercase dark:text-brand-light">
                  Día {versiculoActivo.dia}
                </p>
                <p className="mt-3 font-accent text-lg leading-relaxed text-ink md:mt-4 md:text-xl">
                  “{versiculoActivo.texto}”
                </p>
                <p className="mt-3 text-sm font-semibold text-brand dark:text-brand-light md:mt-4">
                  {versiculoActivo.referencia}
                </p>
              </>
            ) : (
              <p className="text-sm text-muted">
                Seleccioná un día para ver su versículo.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
