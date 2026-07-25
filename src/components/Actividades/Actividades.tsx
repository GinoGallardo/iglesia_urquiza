import { useState, useEffect, useCallback } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { CardCarrusel } from "./CardCarrusel";
import Button from "../ui/Button";
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
      className="section-space bg-surface-elevated"
      aria-roledescription="carrusel"
      aria-label="Actividades y ministerios"
    >
      <div className="section-shell">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:mb-12 md:flex-row md:items-end">
          <div>
            <p className="subtitulo text-2xl text-brand md:text-3xl dark:text-brand-light">
              Actividades
            </p>
            <h2 className="mt-2 font-sans text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Ministerios y reuniones
            </h2>
          </div>
          <div className="flex gap-3">
            <Button
              variant="secondary"
              size="sm"
              onClick={handlePrev}
              aria-label="Actividad anterior"
              className="!rounded-full !px-3 !py-3 shadow-md"
            >
              <MdKeyboardArrowLeft size={28} aria-hidden="true" />
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleNext}
              aria-label="Siguiente actividad"
              className="!rounded-full !px-3 !py-3 shadow-md"
            >
              <MdKeyboardArrowRight size={28} aria-hidden="true" />
            </Button>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[70rem] overflow-hidden">
          <div
            className="flex gap-x-3 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${translatePercent}%)` }}
          >
            {actividades.map((actividad) => (
              <div
                key={`${actividad.name}-${actividad.img}`}
                className="w-full flex-none md:w-max md:p-1"
              >
                <CardCarrusel {...actividad} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Actividades;
