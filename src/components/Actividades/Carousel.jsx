import { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Importa PropTypes
import ArrowButton from "./botonLeftRight";
import SlideCard from "./SliderCard";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="max-w-[95%] md:max-w-[1400px] h-[500px] md:h-[780px] w-full mx-auto py-8 md:py-16 px-2 md:px-4 drop-shadow-[0px_0px_8px_#9e4343] relative group">
      <SlideCard slide={slides[currentIndex]} />
      <ArrowButton direction="left" onClick={prevSlide} />
      <ArrowButton direction="right" onClick={nextSlide} />
    </div>
  );
};

// 🔹 Validación de props con PropTypes
Carousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      instagram: PropTypes.string,
      facebook: PropTypes.string,
      youtube: PropTypes.string,
      iconInstagram: PropTypes.element,
      iconFacebook: PropTypes.element,
      iconYoutube: PropTypes.element,
    })
  ).isRequired,
};

export default Carousel;
