import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";
import { ThemeProvider } from "../../contexts/ThemeProvider";

describe("Header", () => {
  it("renderiza el nombre de la iglesia y la navegación", () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Header />
        </ThemeProvider>
      </MemoryRouter>
    );
    expect(screen.getAllByText("Iglesia de Urquiza").length).toBeGreaterThan(0);
    expect(
      screen.getByRole("navigation", { name: /navegación principal/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /inicio/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /ubicaciones/i })
    ).toBeInTheDocument();
  });
});
