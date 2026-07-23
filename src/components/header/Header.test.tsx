import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renderiza el nombre de la iglesia y la navegación", () => {
    render(<Header />);
    expect(screen.getAllByText("Iglesia de Urquiza").length).toBeGreaterThan(0);
    expect(
      screen.getByRole("navigation", { name: /navegación principal/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /inicio/i })).toBeInTheDocument();
  });
});
