import { useEffect, useState } from "react";
import {
  BIBLE_API_BASE,
  BIBLE_API_VERSION,
  FALLBACK_GLOBAL,
  VERSICULOS_CURADOS,
} from "../data/versiculosCurados";

export interface VersiculoDelDia {
  texto: string;
  referencia: string;
  loading: boolean;
  error: string | null;
}

interface CachedVerse {
  date: string;
  texto: string;
  referencia: string;
}

/** El sufijo de versión invalida caches de traducciones anteriores. */
export const CACHE_KEY = "iglesia_urquiza_versiculo_del_dia_rv1960";

function todayKey(date = new Date()): string {
  return date.toISOString().slice(0, 10);
}

/** Equivalente a getDayOfYear() (1–366). */
export function getDayOfYear(date = new Date()): number {
  const start = Date.UTC(date.getFullYear(), 0, 0);
  const now = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  return Math.floor((now - start) / 86_400_000);
}

/** Limpia la caché de la traducción anterior guardada por versiones previas. */
function purgarCacheLegado(): void {
  try {
    localStorage.removeItem("iglesia_urquiza_versiculo_del_dia");
  } catch {
    // ignore private mode
  }
}

function readCache(): CachedVerse | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CachedVerse;
    if (parsed.date !== todayKey()) return null;
    if (!parsed.texto || !parsed.referencia) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeCache(value: Omit<CachedVerse, "date">): void {
  try {
    const payload: CachedVerse = { date: todayKey(), ...value };
    localStorage.setItem(CACHE_KEY, JSON.stringify(payload));
  } catch {
    // ignore quota / private mode
  }
}

/** La API devuelve saltos de línea poéticos como <br> y espacios dobles. */
function normalizarTexto(raw: string): string {
  return raw
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .trim();
}

async function fetchVerseText(
  bookId: number,
  chapter: number,
  verse: number
): Promise<string> {
  const url = `${BIBLE_API_BASE}/${BIBLE_API_VERSION}/${bookId}/${chapter}/${verse}/`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`API ${response.status}`);
  }
  const data = (await response.json()) as { text?: string };
  const texto = normalizarTexto(data.text ?? "");
  if (!texto) {
    throw new Error("Empty verse text");
  }
  return texto;
}

export function useVersiculoDelDia(): VersiculoDelDia {
  const [texto, setTexto] = useState<string>(FALLBACK_GLOBAL.texto);
  const [referencia, setReferencia] = useState<string>(
    FALLBACK_GLOBAL.referencia
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      purgarCacheLegado();
      const cached = readCache();
      if (cached) {
        if (!cancelled) {
          setTexto(cached.texto);
          setReferencia(cached.referencia);
          setLoading(false);
          setError(null);
        }
        return;
      }

      const index = getDayOfYear() % VERSICULOS_CURADOS.length;
      const ref = VERSICULOS_CURADOS[index] ?? VERSICULOS_CURADOS[0]!;

      try {
        const apiTexto = await fetchVerseText(
          ref.bookId,
          ref.chapter,
          ref.verse
        );
        if (cancelled) return;
        setTexto(apiTexto);
        setReferencia(ref.label);
        setError(null);
        writeCache({ texto: apiTexto, referencia: ref.label });
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Error al cargar versículo";
        if (cancelled) return;
        setTexto(ref.fallbackTexto);
        setReferencia(ref.label);
        setError(message);
        writeCache({ texto: ref.fallbackTexto, referencia: ref.label });
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    void run();
    return () => {
      cancelled = true;
    };
  }, []);

  return { texto, referencia, loading, error };
}
