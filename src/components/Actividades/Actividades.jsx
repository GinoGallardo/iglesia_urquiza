import Carousel from "./Carousel";

const slides = [
  {
    name: "Escuela Bíblica",
    img: "/assets/escuelita-biblica.jpg",
    instagram: "https://www.instagram.com/escuelabiblicaurquiza/",
    facebook: "https://www.facebook.com/search/top?q=escuela%20b%C3%ADblica%20urquiza",
  },
  {
    name: "Adolescentes",
    img: "/assets/adolescentes.jpg",
    instagram: "https://www.instagram.com/adolescentesroosevelt/",
    facebook: "https://www.facebook.com/adolescentesroosevelt.ice",
  },
  {
    name: "Jovenes",
    img: "/assets/jovenes.jpeg",
    instagram: "https://www.instagram.com/jovenesurquiza/",
    facebook: "https://www.facebook.com/search/top?q=j%C3%B3venes%20urquiza",
  },
  {
    name: "Jueves 20 hrs",
    img: "/assets/jueves-enseñanza.png",
    youtube: "https://www.youtube.com/watch?v=A-2ZhiWQ6sw&list=PLL9X2rVJzWBfNQff6e1sT5GG9e999APeD",
  },
  {
    name: "Domingo 10:30 hrs",
    img: "/assets/cena-del-señor.png",
    youtube: "https://www.youtube.com/watch?v=7KRc7EHFRkY&list=PLL9X2rVJzWBck4cAtONQrIbu20Ca5s8sY",
  },
  {
    name: "Reunión de Oración",
    img: "/assets/reunion-oracion.jpg",
  },
];

const Actividades = () => {
  return (
    <section className="flex flex-col p-2 md:p-6 md:my-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-center text-red-600 font-bold font-serif sm:text-2xl md:text-3xl lg:text-4xl">
          Actividades de la Iglesia
        </h2>
        <span className="text-center text-2xl font-serif font-extrabold md:text-wrap md:text-4xl lg:text-6xl">
          ¡Todos somos iglesia!
        </span>
      </div>
      <Carousel slides={slides} />
    </section>
  );
};

export default Actividades;
