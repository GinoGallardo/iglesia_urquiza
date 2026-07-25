import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import type { NavLink } from "../../types";
import { MINISTERIOS } from "../../data/ministerios";

const links: NavLink[] = [
  { name: "Inicio", to: "/" },
  { name: "Nosotros", to: "/nosotros" },
  { name: "Ubicaciones", to: "/ubicaciones" },
  {
    name: "Actividades",
    children: MINISTERIOS.map((m) => ({
      name: m.grupo ?? m.nombre,
      to: `/actividades/${m.slug}`,
    })),
  },
  { name: "Emprendimientos", to: "/emprendimientos" },
  { name: "Oramos", to: "/actividades/oracion" },
];

interface LinksProps {
  mobile?: boolean;
  onClick?: () => void;
}

function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (!section) return;
  const offset = 80;
  const sectionTop =
    section.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: sectionTop, behavior: "smooth" });
}

function Links({ mobile = false, onClick }: LinksProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const goTo = (to: string) => {
    navigate(to);
    setOpenMenu(null);
    if (mobile && onClick) window.setTimeout(onClick, 150);
  };

  const handleClick = (item: NavLink) => {
    if (item.children?.length) {
      setOpenMenu((prev) => (prev === item.name ? null : item.name));
      return;
    }

    if (item.to) {
      goTo(item.to);
      return;
    }

    if (item.section) {
      if (location.pathname !== "/") {
        navigate(`/#${item.section}`);
      } else {
        scrollToSection(item.section);
      }
      if (mobile && onClick) window.setTimeout(onClick, 200);
    }
  };

  return (
    <div
      ref={menuRef}
      className={mobile ? "flex flex-col gap-1" : "flex items-center gap-8"}
    >
      {links.map((item) => {
        const key = item.to ?? item.section ?? item.name;
        const childPaths =
          item.children?.map((c) => c.to).filter(Boolean) ?? [];
        const isActive =
          (item.to === "/" && location.pathname === "/") ||
          (Boolean(item.to) &&
            item.to !== "/" &&
            location.pathname.startsWith(item.to!)) ||
          childPaths.some(
            (p) => p && location.pathname.startsWith(p.split("#")[0]!)
          );
        const hasChildren = Boolean(item.children?.length);
        const isOpen = openMenu === item.name;

        return (
          <div
            key={key}
            className={mobile ? "" : "relative"}
            onMouseEnter={() => {
              if (!mobile && hasChildren) setOpenMenu(item.name);
            }}
            onMouseLeave={() => {
              if (!mobile && hasChildren) setOpenMenu(null);
            }}
          >
            <button
              type="button"
              className={
                mobile
                  ? "flex w-full items-center justify-between font-sans text-lg font-medium text-ink hover:text-brand"
                  : `inline-flex items-center gap-1 font-sans text-sm font-medium tracking-wide transition ${
                      isActive
                        ? "text-white"
                        : "text-white/90 hover:text-white"
                    }`
              }
              onClick={() => handleClick(item)}
              aria-expanded={hasChildren ? isOpen : undefined}
              aria-haspopup={hasChildren ? "menu" : undefined}
            >
              {item.name}
              {hasChildren && (
                <ChevronDown
                  size={14}
                  className={`transition ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden
                />
              )}
            </button>

            {hasChildren && isOpen && (
              <div
                role="menu"
                className={
                  mobile
                    ? "mt-1 ml-3 flex flex-col gap-1 border-l border-brand/20 pl-3"
                    : // pt-2 actúa como "puente" hover (evita el hueco de mt-2 que cerraba el menú)
                      "absolute top-full left-0 z-50 pt-2"
                }
              >
                <div
                  className={
                    mobile
                      ? undefined
                      : "min-w-[14rem] rounded-xl border border-black/5 bg-white py-2 shadow-xl dark:border-white/10 dark:bg-[#1c1010]"
                  }
                >
                  {item.children!.map((child) => {
                    const childActive =
                      Boolean(child.to) &&
                      location.pathname.startsWith(child.to!.split("#")[0]!);
                    return (
                      <button
                        key={child.to ?? child.name}
                        type="button"
                        role="menuitem"
                        className={
                          mobile
                            ? `py-1 text-left font-sans text-base ${
                                childActive
                                  ? "font-semibold text-brand"
                                  : "text-muted hover:text-brand"
                              }`
                            : `block w-full px-4 py-2.5 text-left font-sans text-sm ${
                                childActive
                                  ? "bg-brand/5 font-semibold text-brand dark:bg-white/10 dark:text-white"
                                  : "text-ink hover:bg-brand/5 hover:text-brand dark:text-white dark:hover:bg-white/10"
                              }`
                        }
                        onClick={() => child.to && goTo(child.to)}
                      >
                        {child.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Links;
