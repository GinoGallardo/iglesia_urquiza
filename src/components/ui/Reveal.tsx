import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealFrom = "up" | "down" | "left" | "right" | "scale" | "none";

const HIDDEN: Record<RevealFrom, string> = {
  up: "translate-y-10 opacity-0",
  down: "-translate-y-10 opacity-0",
  left: "translate-x-10 opacity-0",
  right: "-translate-x-10 opacity-0",
  scale: "scale-95 opacity-0",
  none: "opacity-0",
};

/** Reveal on scroll — estilo animaciones Másvida (fade + slide). */
export function Reveal({
  children,
  className = "",
  delayMs = 0,
  from = "up",
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  from?: RevealFrom;
  /** Si es false, re-anima al salir/entrar del viewport */
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={`reveal-base ${
        visible ? "translate-x-0 translate-y-0 scale-100 opacity-100" : HIDDEN[from]
      } ${className}`}
      style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
