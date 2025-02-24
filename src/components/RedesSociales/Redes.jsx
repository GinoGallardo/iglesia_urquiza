import PropTypes from "prop-types";
import { IoLogoYoutube, IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";

const redes = [
  { name: "youtube", href: "https://www.youtube.com/@IGLESIADEURQUIZA", Icon: IoLogoYoutube },
  { name: "instagram", href: "https://www.instagram.com/iglesiadeurquiza/", Icon: IoLogoInstagram },
  { name: "facebook", href: "https://www.facebook.com/iglesiadeurquiza#", Icon: IoLogoFacebook }
];

function Redes({ className }) {
  className = className || "size-6 text-white hover:text-red-500 transition-colors";

  return (
    <section className="flex gap-4">
      {redes.map(({ name, href, Icon }) => (
        <a className="flex" key={name} href={href} target="_blank" rel="noopener noreferrer">
          <Icon className={ className }/>
        </a>
      ))}
    </section>
  );
}

Redes.propTypes = {
  className: PropTypes.string
};

export default Redes;
