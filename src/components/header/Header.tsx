import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logoIglesiaWhite from "../../assets/logo-iglesia-sin-techo-transparente(blanco).png";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LogoIglesia from "./LogoIglesia";
import Links from "./Links";
import Redes from "../RedesSociales/Redes";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[100] border-b border-white/10 bg-brand text-white transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
      >
        <LogoIglesia />
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          {!mobileMenuOpen && (
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Abrir menú principal"
            >
              <Bars3Icon aria-hidden="true" className="size-10" />
            </button>
          )}
        </div>
        <PopoverGroup className="hidden items-center gap-8 lg:flex">
          <Links />
        </PopoverGroup>
        <div className="hidden items-center gap-4 border-l border-white/25 pl-8 lg:flex">
          <ThemeToggle />
          <Redes className="size-5" />
        </div>
      </nav>
      <div className="flex justify-end px-4 pb-2 lg:hidden">
        <Redes className="hidden size-5 md:flex" />
      </div>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0" aria-hidden="true" />
        <DialogPanel
          id="mobile-menu"
          className="fixed inset-y-0 right-0 z-[100] w-full overflow-y-auto bg-surface-elevated/95 sm:max-w-sm"
        >
          <div className="flex items-center justify-between bg-brand px-6 py-5">
            <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="font-sans text-lg font-semibold text-white">
                Iglesia de Urquiza
              </span>
              <img
                alt="Logo Iglesia de Urquiza"
                src={logoIglesiaWhite}
                className="m-auto h-10 w-auto sm:hidden"
                width={40}
                height={40}
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 z-20 p-2.5 text-white"
              aria-label="Cerrar menú principal"
            >
              <XMarkIcon aria-hidden="true" className="size-10" />
            </button>
          </div>
          <div className="mt-6 ml-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Links mobile onClick={() => setMobileMenuOpen(false)} />
              </div>
            </div>
          </div>
          <div className="mx-6 mt-4 flex border-t border-brand/20 pt-4">
            <Redes className="size-6 text-brand" />
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
