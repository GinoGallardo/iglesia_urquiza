function Nosotros() {
  return (
    <section
      id="nosotros"
      className="section-space bg-surface-elevated"
      aria-labelledby="nosotros-title"
    >
      <div className="section-shell">
        <p className="subtitulo text-center text-2xl text-brand md:text-3xl dark:text-brand-light">
          Quiénes somos
        </p>
        <h2
          id="nosotros-title"
          className="sr-only"
        >
          Sobre nosotros
        </h2>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="overflow-hidden rounded-2xl shadow-sm">
            <picture>
              <source srcSet="/assets/ICE-urquiza.avif" type="image/avif" />
              <source srcSet="/assets/ICE-urquiza.webp" type="image/webp" />
              <img
                src="/assets/ICE-urquiza.png"
                alt="Frente de la Iglesia"
                loading="lazy"
                decoding="async"
                width={640}
                height={480}
                className="h-full w-full object-cover"
              />
            </picture>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="font-sans text-2xl font-bold tracking-tight text-ink md:text-3xl lg:text-4xl">
              Llevamos el evangelio, vivimos el propósito
            </h3>
            <p className="font-sans text-base leading-relaxed text-muted md:text-lg">
              Compartimos las buenas noticias de Jesús con el mundo, no solo con
              palabras, sino con acciones. Vivimos con la certeza de que fuimos
              llamados a amar, servir y reflejar a Cristo en todo lo que hacemos.
            </p>

            <div className="mt-2 grid gap-6">
              <div>
                <h4 className="font-sans text-lg font-semibold text-brand dark:text-brand-light">
                  Misión
                </h4>
                <p className="mt-1 font-sans text-base leading-relaxed text-muted md:text-lg">
                  Proclamar el Evangelio de Jesucristo, hacer discípulos y
                  servir con amor. (Mateo 28:19-20).
                </p>
              </div>
              <div>
                <h4 className="font-sans text-lg font-semibold text-brand dark:text-brand-light">
                  Visión
                </h4>
                <p className="mt-1 font-sans text-base leading-relaxed text-muted md:text-lg">
                  Ser una iglesia que refleja el amor de Dios, guiando a las
                  personas a una relación con Cristo. (Efesios 4:12-13).
                </p>
              </div>
              <div>
                <h4 className="font-sans text-lg font-semibold text-brand dark:text-brand-light">
                  Objetivos
                </h4>
                <p className="mt-1 font-sans text-base leading-relaxed text-muted md:text-lg">
                  Evangelizar (Marcos 16:15), discipular (Colosenses 1:28),
                  servir (Gálatas 6:9-10) y unir a la iglesia en adoración y
                  comunión (Hebreos 10:24-25).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;
