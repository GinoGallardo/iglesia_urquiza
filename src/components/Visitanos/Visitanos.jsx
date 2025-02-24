import { IoIosPlayCircle } from "react-icons/io";
import Maps from "./Maps";
import FrenteIglesia from "/assets/iglesia-frente.png";

function Visitanos() {
  return (
    <section id="visitanos" className="relative flex flex-col bg-red-600 gap-4 p-6 md:gap-y-10 md:py-10 lg:pt-28 lg:mt-16">
      <div className="flex flex-col items-center justify-center gap-y-6">
        <span className="text-center text-white font-bold font-serif text-2xl md:text-3xl lg:text-4xl">
          Visitanos
        </span>
        <h3 className="text-center text-2xl font-serif font-extrabold md:text-4xl lg:text-6xl">
          Sumate a nuestras reuniones
        </h3>
      </div>
      <div className="grid grid-cols-4 items-center gap-4 mx-auto md:w-3md lg:w-5xl lg:grid-cols-6">
        <div className="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-2">
            <img src={FrenteIglesia} alt="Frente de la Iglesia" />
        </div>
        <div className="col-span-4 sm:col-span-2 lg:col-span-4">
          <span className="text-md text-white font-semibold md:text-2xl">Roosevelt 5537 - Villa Urquiza, CABA</span>
          <div className="flex flex-col">
            <span className="flex items-center text-md font-semibold md:text-xl p-2 gap-x-2">
              <IoIosPlayCircle size={30} color="white" />
              Juéves 20 Hs
            </span>
            <span className="flex items-center font-semibold text-md md:text-xl p-2 gap-x-2">
              <IoIosPlayCircle size={30} color="white" />
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
