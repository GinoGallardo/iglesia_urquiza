import IceUrquiza from "/assets/ICE-urquiza.png"

function Nosotros() {
  return (
    <section id="nosotros" className="flex flex-col p-2 gap-y-8 md:p-6 md:my-10 lg:pt-28 lg:mt-16">
      <h2 className="subtitulo text-center text-[#ac0404] font-bold font-serif text-2xl md:text-3xl lg:text-4xl">Sobre nosotros</h2>
      <div className="grid grid-cols-4 gap-4 p-6 mx-auto md:grid-cols-4 lg:w-5xl lg:grid-cols-6">
        <div className="col-span-4 md:col-span-2">
          <img src={IceUrquiza} alt="Frente de la Iglesia" />
        </div>
        <div className="grid gap-2 col-span-4 md:col-span-2 md:gap-4 lg:col-span-4">
            <h2 className="text-center text-2xl font-serif font-extrabold md:text-wrap md:text-3xl lg:text-5xl">Llevamos el evangelio, vivimos el propósito</h2>
            <p className="md:text-xl">Compartimos las buenas noticias de Jesús con el mundo, no solo con palabras, sino con acciones. Vivimos con la certeza de que fuimos llamados a amar, servir y reflejar a Cristo en todo lo que hacemos.</p>
          
          <div className="grid grid-cols-1 mt-2 md:mt-4 gap-y-2 md:gap-y-4">
            <div className="flex flex-col ">
              <h3 className="text-xl font-semibold font-serif">Misión</h3>
              <p className="text-xl">Proclamar el Evangelio de Jesucristo, hacer discípulos y servir con amor. (Mateo 28:19-20).</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold font-serif">Visión</h3>
              <p className="text-xl">Ser una iglesia que refleja el amor de Dios, guiando a las personas a una relación con Cristo. (Efesios 4:12-13).</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold font-serif">Objetivos</h3>
              <p className="text-xl">Evangelizar (Marcos 16:15), discipular (Colosenses 1:28), servir (Gálatas 6:9-10) y unir a la iglesia en adoración y comunión (Hebreos 10:24-25).</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nosotros