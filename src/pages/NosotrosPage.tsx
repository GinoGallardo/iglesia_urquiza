import Seo from "../components/Seo/Seo";

const DECLARACION = [
  {
    titulo: "La Santa Biblia",
    texto:
      "La Biblia es la Palabra de Dios, inspirada, infalible y suficiente. Es nuestra única autoridad para la fe y la práctica.",
    refs: "2 Timoteo 3:16-17; 2 Pedro 1:20-21",
  },
  {
    titulo: "Dios — Trinidad",
    texto:
      "Creemos en un solo Dios, eterno, que se revela en tres personas: el Padre, el Hijo y el Espíritu Santo, co-iguales y co-eternos.",
    refs: "Deuteronomio 6:4; Mateo 28:19; 2 Corintios 13:14",
  },
  {
    titulo: "Jesucristo",
    texto:
      "Jesucristo es verdadero Dios y verdadero hombre. Nació de la virgen María, vivió sin pecado, murió en la cruz por nuestros pecados, resucitó al tercer día y está a la diestra del Padre.",
    refs: "Juan 1:1,14; Filipenses 2:5-11; 1 Corintios 15:3-4",
  },
  {
    titulo: "El Espíritu Santo",
    texto:
      "El Espíritu Santo habita en todo creyente, lo regenera, lo sella, lo guía y lo capacita para vivir y servir a Cristo.",
    refs: "Juan 14:16-17; Romanos 8:9-11; Efesios 1:13-14",
  },
  {
    titulo: "El ser humano y el pecado",
    texto:
      "El ser humano fue creado a imagen de Dios, pero por la desobediencia cayó en pecado. Todos necesitamos salvación.",
    refs: "Génesis 1:27; Romanos 3:23; Romanos 5:12",
  },
  {
    titulo: "Salvación",
    texto:
      "Somos salvos por gracia mediante la fe en Jesucristo, no por obras. El arrepentimiento y la fe personal en Él son la puerta a la vida eterna.",
    refs: "Efesios 2:8-9; Juan 3:16; Romanos 10:9-10",
  },
  {
    titulo: "La Iglesia",
    texto:
      "La iglesia local es la asamblea de creyentes reunidos en el nombre del Señor. Creemos en el sacerdocio de todos los creyentes y en la autonomía de cada congregación bajo la autoridad de Cristo.",
    refs: "Mateo 18:20; Efesios 4:11-16; 1 Pedro 2:9",
  },
  {
    titulo: "Bautismo",
    texto:
      "El bautismo es por inmersión, para quienes han creído en Cristo. Simboliza muerte al pecado y nueva vida en Él.",
    refs: "Mateo 28:19; Hechos 2:38; Romanos 6:3-4",
  },
  {
    titulo: "La Cena del Señor",
    texto:
      "Celebramos la Cena del Señor en memoria de su sacrificio, hasta que Él vuelva. Es un acto de comunión, acción de gracias y esperanza.",
    refs: "Lucas 22:19-20; 1 Corintios 11:23-26",
  },
  {
    titulo: "La esperanza eterna",
    texto:
      "Creemos en la resurrección de los muertos y en la segunda venida de Cristo. Los que están en Él heredarán vida eterna.",
    refs: "1 Tesalonicenses 4:16-17; Juan 14:1-3; Apocalipsis 21:1-4",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <Seo
        title="Nosotros · Iglesia de Urquiza"
        description="Conocé nuestra historia, misión, visión y en qué creemos. Iglesia Cristiana Evangélica (Hermanos Libres) en Villa Urquiza."
        path="/nosotros"
      />

      {/* Hero intro — estilo Másvida */}
      <section className="relative overflow-hidden bg-[#0c0505] text-white">
        <div className="absolute inset-0">
          <picture>
            <source srcSet="/assets/ICE-urquiza.avif" type="image/avif" />
            <source srcSet="/assets/ICE-urquiza.webp" type="image/webp" />
            <img
              src="/assets/ICE-urquiza.png"
              alt=""
              className="h-full w-full object-cover opacity-35"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
        </div>

        <div className="section-shell relative z-10 py-16 md:py-24 lg:py-28">
          <p className="text-sm tracking-[0.3em] text-white/60 uppercase">
            Iglesia de Urquiza
          </p>
          <h1 className="mt-3 max-w-3xl font-sans text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Nosotros
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            Conocé nuestra historia, misión y visión, así como aquello en lo que
            creemos. Somos una congregación de la denominación Hermanos Libres
            (Iglesia Cristiana Evangélica) en Villa Urquiza.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#mision-vision"
              className="inline-flex items-center rounded-full bg-[#e8b4b4] px-5 py-2.5 text-sm font-semibold text-[#3a0a0a] transition hover:bg-white"
            >
              Visión y misión →
            </a>
            <a
              href="#en-esto-creemos"
              className="inline-flex items-center rounded-full border border-white/40 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/10"
            >
              En esto creemos →
            </a>
          </div>
        </div>
      </section>

      {/* Quiénes somos */}
      <section className="section-space bg-surface-elevated">
        <div className="section-shell grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="overflow-hidden rounded-[1.75rem] shadow-sm">
            <picture>
              <source srcSet="/assets/ICE-urquiza.avif" type="image/avif" />
              <source srcSet="/assets/ICE-urquiza.webp" type="image/webp" />
              <img
                src="/assets/ICE-urquiza.png"
                alt="Frente de la Iglesia de Urquiza"
                loading="lazy"
                decoding="async"
                width={640}
                height={480}
                className="h-full w-full object-cover"
              />
            </picture>
          </div>

          <div>
            <p className="text-sm tracking-[0.25em] text-brand uppercase dark:text-brand-light">
              Nuestra historia
            </p>
            <h2 className="mt-2 font-sans text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Llevamos el evangelio, vivimos el propósito
            </h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-muted md:text-lg">
              Compartimos las buenas noticias de Jesús con el mundo, no solo con
              palabras, sino con acciones. Vivimos con la certeza de que fuimos
              llamados a amar, servir y reflejar a Cristo en todo lo que
              hacemos.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-muted md:text-lg">
              Como Hermanos Libres, nos reunimos alrededor de la Palabra y de
              la Cena del Señor, creyendo en el sacerdocio de todos los
              creyentes y en una iglesia local que camina en comunión y
              servicio.
            </p>
          </div>
        </div>
      </section>

      {/* Misión · Visión · Objetivos */}
      <section
        id="mision-vision"
        className="scroll-mt-24 bg-[#0c0505] px-4 py-16 text-white md:py-24"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm tracking-[0.3em] text-white/50 uppercase">
            Historia · Misión · Visión
          </p>
          <h2 className="mt-3 text-center font-sans text-3xl font-bold tracking-tight md:text-4xl">
            Propósito
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-white/75 md:text-lg">
            ¿Por qué lo hacemos? Ayudamos a las personas a conocer a Dios,
            crecer en su fe y encontrar una comunidad que camine junto a ellos.
          </p>

          <div className="mt-14 space-y-12 md:space-y-16">
            <div className="border-t border-white/15 pt-10">
              <h3 className="font-sans text-sm font-semibold tracking-[0.3em] text-[#e8b4b4] uppercase">
                Visión
              </h3>
              <p className="mt-4 max-w-3xl font-sans text-2xl font-medium leading-snug md:text-3xl">
                Ser una iglesia que refleja el amor de Dios, guiando a las
                personas a una relación con Cristo.
              </p>
              <p className="mt-3 text-sm text-white/50">Efesios 4:12-13</p>
            </div>

            <div className="border-t border-white/15 pt-10">
              <h3 className="font-sans text-sm font-semibold tracking-[0.3em] text-[#e8b4b4] uppercase">
                Misión
              </h3>
              <p className="mt-4 max-w-3xl font-sans text-2xl font-medium leading-snug md:text-3xl">
                Proclamar el Evangelio de Jesucristo, hacer discípulos y servir
                con amor.
              </p>
              <p className="mt-3 text-sm text-white/50">Mateo 28:19-20</p>
            </div>

            <div className="border-t border-white/15 pt-10">
              <h3 className="font-sans text-sm font-semibold tracking-[0.3em] text-[#e8b4b4] uppercase">
                Objetivos
              </h3>
              <p className="mt-4 max-w-3xl font-sans text-2xl font-medium leading-snug md:text-3xl">
                Evangelizar, discipular, servir y unir a la iglesia en adoración
                y comunión.
              </p>
              <p className="mt-3 text-sm text-white/50">
                Marcos 16:15 · Colosenses 1:28 · Gálatas 6:9-10 · Hebreos
                10:24-25
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* En esto creemos */}
      <section
        id="en-esto-creemos"
        className="scroll-mt-24 section-space bg-surface-elevated"
      >
        <div className="section-shell max-w-4xl">
          <p className="text-center text-sm tracking-[0.3em] text-brand uppercase dark:text-brand-light">
            En esto creemos
          </p>
          <h2 className="mt-2 text-center font-sans text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Declaración de fe
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-muted md:text-lg">
            Nuestro fundamento es la Palabra de Dios. Estas son las verdades
            esenciales que sostienen nuestra fe y nuestra vida en comunidad.
          </p>

          <div className="mt-12 space-y-0 divide-y divide-black/10 dark:divide-white/10">
            {DECLARACION.map((item) => (
              <article key={item.titulo} className="py-7 first:pt-0 md:py-8">
                <h3 className="font-sans text-lg font-semibold text-brand dark:text-brand-light md:text-xl">
                  {item.titulo}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted md:text-lg">
                  {item.texto}
                </p>
                <p className="mt-2 text-sm text-ink/50 dark:text-white/40">
                  {item.refs}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
