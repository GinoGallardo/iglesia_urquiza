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
    <div
      className="flex h-[520px] w-[18rem] flex-col justify-between rounded-lg bg-[#EDF2F7] p-2 shadow-md md:h-[550px] md:w-[22rem]"
      style={{
        backgroundImage: img ? `url(${toFormat(img, "webp")})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center rounded-2xl bg-[#ac0404] bg-opacity-60 p-2 md:p-1">
        <div className="flex items-center justify-center">
          {img ? (
            <div className="relative h-16 w-16 sm:h-14 sm:w-14 md:h-16 md:w-16">
              <picture>
                <source srcSet={toFormat(logo, "avif")} type="image/avif" />
                <source srcSet={toFormat(logo, "webp")} type="image/webp" />
                <img
                  src={logo}
                  alt={`Logo de ${name}`}
                  className="h-full w-full rounded-full border-2 border-gray-900 object-cover"
                  loading="lazy"
                  decoding="async"
                  width={64}
                  height={64}
                />
              </picture>
            </div>
          ) : (
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-green-500 text-white sm:h-14 sm:w-14 md:h-16 md:w-16">
              <span className="text-lg font-semibold">{initials}</span>
            </div>
          )}
        </div>
        <div className="ml-4">
          <p className="text-xl font-medium text-gray-900 sm:text-lg md:text-2xl">
            {name}
          </p>
          <div className="mt-1 flex gap-2">
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E1306C] hover:opacity-80"
                aria-label={`Instagram de ${name}`}
              >
                <FaInstagram
                  size={22}
                  className="text-gray-900 hover:scale-120 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  aria-hidden="true"
                />
              </a>
            )}
            {facebook && (
              <a
                href={facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
                aria-label={`Facebook de ${name}`}
              >
                <FaSquareFacebook
                  size={22}
                  className="text-gray-900 hover:scale-120 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  aria-hidden="true"
                />
              </a>
            )}
            {youtube && (
              <a
                href={youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
                aria-label={`YouTube de ${name}`}
              >
                <FaYoutube
                  size={22}
                  className="text-gray-900 hover:scale-120 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  aria-hidden="true"
                />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-1 flex-col gap-4">
        {description?.map((item) => (
          <p
            key={item}
            className="mx-auto flex w-full items-center justify-center rounded-2xl bg-black text-[2rem] font-medium text-white opacity-70"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
