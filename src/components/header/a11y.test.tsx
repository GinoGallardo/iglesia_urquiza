import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { axe } from "vitest-axe";
import Header from "./Header";
import ButtonWhatsApp from "../WhatsApp/ButtonWhatsApp";
import { ThemeProvider } from "../../contexts/ThemeProvider";

describe("accesibilidad", () => {
  it("Header no tiene violaciones graves de axe", async () => {
    const { container } = render(
      <MemoryRouter>
        <ThemeProvider>
          <Header />
        </ThemeProvider>
      </MemoryRouter>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("ButtonWhatsApp no tiene violaciones graves de axe", async () => {
    const { container } = render(<ButtonWhatsApp />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
