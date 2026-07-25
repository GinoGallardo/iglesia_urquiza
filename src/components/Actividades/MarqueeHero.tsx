interface MarqueeHeroProps {
  /** Texto de la franja superior (derecha → izquierda) */
  topText: string;
  /** Texto de la franja inferior (izquierda → derecha) */
  bottomText: string;
  /** Logo centrado */
  logoSrc: string;
  logoAlt: string;
  /** Caja de descripción (estilo Prisma) */
  description: string;
}

function MarqueeTrack({
  text,
  direction,
  opacity = 1,
}: {
  text: string;
  direction: "left" | "right";
  opacity?: number;
}) {
  const chunk = `${text} — `;
  const repeated = chunk.repeat(8);

  return (
    <div
      className="marquee-track overflow-hidden whitespace-nowrap"
      style={{ opacity }}
      aria-hidden
    >
      <div
        className={
          direction === "left"
            ? "marquee-content marquee-left"
            : "marquee-content marquee-right"
        }
      >
        <span className="inline-block px-4 font-sans text-[clamp(2rem,8vw,5.5rem)] font-bold tracking-tight uppercase">
          {repeated}
        </span>
        <span className="inline-block px-4 font-sans text-[clamp(2rem,8vw,5.5rem)] font-bold tracking-tight uppercase">
          {repeated}
        </span>
      </div>
    </div>
  );
}

export default function MarqueeHero({
  topText,
  bottomText,
  logoSrc,
  logoAlt,
  description,
}: MarqueeHeroProps) {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="flex min-h-[calc(100svh-4.75rem)] flex-col justify-between py-4 md:py-6">
        <MarqueeTrack text={topText} direction="left" opacity={1} />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center justify-items-center gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-8 lg:px-8">
          <div className="order-2 w-full max-w-lg lg:order-1 lg:justify-self-end">
            <div className="rounded-2xl bg-white/10 p-5 text-left text-base leading-relaxed text-white/90 backdrop-blur-md sm:p-6 sm:text-lg md:text-xl">
              {description}
            </div>
          </div>

          <div className="order-1 flex shrink-0 justify-center lg:order-2">
            <img
              src={logoSrc}
              alt={logoAlt}
              className="h-44 w-auto object-contain [filter:drop-shadow(0_0_18px_rgba(255,255,255,0.65))_drop-shadow(0_0_45px_rgba(255,255,255,0.35))] sm:h-56 md:h-64 lg:h-80"
            />
          </div>

          <div className="order-3 hidden lg:block" aria-hidden="true" />
        </div>

        <MarqueeTrack text={bottomText} direction="right" opacity={0.35} />
      </div>
    </section>
  );
}
