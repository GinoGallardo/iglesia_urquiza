import LogoIglesia from "../header/LogoIglesia"
import Redes from "../RedesSociales/Redes";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col gap-4 items-center justify-center bg-[#5f0404] text-white p-2 lg:flex-row">
      <LogoIglesia />
      <Redes />
      <div className="flex gap-1 lg:ml-4">
      <p className="py-1 text-xs text-white md:ml-4 lg:pl-4  lg:border-l-2 sm:mt-0 md:text-sm lg:text-lg">
        Derechos Reservados
      </p>
      <p className="py-1 text-xs text-white md:py-2 sm:mt-0 md:text-sm lg:text-lg">
        © {currentYear}
      </p>
      <p className="py-1 text-xs text-white sm:mt-0 md:text-sm lg:text-lg">
        Iglesia de urquiza
      </p>
      </div>
    </footer>
  )
}

export default Footer