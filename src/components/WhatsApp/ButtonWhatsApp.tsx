import { IoLogoWhatsapp } from "react-icons/io5";
import { whatsappUrl } from "../../lib/env";

function ButtonWhatsApp() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#0df053] text-white shadow-lg transition-all duration-300 hover:bg-white hover:text-[#0df053]"
    >
      <IoLogoWhatsapp size={30} aria-hidden="true" />
    </a>
  );
}

export default ButtonWhatsApp;
