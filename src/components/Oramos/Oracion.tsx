import { Link } from "react-router-dom";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Button from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export default function Oracion() {
  return (
    <section
      id="oracion"
      className="relative overflow-hidden py-20 md:py-28 lg:py-32"
    >
      <picture className="absolute inset-0">
        <source srcSet="/assets/oramos-por-vos-hero.avif" type="image/avif" />
        <source srcSet="/assets/oramos-por-vos-hero.webp" type="image/webp" />
        <img
          src="/assets/oramos-por-vos-hero.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
          loading="lazy"
          decoding="async"
          width={1600}
          height={2133}
        />
      </picture>
      <div className="absolute inset-0 bg-black/70" />
      <div className="section-shell relative z-10 flex flex-col items-center gap-5 text-center md:gap-6">
        <Reveal from="up">
          <h2 className="subtitulo text-3xl text-[#ffd6d6] md:text-4xl lg:text-5xl">
            Oramos por Vos
          </h2>
        </Reveal>
        <Reveal delayMs={80} from="up">
          <p className="font-sans text-sm font-medium tracking-[0.18em] text-white/70 uppercase">
            Mateo 18:20
          </p>
        </Reveal>
        <Reveal delayMs={140} from="up">
          <p className="max-w-3xl font-sans text-2xl font-semibold text-white md:text-3xl lg:text-4xl">
            ¿Necesitas ayuda o querés que oremos por vos?
          </p>
        </Reveal>
        <Reveal delayMs={220} from="scale">
          <div className="flex flex-col items-center gap-4">
            <Button
              href="/actividades/oracion#pedir-oracion"
              variant="primary"
              size="lg"
              className="mt-2"
            >
              <IoArrowForwardCircleOutline size={28} aria-hidden="true" />
              Enviar petición
            </Button>
            <Link
              to="/actividades/oracion"
              className="text-sm font-medium text-white/80 underline-offset-4 hover:text-white hover:underline"
            >
              Conocer la reunión de oración →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
