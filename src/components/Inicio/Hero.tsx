import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Sparkles, CalendarDays } from "lucide-react";
import { useVersiculoDelDia } from "../../hooks/useVersiculoDelDia";

export default function Hero() {
  const { texto, referencia, loading } = useVersiculoDelDia();

  const versiculoDescripcion = loading
    ? "Cargando el versículo de hoy…"
    : `“${texto}” — ${referencia}`;

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[calc(100svh-4.75rem)] flex-col overflow-hidden bg-[#1a0808]"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 -z-10">
        <picture>
          <source srcSet="/assets/portada-web-hero.avif" type="image/avif" />
          <source srcSet="/assets/portada-web-hero.webp" type="image/webp" />
          <img
            src="/assets/portada-web-hero.jpg"
            alt=""
            className="hero-kenburns h-full w-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>

      <div className="section-shell relative z-10 flex flex-1 flex-col justify-center py-10 lg:py-14">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="max-w-xl text-left text-white">
            <h1
              id="hero-title"
              className="hero-enter font-sans text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Bienvenido a
              <span className="mt-1 block font-accent text-[1.15em] font-normal text-[#e8b4b4]">
                Iglesia de Urquiza
              </span>
            </h1>

            <p className="hero-enter-delay-1 mt-6 text-base leading-relaxed text-white/85 sm:text-lg">
              Te ayudamos a{" "}
              <strong className="font-semibold text-white">
                conocer a Dios, crecer en tu fe
              </strong>{" "}
              y encontrar una comunidad que camine junto a vos.
            </p>

            <p className="hero-enter-delay-2 mt-5 text-sm text-white/70 sm:text-base">
              Encontrá la experiencia adecuada para vos.
            </p>

            <div className="hero-enter-delay-3 mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/ubicaciones"
                className="inline-flex items-center rounded-full bg-[#e8b4b4] px-5 py-2.5 text-sm font-semibold text-[#3a0a0a] transition hover:bg-white"
              >
                Encontrá tu iglesia →
              </Link>
              <a
                href="#oracion"
                className="inline-flex items-center rounded-full border border-white/40 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/10"
              >
                Pedí oración →
              </a>
            </div>
          </div>

          <div className="hero-enter-delay-4 flex flex-col gap-3 sm:gap-4">
            <TarjetaGlass
              icono={<BookOpen size={20} />}
              titulo="Versículo diario"
              descripcion={versiculoDescripcion}
              to="/calendario"
              etiqueta="Ver más"
            />
            <TarjetaGlass
              icono={<Sparkles size={20} />}
              titulo="Devocional"
              descripcion="Un espacio corto para meditar la Palabra y orar antes de empezar tu día."
              href="#devocional"
              etiqueta="Ver devocional"
            />
            <TarjetaGlass
              icono={<CalendarDays size={20} />}
              titulo="Calendario"
              descripcion="Repasá los versículos del mes: los que ya pasaron y los que vienen."
              to="/calendario"
              etiqueta="Ver calendario"
            />
          </div>
        </div>

        <div className="scroll-hint mt-10 hidden items-center gap-3 text-[11px] tracking-[0.25em] text-white/55 uppercase lg:flex">
          <span className="h-px w-8 bg-white/40" aria-hidden />
          Deslizá para explorar
        </div>
      </div>
    </section>
  );
}

interface TarjetaGlassProps {
  icono: ReactNode;
  titulo: string;
  descripcion: string;
  etiqueta: string;
  to?: string;
  href?: string;
}

function TarjetaGlass({
  icono,
  titulo,
  descripcion,
  etiqueta,
  to,
  href,
}: TarjetaGlassProps) {
  const className =
    "group flex gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 text-left shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/15 sm:p-5";

  const content = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 text-white transition duration-300 group-hover:scale-110">
        {icono}
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="font-sans text-base font-semibold text-white">
          {titulo}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm leading-snug text-white/70">
          {descripcion}
        </p>
        <span className="mt-3 inline-block text-xs font-semibold tracking-wider text-[#e8b4b4] uppercase transition group-hover:text-white">
          {etiqueta} →
        </span>
      </div>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {content}
    </a>
  );
}
