import LogoIglesia from "../header/LogoIglesia";
import Redes from "../RedesSociales/Redes";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-brand text-white">
      <div className="section-shell flex flex-col items-center justify-between gap-6 py-8 lg:flex-row">
        <LogoIglesia />
        <Redes className="size-5" />
        <p className="font-sans text-sm text-white/80">
          © {currentYear} Iglesia de Urquiza · Derechos reservados
        </p>
      </div>
    </footer>
  );
}

export default Footer;
