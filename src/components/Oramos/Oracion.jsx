import oramosPorVos from '/assets/oramos-por-vos.jpg'
import { IoArrowForwardCircleOutline } from "react-icons/io5";

export default function Oracion() {
  return (
    <section
      id='oracion'
      className="relative h-72 sm:h-80 md:h-96 lg:h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${oramosPorVos})` }}
    >
      <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center text-center px-4 gap-6">
      <h4 className='subtitulo text-center text-[#ac0505] font-bold font-serif text-2xl md:text-3xl lg:text-4xl'>Oramos por Vos</h4>
      <span className='text-center text-white text-2xl font-serif font-extrabold md:text-wrap md:text-4xl lg:text-6xl'>Mateo 18:20</span>
      <h2 className='text-center text-white text-2xl font-serif font-extrabold md:text-wrap md:text-4xl lg:text-6xl'>Necesitas ayuda o querés que oremos por vos?</h2>
      <a 
        href="https://api.whatsapp.com/send?phone=91137593711"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center md:gap-4 bg-[#ac0505] py-2 px-4 rounded-md cursor-pointer hover:bg-red-400 text-2xl font-semibold"
      >
        <IoArrowForwardCircleOutline size={30}/>
        Charla con nosotros
      </a>
      </div>
    </section>
  )
}
