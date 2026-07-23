import { useEffect, useState } from "react";
import logoIglesiaWhite from "../../assets/logo-iglesia-sin-techo-transparente(blanco).png";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LogoIglesia from "./LogoIglesia";
import Links from "./Links";
import Redes from "../RedesSociales/Redes";

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
      className={`sticky top-0 z-[100] bg-[#5f0404] text-white transition-opacity duration-300 ${
        isScrolled ? "opacity-90" : "opacity-100"
      }`}
    >
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-9xl items-center justify-between p-2"
      >
        <LogoIglesia />
        <div className="flex lg:hidden">
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
        <PopoverGroup className="hidden p-6 lg:flex lg:gap-x-12 lg:px-8">
          <Links />
        </PopoverGroup>
        <div className="hidden lg:mx-10 lg:flex lg:border-l-2 lg:pl-10">
          <Redes className="size-6" />
        </div>
      </nav>
      <div className="flex justify-end pb-2 pr-2 lg:hidden">
        <Redes className="hidden size-6 md:flex" />
      </div>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0" aria-hidden="true" />
        <DialogPanel
          id="mobile-menu"
          className="fixed inset-y-0 right-0 z-[100] w-full overflow-y-auto bg-white/90 sm:max-w-sm"
        >
          <div className="flex items-center justify-between bg-[#5f0404] px-6 py-6">
            <a href="#inicio" className="-m-1.5 p-1.5">
              <span className="text-xl text-white sm:text-[#5f0404]">
                Iglesia de Urquiza
              </span>
              <img
                alt="Logo Iglesia de Urquiza"
                src={logoIglesiaWhite}
                className="m-auto h-10 w-auto sm:hidden"
                width={40}
                height={40}
              />
            </a>
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
          <div className="mx-6 mt-4 flex border-t-2 border-t-[#5f0404] pt-2">
            <Redes className="size-6 text-[#5f0404]" />
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
