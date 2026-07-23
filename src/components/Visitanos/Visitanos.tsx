import { IoIosPlayCircle } from "react-icons/io";
import Maps from "./Maps";

function Visitanos() {
  return (
    <section
      id="visitanos"
      className="relative flex flex-col items-center justify-center gap-4 bg-[#ac0404] p-6 md:gap-y-10 md:py-10 lg:mt-16 lg:pt-28"
    >
      <div className="flex w-full flex-col gap-y-6">
        <span className="subtitulo text-center font-serif text-2xl font-bold text-white md:text-3xl lg:text-4xl">
          Visitanos
        </span>
        <h3 className="text-center font-serif text-2xl font-extrabold md:text-4xl lg:text-6xl">
          Sumate a nuestras reuniones
        </h3>
      </div>
      <div className="mx-auto grid justify-center gap-4 lg:w-5xl">
        <div className="max-w-xl sm:col-span-2 lg:col-span-4">
          <span className="text-md font-semibold text-white md:text-2xl">
            Roosevelt 5537 - Villa Urquiza, CABA
          </span>
          <div className="flex flex-col">
            <span className="text-md flex items-center gap-x-2 p-2 font-semibold text-white md:text-xl">
              <IoIosPlayCircle size={30} aria-hidden="true" />
              Juéves 20 Hs
            </span>
            <span className="text-md flex items-center gap-x-2 p-2 font-semibold text-white md:text-xl">
              <IoIosPlayCircle size={30} aria-hidden="true" />
              Domingo 10:30 hs
            </span>
          </div>
          <div className="relative z-0">
            <Maps />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Visitanos;
