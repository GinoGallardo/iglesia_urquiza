
import Actividades from '../components/Actividades/Actividades'
import Footer from '../components/Footer/Footer'
import Header from '../components/header/Header'
import Home from '../components/Inicio/Home'
import Nosotros from '../components/Nosotros/Nosotros'
import Oracion from '../components/Oramos/Oracion'
import Visitanos from '../components/Visitanos/Visitanos'
import ButtonWhatsApp from '../components/WhatsApp/ButtonWhatsApp'

function Landing() {
  return (
    <>
      <Header/>
      <Home />
      <Nosotros />
      <Visitanos />
      <Actividades />
      <Oracion />
      <ButtonWhatsApp />
      <Footer />
    </>
  )
}

export default Landing