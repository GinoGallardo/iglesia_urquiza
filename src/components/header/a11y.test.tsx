import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { axe } from "vitest-axe";
import Header from "./Header";
import ButtonWhatsApp from "../WhatsApp/ButtonWhatsApp";

describe("accesibilidad", () => {
  it("Header no tiene violaciones graves de axe", async () => {
    const { container } = render(<Header />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("ButtonWhatsApp no tiene violaciones graves de axe", async () => {
    const { container } = render(<ButtonWhatsApp />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
