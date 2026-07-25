import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { FaInstagram, FaSquareFacebook, FaYoutube } from "react-icons/fa6";
import type { Ministerio } from "../../data/ministerios";
import { whatsappUrl } from "../../lib/env";
import { Reveal } from "../ui/Reveal";
import Seo from "../Seo/Seo";
import MarqueeHero from "./MarqueeHero";

interface MinisterioLayoutProps {
  ministerio: Ministerio;
  children?: React.ReactNode;
}

export default function MinisterioLayout({
  ministerio,
  children,
}: MinisterioLayoutProps) {
  const titulo = ministerio.grupo ?? ministerio.nombre;

  return (
    <>
      <Seo
        title={`${titulo} · Iglesia de Urquiza`}
        description={ministerio.descripcion}
        path={`/actividades/${ministerio.slug}`}
      />

      {ministerio.heroMarquee && ministerio.logoHero ? (
        <MarqueeHero
          topText={ministerio.marqueeTop ?? `— ${titulo.toUpperCase()} —`}
          bottomText={
            ministerio.marqueeBottom ??
            `REUNIONES — ${titulo.toUpperCase()} —`
          }
          logoSrc={ministerio.logoHero}
          logoAlt={`Logo de ${titulo}`}
          description={ministerio.descripcion}
        />
      ) : (
        <section className="relative isolate min-h-[70vh] overflow-hidden bg-[#0c0505] text-white">
          <div className="absolute inset-0 -z-10">
            <img
              src={ministerio.imagen}
              alt=""
              className="h-full w-full scale-105 object-cover opacity-45"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
          </div>

          <div className="section-shell relative z-10 flex min-h-[70vh] flex-col justify-end py-16 md:py-20">
            <Reveal>
              <p className="text-sm tracking-[0.3em] text-white/60 uppercase">
                Actividades · {ministerio.nombre}
              </p>
              <h1 className="mt-3 font-sans text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {titulo}
              </h1>
              <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
                {ministerio.tagline}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Socials ministerio={ministerio} />
                <Link
                  to="/ubicaciones"
                  className="inline-flex items-center gap-1 rounded-full bg-[#e8b4b4] px-5 py-2.5 text-sm font-semibold text-[#3a0a0a] transition hover:bg-white"
                >
                  Ubicaciones y horarios
                  <ArrowUpRight size={16} aria-hidden />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section
        id="contenido"
        className="bg-black px-4 py-16 text-white md:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <Reveal>
            <h2 className="font-sans text-2xl font-bold tracking-tight uppercase sm:text-3xl md:text-4xl">
              {titulo} es un movimiento que nace en el corazón de Iglesia de
              Urquiza
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <Socials ministerio={ministerio} large />
            </div>
          </Reveal>
          <Reveal delayMs={100}>
            <div className="overflow-hidden rounded-[1.75rem]">
              <img
                src={ministerio.imagen}
                alt=""
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {ministerio.secciones && ministerio.secciones.length > 0 && (
        <section className="bg-[#111] px-4 py-16 text-white md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-12">
              {ministerio.secciones.map((s, i) => {
                const href = s.ctaWhatsApp
                  ? whatsappUrl(s.ctaWhatsApp)
                  : s.ctaHref;
                return (
                  <Reveal key={s.titulo} delayMs={i * 80}>
                    <article>
                      <h3 className="font-sans text-xl font-bold tracking-wide uppercase">
                        {s.titulo}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-white/75">
                        {s.texto}
                      </p>
                      {href && (
                        <a
                          href={href}
                          target={
                            href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="mt-5 inline-flex items-center rounded-full bg-[#e85a3a] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#f06a4a]"
                        >
                          {s.ctaLabel ?? "Más información"}
                        </a>
                      )}
                    </article>
                  </Reveal>
                );
              })}
            </div>
            <Reveal delayMs={120}>
              <div className="overflow-hidden rounded-[1.75rem]">
                <img
                  src={ministerio.imagen}
                  alt=""
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {children}
    </>
  );
}

function Socials({
  ministerio,
  large = false,
}: {
  ministerio: Ministerio;
  large?: boolean;
}) {
  const size = large ? 20 : 18;
  const box = large ? "h-11 w-11" : "h-10 w-10";
  return (
    <div className="flex items-center gap-2">
      {ministerio.instagram && (
        <a
          href={ministerio.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex ${box} items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white hover:text-brand`}
          aria-label="Instagram"
        >
          <FaInstagram size={size} />
        </a>
      )}
      {ministerio.facebook && (
        <a
          href={ministerio.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex ${box} items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white hover:text-brand`}
          aria-label="Facebook"
        >
          <FaSquareFacebook size={size} />
        </a>
      )}
      {ministerio.youtube && (
        <a
          href={ministerio.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex ${box} items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white hover:text-brand`}
          aria-label="YouTube"
        >
          <FaYoutube size={size} />
        </a>
      )}
    </div>
  );
}
