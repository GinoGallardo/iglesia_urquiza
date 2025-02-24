
import Actividades from '../components/Actividades/Actividades'
import Footer from '../components/Footer/Footer'
import Header from '../components/header/Header'
import Home from '../components/Inicio/Home'
import Nosotros from '../components/Nosotros/Nosotros'
import Oracion from '../components/Oramos/Oracion'
import Visitanos from '../components/Visitanos/Visitanos'

function Landing() {
  return (
    <>
      <Header/>
      <Home />
      <Nosotros />
      <Visitanos />
      <Actividades />
      <Oracion />
      <Footer />
    </>
  )
}

export default Landing