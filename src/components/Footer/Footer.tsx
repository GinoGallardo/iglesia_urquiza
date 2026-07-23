import LogoIglesia from "../header/LogoIglesia";
import Redes from "../RedesSociales/Redes";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center justify-center gap-4 bg-[#5f0404] p-2 text-white lg:flex-row">
      <LogoIglesia />
      <Redes />
      <div className="flex gap-1 lg:ml-4">
        <p className="py-1 text-xs text-white md:ml-4 md:text-sm lg:border-l-2 lg:pl-4 lg:text-lg sm:mt-0">
          Derechos Reservados
        </p>
        <p className="py-1 text-xs text-white md:py-2 md:text-sm lg:text-lg sm:mt-0">
          © {currentYear}
        </p>
        <p className="py-1 text-xs text-white md:text-sm lg:text-lg sm:mt-0">
          Iglesia de urquiza
        </p>
      </div>
    </footer>
  );
}

export default Footer;
