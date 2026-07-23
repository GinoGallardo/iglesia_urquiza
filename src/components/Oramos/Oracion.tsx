import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { whatsappUrl } from "../../lib/env";

export default function Oracion() {
  return (
    <section
      id="oracion"
      className="relative h-72 bg-cover bg-center sm:h-80 md:h-96 lg:h-screen"
      style={{ backgroundImage: "url(/assets/oramos-por-vos.webp)" }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-black/70 px-4 text-center">
        <h4 className="subtitulo text-center font-serif text-2xl font-bold text-[#ffd6d6] drop-shadow-[0px_0px_5px_black] md:text-3xl lg:text-4xl">
          Oramos por Vos
        </h4>
        <span className="text-center font-serif text-2xl font-extrabold text-white md:text-wrap md:text-4xl lg:text-6xl">
          Mateo 18:20
        </span>
        <h2 className="text-center font-serif text-2xl font-extrabold text-white md:text-wrap md:text-4xl lg:text-6xl">
          Necesitas ayuda o querés que oremos por vos?
        </h2>
        <a
          href={whatsappUrl("Hola, me gustaría que oren por mí.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex cursor-pointer items-center justify-center rounded-md bg-[#5f0404] px-4 py-2 text-2xl font-semibold text-white drop-shadow-[0px_0px_5px_#9e4343] hover:scale-105 hover:bg-[#9e4343] md:gap-4"
        >
          <IoArrowForwardCircleOutline size={30} aria-hidden="true" />
          Charla con nosotros
        </a>
      </div>
    </section>
  );
}
