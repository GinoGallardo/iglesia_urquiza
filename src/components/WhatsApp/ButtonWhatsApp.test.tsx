import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ButtonWhatsApp from "./ButtonWhatsApp";

describe("ButtonWhatsApp", () => {
  it("renderiza el CTA de WhatsApp con href y aria-label", () => {
    render(<ButtonWhatsApp />);
    const link = screen.getByRole("link", { name: /contactar por whatsapp/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      "href",
      expect.stringContaining("api.whatsapp.com/send?phone=")
    );
  });
});
