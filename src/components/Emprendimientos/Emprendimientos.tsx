import { useEffect, useMemo, useState } from "react";
import { MessageCircle, Globe } from "lucide-react";
import { IoLogoInstagram } from "react-icons/io5";

interface Emprendimiento {
  id: number;
  nombre: string;
  hermano: string;
  categoria: string;
  descripcion: string;
  imagen: string;
  whatsapp?: string;
  instagram?: string;
  web?: string;
}

export default function Emprendimientos() {
  const [items, setItems] = useState<Emprendimiento[]>([]);
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");

  useEffect(() => {
    let cancelled = false;
    fetch("/data/emprendimientos.json")
      .then((res) => res.json())
      .then((data: Emprendimiento[]) => {
        if (!cancelled) setItems(data);
      })
      .catch(() => {
        if (!cancelled) setItems([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const categorias = useMemo(() => {
    const unicas = new Set(items.map((i) => i.categoria));
    return ["Todos", ...unicas];
  }, [items]);

  const itemsFiltrados =
    categoriaActiva === "Todos"
      ? items
      : items.filter((i) => i.categoria === categoriaActiva);

  return (
    <section id="emprendimientos" className="section-space bg-surface-elevated">
      <div className="section-shell max-w-6xl">
        <p className="text-center text-sm tracking-[0.3em] text-brand uppercase dark:text-brand-light">
          Comunidad
        </p>
        <h2 className="mt-2 text-center font-accent text-3xl text-brand dark:text-white">
          Emprendimientos de la familia
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted">
          Hermanos y hermanas que trabajan de forma independiente o tienen su
          propio negocio. Conocelos y apoyalos.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categorias.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategoriaActiva(cat)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors
                ${
                  categoriaActiva === cat
                    ? "border-brand bg-brand text-white dark:border-white dark:bg-white dark:text-[#140505]"
                    : "border-gray-300 text-muted hover:border-brand hover:text-brand dark:border-gray-600 dark:text-gray-300 dark:hover:border-white dark:hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {itemsFiltrados.map((item) => (
            <TarjetaEmprendimiento key={item.id} item={item} />
          ))}
        </div>

        {itemsFiltrados.length === 0 && (
          <p className="mt-10 text-center text-sm text-gray-400">
            Todavía no hay emprendimientos cargados en esta categoría.
          </p>
        )}

        <p className="mt-10 text-center text-sm text-muted">
          ¿Tenés un emprendimiento y querés que lo sumemos?{" "}
          <a
            href="#oracion"
            className="font-semibold text-brand underline dark:text-brand-light"
          >
            Contanos acá
          </a>
        </p>
      </div>
    </section>
  );
}

function TarjetaEmprendimiento({ item }: { item: Emprendimiento }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-black/5 shadow-sm transition-shadow hover:shadow-lg dark:border-white/10">
      <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 dark:bg-white/5">
        <img
          src={item.imagen}
          alt={item.nombre}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="mb-2 w-fit rounded-full bg-brand/10 px-3 py-0.5 text-xs font-semibold text-brand dark:bg-white/10 dark:text-white">
          {item.categoria}
        </span>
        <h3 className="font-accent text-lg text-ink dark:text-white">
          {item.nombre}
        </h3>
        <p className="text-xs text-muted">{item.hermano}</p>
        <p className="mt-2 flex-1 text-sm text-muted">{item.descripcion}</p>

        <div className="mt-4 flex items-center gap-3">
          {item.whatsapp && (
            <a
              href={`https://wa.me/${item.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Contactar a ${item.nombre} por WhatsApp`}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors hover:bg-brand hover:text-white dark:bg-white/10 dark:text-white dark:hover:bg-white dark:hover:text-[#140505]"
            >
              <MessageCircle size={16} />
            </a>
          )}
          {item.instagram && (
            <a
              href={`https://instagram.com/${item.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver Instagram de ${item.nombre}`}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors hover:bg-brand hover:text-white dark:bg-white/10 dark:text-white dark:hover:bg-white dark:hover:text-[#140505]"
            >
              <IoLogoInstagram size={16} />
            </a>
          )}
          {item.web && (
            <a
              href={item.web}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visitar el sitio web de ${item.nombre}`}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors hover:bg-brand hover:text-white dark:bg-white/10 dark:text-white dark:hover:bg-white dark:hover:text-[#140505]"
            >
              <Globe size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
