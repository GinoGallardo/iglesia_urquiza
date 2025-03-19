import { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { CardCarrusel } from "./CardCarrusel";

const Actividades = () => {
  const [actividades, setActividades] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const fetchActividades = async () => {
      const response = await fetch('/public/data/actividades.json');
      const data = await response.json();
      setActividades(data);
    };

    fetchActividades();
  }, []);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const totalSlides = actividades.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - slidesPerView : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= totalSlides - slidesPerView ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full mx-auto max-w-[1200px] p-2">
      {/* Botones de navegación */}
      <div className="flex justify-center gap-5 p-5">
        <button
          className="bg-[#146EB4] rounded-full p-2 text-white"
          onClick={handlePrev}
        >
          <MdKeyboardArrowLeft size={30} />
        </button>
        <button
          className="bg-[#146EB4] rounded-full p-2 text-white"
          onClick={handleNext}
        >
          <MdKeyboardArrowRight size={30} />
        </button>
      </div>

      {/* Carrusel */}
      <div className="overflow-hidden relative w-full max-w-[70rem] mx-auto flex flex-col md:flex-row">
  <div
    className="flex transition-transform duration-500 ease-in-out gap-x-1"
    style={{
      transform: `translateX(-${
        window.innerWidth >= 1280 // xl
          ? currentIndex * 15
          : window.innerWidth >= 1024 // lg
          ? currentIndex * 19
          : window.innerWidth >= 768 // md
          ? currentIndex * 21
          : currentIndex * 99
      }%)`,
    }}
  >
    {actividades.map((user, index) => (
      <div
        key={index}
        className="flex-none w-full md:p-2 md:w-max"
      >
        <CardCarrusel
          name={user.name}
          logo={user.logo}
          img={user.img}
          description={user.description}
          instagram={user.instagram}
          facebook={user.facebook}
          youtube={user.youtube}
        />
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default Actividades;
