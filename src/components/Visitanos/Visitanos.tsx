import { IoIosPlayCircle } from "react-icons/io";
import Maps from "./Maps";

function Visitanos() {
  return (
    <section
      id="visitanos"
      className="section-space bg-surface"
      aria-labelledby="visitanos-title"
    >
      <div className="section-shell">
        <div className="mb-10 max-w-2xl md:mb-14">
          <p className="subtitulo text-brand text-2xl md:text-3xl">Visitanos</p>
          <h2
            id="visitanos-title"
            className="mt-2 font-sans text-3xl font-bold tracking-tight text-ink md:text-4xl lg:text-5xl"
          >
            Sumate a nuestras reuniones
          </h2>
          <p className="mt-3 text-base text-muted md:text-lg">
            Te esperamos con los brazos abiertos. Traé tu familia y compartí un
            momento de fe y comunidad.
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          <article className="flex flex-col justify-center rounded-2xl border border-black/5 bg-surface-elevated p-6 shadow-sm md:p-8 lg:p-10">
            <h3 className="font-sans text-lg font-semibold text-brand md:text-xl">
              Dirección
            </h3>
            <p className="mt-2 font-sans text-base text-ink md:text-lg">
              Roosevelt 5537 — Villa Urquiza, CABA
            </p>

            <h3 className="mt-8 font-sans text-lg font-semibold text-brand md:text-xl">
              Horarios
            </h3>
            <ul className="mt-3 space-y-3">
              <li className="flex items-center gap-3 font-sans text-base text-ink md:text-lg">
                <IoIosPlayCircle
                  size={28}
                  className="shrink-0 text-brand"
                  aria-hidden="true"
                />
                Jueves 20:00 hs
              </li>
              <li className="flex items-center gap-3 font-sans text-base text-ink md:text-lg">
                <IoIosPlayCircle
                  size={28}
                  className="shrink-0 text-brand"
                  aria-hidden="true"
                />
                Domingo 10:30 hs
              </li>
            </ul>
          </article>

          <div className="min-h-[320px] overflow-hidden rounded-2xl border border-black/5 bg-surface-elevated shadow-sm lg:min-h-[380px]">
            <Maps />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Visitanos;
