import type { MouseEvent } from "react";
import type { NavLink } from "../../types";

const links: NavLink[] = [
  { name: "Inicio", href: "inicio" },
  { name: "Nosotros", href: "nosotros" },
  { name: "Visitanos", href: "visitanos" },
  { name: "Actividades", href: "actividades" },
  { name: "Oramos", href: "oracion" },
];

interface LinksProps {
  mobile?: boolean;
  onClick?: () => void;
}

function Links({ mobile = false, onClick }: LinksProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();

    const section = document.getElementById(sectionId);

    if (section) {
      const offset = 80;
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });

      if (mobile && onClick) {
        window.setTimeout(onClick, 200);
      }
    }
  };

  return (
    <>
      {links.map((item) => (
        <div key={item.href} className="flex">
          <a
            href={`#${item.href}`}
            className="text-xl font-semibold hover:underline hover:scale-120 md:text-white"
            onClick={(e) => handleClick(e, item.href)}
          >
            {item.name}
          </a>
        </div>
      ))}
    </>
  );
}

export default Links;
