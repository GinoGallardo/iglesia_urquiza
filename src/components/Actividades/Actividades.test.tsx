import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import Actividades from "./Actividades";
import type { Actividad } from "../../types";

const mockActividades: Actividad[] = [
  {
    name: "Escuela Bíblica",
    logo: "/assets/logo-escuelita.jpg",
    img: "/assets/escuela-biblica.jpg",
    description: ["Juegos", "Enseñanzas"],
    instagram: "https://www.instagram.com/example/",
  },
];

describe("Actividades", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => mockActividades,
      })
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("carga y muestra actividades desde el JSON", async () => {
    render(<Actividades />);

    await waitFor(() => {
      expect(screen.getByText("Escuela Bíblica")).toBeInTheDocument();
    });

    expect(fetch).toHaveBeenCalledWith("/data/actividades.json");
    expect(
      screen.getByRole("button", { name: /actividad anterior/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /siguiente actividad/i })
    ).toBeInTheDocument();
  });
});
