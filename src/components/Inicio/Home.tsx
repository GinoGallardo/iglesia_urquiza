import { IoIosPlayCircle } from "react-icons/io";

function Home() {
  return (
    <section
      id="inicio"
      className="relative h-72 bg-cover bg-center sm:h-80 md:h-96 lg:h-screen"
      style={{ backgroundImage: "url(/assets/portada-web.webp)" }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 px-4 text-center">
        <h2 className="font-mono text-4xl text-white sm:text-5xl">
          Argentina, Buenos Aires
        </h2>
        <h3 className="subtitulo mt-2 text-3xl font-bold text-white sm:text-4xl">
          ¡Mirá nuestras reuniones!
        </h3>
        <a
          className="mt-4 flex items-center gap-2 rounded-md border bg-[#ac0404] px-6 py-2 text-white hover:bg-red-500"
          href="https://www.youtube.com/@IGLESIADEURQUIZA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoIosPlayCircle size={30} aria-hidden="true" />
          Ver ahora
        </a>
      </div>
    </section>
  );
}

export default Home;
