import fotoPortada from "/assets/foto_portada.png";
import { IoIosPlayCircle } from "react-icons/io";

function Home() {
  return (
    <section
      className="relative h-72 sm:h-80 md:h-96 lg:h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${fotoPortada})` }}
    >
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl text-white font-mono sm:text-5xl">
          Argentina, Buenos Aires
        </h2>
        <h3 className="text-3xl font-bold text-white sm:text-4xl mt-2">
          ¡Mirá nuestras reuniones!
        </h3>
        <a
          className="flex items-center gap-2 text-white px-6 py-2 mt-4 bg-red-600 hover:bg-red-500 rounded-md border"
          href="https://www.youtube.com/@IGLESIADEURQUIZA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoIosPlayCircle size={30} />
          Ver ahora
        </a>
      </div>
    </section>
  );
}

export default Home;
