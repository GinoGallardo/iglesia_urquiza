'use client'

import { useEffect, useState } from 'react'
import logoIglesiaWhite from "../../assets/logo-iglesia-sin-techo-transparente(blanco).png";
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import LogoIglesia from './LogoIglesia';
import Links from './Links';
import Redes from '../RedesSociales/Redes';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Si el scroll es mayor a 0, cambia el estado
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-[100] text-white bg-red-600 transition-opacity duration-300 ${isScrolled ? 'opacity-80' : 'opacity-100'}`}>
      <nav aria-label="Global" className="mx-auto p-2 flex max-w-9xl items-center justify-between">
        <LogoIglesia />
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-10" />
          </button>
        </div>
        <PopoverGroup className="hidden p-6 lg:flex lg:gap-x-12 lg:px-8">
          <Links />
        </PopoverGroup>
        <div className='hidden lg:flex lg:mx-10 lg:border-l-2 lg:pl-10'>
          <Redes className={"size-6"}/>
        </div>
      </nav>
      <div className='flex justify-end pb-2 pr-2 lg:hidden'>
        <Redes className={"size-6"}/>
      </div>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white/90 sm:max-w-sm">
          <div className="flex items-center justify-between bg-red-600 px-6 py-6">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="text-white text-xl sm:text-red-600">Iglesia de Urquiza</span>
              <img
                alt=""
                src={logoIglesiaWhite}
                className="h-10 w-auto m-auto sm:hidden"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-10" />
            </button>
          </div>
          <div className="mt-6 ml-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Links mobile={true} onClick={() => setMobileMenuOpen(false)} />
              </div>
            </div>
          </div>
          <div className='flex mx-6 mt-4 pt-2 border-t-2 border-t-red-600'>
            <Redes className={"size-6"}/>
      </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
