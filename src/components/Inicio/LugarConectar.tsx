import { Link } from "react-router-dom";
import { Reveal } from "../ui/Reveal";

export default function LugarConectar() {
  return (
    <section
      className="relative bg-[#e8e4e0] text-ink dark:bg-[#1a0c0c] dark:text-white"
      aria-labelledby="conectar-title"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-10 overflow-hidden"
        aria-hidden
      >
        <div className="absolute inset-x-0 top-0 h-full origin-top-left -skew-y-1 bg-[#cfc9c3]/80 dark:bg-white/5" />
        <div className="absolute inset-x-0 top-2 h-full origin-top-right skew-y-1 bg-[#d9d4cf]/70 dark:bg-white/5" />
      </div>

      <div className="section-shell relative flex flex-col items-center gap-10 py-16 md:flex-row md:items-center md:gap-16 md:py-20 lg:gap-20">
        <Reveal from="scale" className="relative flex h-40 w-40 shrink-0 items-center justify-center md:h-48 md:w-48">
          <svg
            viewBox="0 0 200 200"
            className="sello-spin absolute inset-0 h-full w-full"
            aria-hidden
          >
            <circle
              cx="100"
              cy="100"
              r="96"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-ink/40 dark:text-white/40"
            />
            <defs>
              <path
                id="sello-arc"
                d="M 30,100 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
              />
            </defs>
            <text
              className="fill-current text-[13px] tracking-[0.28em] uppercase"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <textPath href="#sello-arc" startOffset="0%">
                iglesia de urquiza · villa urquiza ·
              </textPath>
            </text>
          </svg>
          <span className="font-sans text-5xl font-bold tracking-tight md:text-6xl">
            VU
          </span>
        </Reveal>

        <Reveal from="right" delayMs={120} className="max-w-xl text-center md:text-left">
          <h2
            id="conectar-title"
            className="font-sans text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-tight"
          >
            Un lugar para conectar con Jesús
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/70 md:text-lg dark:text-white/70">
            Cada semana en nuestras reuniones podés conocer nuevas amistades,
            pero definitivamente creemos que es posible que encuentres a tus
            mejores amigos.
          </p>
          <Link
            to="/ubicaciones"
            className="mt-6 inline-flex items-center gap-1 border-b border-ink pb-0.5 text-sm font-semibold tracking-wide transition hover:opacity-70 dark:border-white"
          >
            Ubicaciones y horarios ↗
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
