import { IoLogoWhatsapp } from "react-icons/io5";

function ButtonWhatsApp() {
  return (
    <a 
      href="https://api.whatsapp.com/send?phone=91121697373"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 flex items-center justify-center w-14 h-14 bg-[#0df053] text-white rounded-full shadow-lg transition-all duration-300 hover:bg-white hover:text-[#0df053]"
    >
      <IoLogoWhatsapp size={30} />
    </a>
  );
}

export default ButtonWhatsApp;
