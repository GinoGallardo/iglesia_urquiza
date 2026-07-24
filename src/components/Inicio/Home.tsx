import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Button from "../ui/Button";
import { whatsappUrl } from "../../lib/env";
import { useVersiculoDelDia } from "../../hooks/useVersiculoDelDia";

function Home() {
  const { texto, referencia, loading } = useVersiculoDelDia();

  return (
    <section
      id="inicio"
      className="flex items-center bg-surface py-8 md:py-10 lg:min-h-[calc(100svh-4.75rem)] lg:py-8"
      aria-labelledby="hero-title"
    >
      <div className="section-shell grid w-full items-center gap-6 md:gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="order-2 flex flex-col items-start text-left lg:order-1">
          <p className="font-sans text-xs font-medium tracking-[0.16em] text-brand/80 uppercase md:text-sm">
            Villa Urquiza · Buenos Aires
          </p>
          <h1
            id="hero-title"
            className="mt-2 font-sans text-3xl font-bold tracking-tight text-ink md:text-4xl lg:text-[2.75rem] lg:leading-tight"
          >
            Iglesia de Urquiza
          </h1>
          <p className="subtitulo mt-2 text-xl text-brand md:text-2xl">
            Versículo del día
          </p>

          <blockquote className="mt-4 max-w-xl border-l-4 border-brand/30 pl-4">
            {loading ? (
              <p className="font-sans text-base text-muted" role="status">
                Cargando versículo…
              </p>
            ) : (
              <>
                <p className="font-sans text-base leading-relaxed text-ink md:text-lg">
                  “{texto}”
                </p>
                <footer className="mt-2 font-sans text-sm font-semibold tracking-wide text-brand">
                  — {referencia}
                </footer>
              </>
            )}
          </blockquote>

          <Button
            href={whatsappUrl("Hola, me gustaría charlar con ustedes.")}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="md"
            className="mt-5"
          >
            <IoArrowForwardCircleOutline size={22} aria-hidden="true" />
            Charla con nosotros
          </Button>
        </div>

        <div className="order-1 lg:order-2">
          <div className="mx-auto max-h-[min(42vh,22rem)] overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 lg:max-h-[min(62svh,28rem)]">
            <picture>
              <source srcSet="/assets/portada-web-hero.avif" type="image/avif" />
              <source srcSet="/assets/portada-web-hero.webp" type="image/webp" />
              <img
                src="/assets/portada-web-hero.jpg"
                alt="Comunidad de Iglesia de Urquiza"
                className="h-full max-h-[min(42vh,22rem)] w-full object-cover object-center lg:max-h-[min(62svh,28rem)]"
                fetchPriority="high"
                decoding="async"
                width={800}
                height={640}
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
