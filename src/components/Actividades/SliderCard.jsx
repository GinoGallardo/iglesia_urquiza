import PropTypes from "prop-types"; // Importa PropTypes
import { IoLogoInstagram, IoLogoFacebook, IoLogoYoutube } from "react-icons/io5";

const SlideCard = ({ slide }) => {
  return (
    <div
      style={{ backgroundImage: `url(${slide.img})` }}
      className="w-full h-full rounded-xl bg-center bg-cover duration-500"
    >
      <div className="bg-red-600/50 p-3 md:p-4 rounded-xl flex flex-col items-center text-center">
        <h2 className="rounded-full text-lg md:text-2xl p-2 text-white font-semibold">
          {slide.name}
        </h2>
        <div className="flex gap-3 md:gap-4 mt-2">
          {slide.instagram && (
            <a href={slide.instagram} target="_blank" rel="noopener noreferrer">
              <IoLogoInstagram className="text-white text-3xl md:text-4xl" />
            </a>
          )}
          {slide.facebook && (
            <a href={slide.facebook} target="_blank" rel="noopener noreferrer">
              <IoLogoFacebook className="text-white text-3xl md:text-4xl" />
            </a>
          )}
          {slide.youtube && (
            <a href={slide.youtube} target="_blank" rel="noopener noreferrer">
              <IoLogoYoutube className="text-white text-3xl md:text-4xl" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// 🔹 Validación de props con PropTypes
SlideCard.propTypes = {
  slide: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    instagram: PropTypes.string,
    facebook: PropTypes.string,
    youtube: PropTypes.string,
  }).isRequired,
};

export default SlideCard;
