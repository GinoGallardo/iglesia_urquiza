import type { Actividad } from "../../types";
import { useMemo } from "react";
import { FaSquareFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

function toFormat(src: string, format: "webp" | "avif"): string {
  return src.replace(/\.(jpe?g|png)$/i, `.${format}`);
}

export function CardCarrusel({
  name,
  logo,
  img,
  description,
  instagram,
  facebook,
  youtube,
}: Actividad) {
  const initials = useMemo(
    () =>
      name
        .split(" ")
        .filter(Boolean)
        .map((n) => n.charAt(0))
        .join(""),
    [name]
  );

  return (
    <div className="relative flex h-[520px] w-[18rem] flex-col overflow-hidden rounded-2xl bg-surface shadow-md md:h-[550px] md:w-[22rem]">
      {img && (
        <picture className="absolute inset-0">
          <source srcSet={toFormat(img, "avif")} type="image/avif" />
          <source srcSet={toFormat(img, "webp")} type="image/webp" />
          <img
            src={img}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </picture>
      )}

      {/* Overlay degradado para contraste del texto */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-black/80"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col justify-between p-4">
        <div className="flex items-center gap-3 rounded-xl bg-black/35 p-2 backdrop-blur-[2px]">
          <div className="flex items-center justify-center">
            {img ? (
              <div className="relative h-14 w-14 md:h-16 md:w-16">
                <picture>
                  <source srcSet={toFormat(logo, "avif")} type="image/avif" />
                  <source srcSet={toFormat(logo, "webp")} type="image/webp" />
                  <img
                    src={logo}
                    alt={`Logo de ${name}`}
                    className="h-full w-full rounded-full border-2 border-white/80 object-cover"
                    loading="lazy"
                    decoding="async"
                    width={64}
                    height={64}
                  />
                </picture>
              </div>
            ) : (
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-brand text-white md:h-16 md:w-16">
                <span className="text-lg font-semibold">{initials}</span>
              </div>
            )}
          </div>
          <div className="min-w-0">
            <p className="truncate font-sans text-lg font-semibold text-white md:text-xl">
              {name}
            </p>
            <div className="mt-1 flex gap-2">
              {instagram && (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white"
                  aria-label={`Instagram de ${name}`}
                >
                  <FaInstagram size={20} aria-hidden="true" />
                </a>
              )}
              {facebook && (
                <a
                  href={facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white"
                  aria-label={`Facebook de ${name}`}
                >
                  <FaSquareFacebook size={20} aria-hidden="true" />
                </a>
              )}
              {youtube && (
                <a
                  href={youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white"
                  aria-label={`YouTube de ${name}`}
                >
                  <FaYoutube size={20} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {description?.map((item) => (
            <p
              key={item}
              className="rounded-xl bg-black/45 px-3 py-2 text-center font-sans text-lg font-medium text-white backdrop-blur-[1px] md:text-xl"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
