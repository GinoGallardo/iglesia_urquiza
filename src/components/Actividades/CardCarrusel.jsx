import { useMemo } from "react";
import PropTypes from "prop-types";
import { FaSquareFacebook, FaInstagram , FaYoutube   } from "react-icons/fa6";

export const CardCarrusel = ({ name, logo, img, description, instagram, facebook, youtube }) => {
  const initials = useMemo(
    () =>
      name
        .split(" ")
        .filter(Boolean) // Elimina los elementos vacíos
        .map((n) => n.charAt(0))
        .join(""),
    [name]
  );

  return (
    <div
      className="w-[18rem] h-[520px] md:w-[22rem] md:h-[550px] bg-[#EDF2F7] rounded-lg shadow-md p-2 flex flex-col justify-between"
      style={{ backgroundImage: img ? `url(${img})` : 'none', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Header */}
      <div className="flex items-center p-2 bg-[#ac0404] rounded-2xl md:p-1 bg-opacity-60">
        <div className="flex justify-center items-center">
          {/* Imagen de ministerio o iniciales */}
          {img ? (
            <div className="relative w-16 h-16 sm:w-14 sm:h-14 md:w-16 md:h-16">
              <img
                src={logo}
                alt={name}
                className="w-full h-full rounded-full object-cover border-2 border-gray-900"
              />
            </div>
          ) : (
            <div className="relative w-16 h-16 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-green-500 text-white rounded-full border-2 border-white">
              <span className="text-lg font-semibold">{initials}</span>
              <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border-[2px] border-white"></span>
            </div>
          )}
        </div>
        <div className="ml-4">
          <p className="text-xl sm:text-lg md:text-2xl font-medium text-gray-900">{name}</p>

          {/* Redes sociales */}
          <div className="flex gap-2 mt-1">
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E1306C] hover:opacity-80"
              >
                <FaInstagram   size={22} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-900 hover:scale-120" />
              </a>
            )}
            {facebook && (
              <a
                href={facebook}
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:opacity-80"
              >
                <FaSquareFacebook size={22} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-900 hover:scale-120" />
              </a>
            )}
            {youtube && (
              <a
                href={youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <FaYoutube  size={22} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-900 hover:scale-120" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 mt-4 flex flex-col gap-4">
        {description?.map((item, index) => (
          <p key={index} className="flex w-full mx-auto justify-center items-center bg-black opacity-70 rounded-2xl  text-[2rem] font-medium text-white ">
            {item}
          </p>
        ))}
      </div>

      {/* Footer */}
    </div>
  );
};

// Validación de props
CardCarrusel.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  instagram: PropTypes.string,
  facebook: PropTypes.string,
  youtube: PropTypes.string,
};
