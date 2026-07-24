import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { whatsappUrl } from "../../lib/env";
import Button from "../ui/Button";

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
        <h2 className="subtitulo text-3xl text-[#ffd6d6] md:text-4xl lg:text-5xl">
          Oramos por Vos
        </h2>
        <p className="font-sans text-sm font-medium tracking-[0.18em] text-white/70 uppercase">
          Mateo 18:20
        </p>
        <p className="max-w-3xl font-sans text-2xl font-semibold text-white md:text-3xl lg:text-4xl">
          ¿Necesitas ayuda o querés que oremos por vos?
        </p>
        <Button
          href={whatsappUrl("Hola, me gustaría que oren por mí.")}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          size="lg"
          className="mt-2"
        >
          <IoArrowForwardCircleOutline size={28} aria-hidden="true" />
          Charla con nosotros
        </Button>
      </div>
    </section>
  );
}
