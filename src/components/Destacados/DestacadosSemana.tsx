import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "../ui/Reveal";

export default function DestacadosSemana() {
  return (
    <section
      id="destacados"
      className="bg-[#0c0505] px-4 py-16 text-white md:py-24"
      aria-labelledby="destacados-title"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2
            id="destacados-title"
            className="text-center font-sans text-3xl font-bold tracking-tight md:text-4xl"
          >
            Lo destacado de la semana
          </h2>
        </Reveal>

        <div className="mt-10 flex gap-5 overflow-x-auto pb-4 md:mt-14 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 lg:gap-6">
          <Reveal from="left" delayMs={80} className="min-w-[min(100%,22rem)] sm:min-w-0">
            <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white text-ink shadow-xl transition duration-500 hover:-translate-y-1 hover:shadow-2xl sm:flex-row">
              <div className="aspect-square w-full shrink-0 overflow-hidden sm:aspect-auto sm:w-[46%]">
                <img
                  src="/assets/eventos/invierno-modo-on.png"
                  alt="Invierno modo on — actividad para niños"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
                    Actividad de invierno
                  </p>
                  <h3 className="mt-2 font-sans text-xl font-bold tracking-tight sm:text-2xl">
                    ¡Invierno modo on!
                  </h3>
                  <p className="mt-3 text-sm font-semibold text-brand">
                    Sábado 18 y 25 de julio
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-muted">
                    <li>Juegos</li>
                    <li>Desayuno especial</li>
                    <li>Taller de tote bag y slime</li>
                  </ul>
                  <p className="mt-3 text-sm font-semibold text-ink">
                    ¡No te lo podés perder!
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    De 11:00 hs a 13:00 hs
                    <br />
                    Entrada libre y gratuita
                    <br />
                    Roosevelt 5537, Villa Urquiza
                  </p>
                </div>
                <Link
                  to="/ubicaciones"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand"
                >
                  Más información
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-brand/30 transition group-hover:bg-brand/5">
                    <ArrowRight size={14} aria-hidden />
                  </span>
                </Link>
              </div>
            </article>
          </Reveal>

          <Reveal from="right" delayMs={180} className="min-w-[min(100%,22rem)] sm:min-w-0">
            <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white text-ink shadow-xl transition duration-500 hover:-translate-y-1 hover:shadow-2xl sm:flex-row">
              <div className="aspect-square w-full shrink-0 overflow-hidden sm:aspect-auto sm:w-[46%]">
                <img
                  src="/assets/eventos/horita-feliz.png"
                  alt="Horita Feliz — juegos en la plaza para niños"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
                    Niños
                  </p>
                  <h3 className="mt-2 font-sans text-xl font-bold tracking-tight sm:text-2xl">
                    ¡Horita Feliz!
                  </h3>
                  <p className="mt-3 text-sm font-semibold text-brand">
                    Sábado 27/06 · 15:30 hs
                  </p>
                  <p className="mt-3 text-sm text-muted">
                    Juegos en la plaza con los niños. Un momento para compartir,
                    divertirse y conectar en familia.
                  </p>
                  <p className="mt-3 text-sm text-muted">
                    Plaza Echeverría — Villa Urquiza
                    <br />
                    Entrada libre y gratuita
                  </p>
                </div>
                <a
                  href="#oracion"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand"
                >
                  Más información
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-brand/30">
                    <ArrowRight size={14} aria-hidden />
                  </span>
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
