import PropTypes from "prop-types";

const link = [
  { name: "Inicio", href: "#inicio" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Visitanos", href: "#visitanos" },
  { name: "Actividades", href: "#actividades" },
  { name: "Oramos", href: "#oracion" }
]

function Links({mobile = false, onClick}) {
  const handleClick = (e, sectionId) => {
    e.preventDefaul()
    const section = document.getElementById(sectionId);

    if(section) {
      const offset = .1;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth"
      });

      if (mobile && onClick) {
        onClick()
      }
    }
  }

  return (
    <>
      {link.map((item, index) => (
        <div key={`${item.name}-${index}`} className="flex">
          <a
            href={item.href}
            className={`text-xl md:text-white font-semibold hover:underline `}
            onClick={(e) => handleClick(e, item.href)}
          >
            {item.name}
          </a>
        </div>
      ))}
    </>
  )
}

Links.propTypes = {
  mobile: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Links;
