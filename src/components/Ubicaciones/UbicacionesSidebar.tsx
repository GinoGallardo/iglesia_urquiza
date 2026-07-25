import { Search, MapPin, Navigation, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Iglesia } from "../../types/iglesia";
import {
  googleMapsDirectionsUrl,
  googleMapsPlaceUrl,
} from "./mapsLinks";

interface UbicacionesSidebarProps {
  filtradas: Iglesia[];
  seleccionada: Iglesia | null;
  busqueda: string;
  provincia: string;
  provincias: string[];
  onBusqueda: (value: string) => void;
  onProvincia: (value: string) => void;
  onSelect: (iglesia: Iglesia) => void;
}

export default function UbicacionesSidebar({
  filtradas,
  seleccionada,
  busqueda,
  provincia,
  provincias,
  onBusqueda,
  onProvincia,
  onSelect,
}: UbicacionesSidebarProps) {
  return (
    <aside className="flex h-full min-h-0 flex-col border-r border-black/5 bg-surface-elevated dark:border-white/10">
      <div className="shrink-0 space-y-3 border-b border-black/5 p-4 dark:border-white/10 sm:p-5">
        <div>
          <p className="text-xs tracking-[0.2em] text-brand uppercase dark:text-brand-light">
            Hermanos Libres
          </p>
          <h1 className="mt-1 font-accent text-2xl text-ink">Ubicaciones</h1>
          <p className="mt-1 text-sm text-muted">
            Encontrá iglesias de la misma denominación cerca de vos.
          </p>
        </div>

        <label className="relative block">
          <span className="sr-only">Buscar por ciudad o iglesia</span>
          <Search
            size={16}
            className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-muted"
            aria-hidden
          />
          <input
            type="search"
            value={busqueda}
            onChange={(e) => onBusqueda(e.target.value)}
            placeholder="Buscar por ciudad o iglesia…"
            className="w-full rounded-xl border border-black/10 bg-surface py-2.5 pr-3 pl-9 text-sm text-ink outline-none focus:border-brand dark:border-white/15 dark:bg-[#140505]"
          />
        </label>

        <label className="block">
          <span className="sr-only">Filtrar por provincia</span>
          <select
            value={provincia}
            onChange={(e) => onProvincia(e.target.value)}
            className="w-full rounded-xl border border-black/10 bg-surface px-3 py-2.5 text-sm text-ink outline-none focus:border-brand dark:border-white/15 dark:bg-[#140505]"
          >
            <option value="Todas">Todas las provincias</option>
            {provincias.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-3 sm:p-4">
        {filtradas.length === 0 ? (
          <p className="px-2 py-8 text-center text-sm text-muted">
            No encontramos iglesias con ese criterio.
          </p>
        ) : (
          <ul className="space-y-3">
            {filtradas.map((iglesia) => (
              <li key={iglesia.id}>
                <TarjetaIglesia
                  iglesia={iglesia}
                  activa={seleccionada?.id === iglesia.id}
                  onSelect={() => onSelect(iglesia)}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}

function TarjetaIglesia({
  iglesia,
  activa,
  onSelect,
}: {
  iglesia: Iglesia;
  activa: boolean;
  onSelect: () => void;
}) {
  return (
    <article
      className={`overflow-hidden rounded-2xl border transition-shadow ${
        activa
          ? "border-brand shadow-md ring-1 ring-brand/30 dark:border-brand-light dark:ring-brand-light/30"
          : "border-black/5 shadow-sm hover:shadow-md dark:border-white/10"
      }`}
    >
      <button
        type="button"
        onClick={onSelect}
        className="flex w-full gap-3 p-3 text-left"
      >
        <div className="h-20 w-24 shrink-0 overflow-hidden rounded-xl bg-surface">
          {iglesia.imagen ? (
            <img
              src={iglesia.imagen}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-brand">
              <MapPin size={22} />
            </div>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h2 className="font-sans text-sm font-semibold text-ink">
              {iglesia.destacada ? iglesia.nombre : `${iglesia.ciudad}`}
            </h2>
            <ChevronRight
              size={16}
              className="mt-0.5 shrink-0 text-muted"
              aria-hidden
            />
          </div>
          {!iglesia.destacada && (
            <p className="truncate text-xs text-muted">{iglesia.nombre}</p>
          )}
          <p className="mt-1 line-clamp-2 text-xs text-muted">
            {iglesia.ciudad}, {iglesia.provincia}
            <br />
            {iglesia.direccion}
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {iglesia.servicios != null && (
              <span className="rounded-full bg-brand/10 px-2 py-0.5 text-[11px] font-semibold text-brand dark:bg-white/10 dark:text-brand-light">
                {iglesia.servicios}{" "}
                {iglesia.servicios === 1 ? "servicio" : "servicios"}
              </span>
            )}
            {iglesia.nota && (
              <span className="rounded-full bg-surface px-2 py-0.5 text-[11px] text-muted dark:bg-white/5">
                {iglesia.nota}
              </span>
            )}
          </div>
        </div>
      </button>

      <div className="flex flex-wrap gap-2 border-t border-black/5 px-3 py-2.5 dark:border-white/10">
        {iglesia.destacada ? (
          <Link
            to="/#inicio"
            className="rounded-lg bg-brand px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-muted"
          >
            Ingresar
          </Link>
        ) : null}
        <a
          href={googleMapsDirectionsUrl(iglesia)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-lg bg-surface px-3 py-1.5 text-xs font-medium text-ink hover:bg-brand/10 dark:bg-white/5 dark:hover:bg-white/10"
        >
          <Navigation size={12} aria-hidden />
          Cómo llegar
        </a>
        <button
          type="button"
          onClick={onSelect}
          className="rounded-lg bg-surface px-3 py-1.5 text-xs font-medium text-ink hover:bg-brand/10 dark:bg-white/5 dark:hover:bg-white/10"
        >
          Ver en mapa
        </button>
        <a
          href={googleMapsPlaceUrl(iglesia)}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-surface px-3 py-1.5 text-xs font-medium text-ink hover:bg-brand/10 dark:bg-white/5 dark:hover:bg-white/10"
        >
          Abrir Maps
        </a>
      </div>
    </article>
  );
}
