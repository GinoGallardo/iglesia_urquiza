import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import {
  getDayOfYear,
  useVersiculoDelDia,
} from "./useVersiculoDelDia";
import { VERSICULOS_CURADOS } from "../data/versiculosCurados";

describe("getDayOfYear", () => {
  it("devuelve un número entre 1 y 366", () => {
    const day = getDayOfYear(new Date("2026-07-23T12:00:00Z"));
    expect(day).toBeGreaterThanOrEqual(1);
    expect(day).toBeLessThanOrEqual(366);
  });
});

describe("useVersiculoDelDia", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ verse: "16", text: "Texto de prueba desde API" }),
      })
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    localStorage.clear();
  });

  it("carga el versículo desde la API y lo cachea", async () => {
    const { result } = renderHook(() => useVersiculoDelDia());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.texto).toBe("Texto de prueba desde API");
    expect(result.current.referencia.length).toBeGreaterThan(0);
    expect(fetch).toHaveBeenCalled();

    const cached = localStorage.getItem("iglesia_urquiza_versiculo_del_dia");
    expect(cached).toBeTruthy();
  });

  it("usa fallback RVR1960 si la API falla", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: false, status: 404 })
    );

    const { result } = renderHook(() => useVersiculoDelDia());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    const index = getDayOfYear() % VERSICULOS_CURADOS.length;
    const expected = VERSICULOS_CURADOS[index]!;
    expect(result.current.texto).toBe(expected.fallbackTexto);
    expect(result.current.referencia).toBe(expected.label);
    expect(result.current.error).toBeTruthy();
  });
});
