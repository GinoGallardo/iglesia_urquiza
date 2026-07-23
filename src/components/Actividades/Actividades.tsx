import { useState, useEffect, useCallback } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { CardCarrusel } from "./CardCarrusel";
import type { Actividad } from "../../types";

function getTranslatePercent(index: number): number {
  if (typeof window === "undefined") return index * 99;
  if (window.innerWidth >= 1280) return index * 15;
  if (window.innerWidth >= 1024) return index * 19;
  if (window.innerWidth >= 768) return index * 21;
  return index * 99;
}

const Actividades = () => {
  const [actividades, setActividades] = useState<Actividad[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [translatePercent, setTranslatePercent] = useState(0);

  useEffect(() => {
    const fetchActividades = async () => {
      try {
        const response = await fetch("/data/actividades.json");
        if (!response.ok) {
          throw new Error(`Error al obtener datos: ${response.status}`);
        }
        const data = (await response.json()) as Actividad[];
        setActividades(data);
      } catch (error) {
        console.error("Error cargando actividades:", error);
      }
    };

    void fetchActividades();
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
      setTranslatePercent(getTranslatePercent(currentIndex));
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, [currentIndex]);

  const totalSlides = actividades.length;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(totalSlides - slidesPerView, 0) : prevIndex - 1
    );
  }, [slidesPerView, totalSlides]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= totalSlides - slidesPerView ? 0 : prevIndex + 1
    );
  }, [slidesPerView, totalSlides]);

  return (
    <section
      id="actividades"
      className="mx-auto w-full max-w-[1200px] p-2"
      aria-roledescription="carrusel"
      aria-label="Actividades y ministerios"
    >
      <div className="flex justify-center gap-5 p-5">
        <button
          type="button"
          className="rounded-full bg-[#146EB4] p-2 text-white"
          onClick={handlePrev}
          aria-label="Actividad anterior"
        >
          <MdKeyboardArrowLeft size={30} aria-hidden="true" />
        </button>
        <button
          type="button"
          className="rounded-full bg-[#146EB4] p-2 text-white"
          onClick={handleNext}
          aria-label="Siguiente actividad"
        >
          <MdKeyboardArrowRight size={30} aria-hidden="true" />
        </button>
      </div>

      <div className="relative mx-auto flex w-full max-w-[70rem] flex-col overflow-hidden md:flex-row">
        <div
          className="flex gap-x-1 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${translatePercent}%)` }}
        >
          {actividades.map((actividad) => (
            <div
              key={`${actividad.name}-${actividad.img}`}
              className="w-full flex-none md:w-max md:p-2"
            >
              <CardCarrusel {...actividad} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Actividades;
