import PropTypes from "prop-types";

const link = [
  { name: "Inicio", href: "#inicio" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Visitanos", href: "#visitanos" },
  { name: "Actividades", href: "#actividades" },
  { name: "Oramos", href: "#oracion" }
]

function Links() {
  return (
    <>
      {link.map((item, index) => (
        <div key={`${item.name}-${index}`} className="flex">
          <a
            href={item.href}
            className={`text-xl text-white font-semibold hover:underline `}
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
};

export default Links;
