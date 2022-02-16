import styled from 'styled-components'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Proyects from './Proyects'
import Skills from './Skills'
import Logros from './Logros'
import Footer from './Footer'
import user from '../../../assets/user.gif'

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  margin: 0;
  background: var(--primary-template);
`
const TextFooter = styled.p`
  font-family: Saira;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  color: #a3a8c3;
`
const PortflTamplate = () => {
  return (
    <Container>
      <Header userName="Nayruth Calla" />
      <Hero
        photo={user}
        linkGit="https://www.linkedin.com/"
        linkLinke="https://www.linkedin.com/"
        userName="Nayruth Calla"
        description="Apasionada en Desarrollo Javascript Java / Kotlin & JS Web Apps y Automatización con NodeJS"
      />
      <About
        aboutMe="Hola, soy Nayruth 😄, una desarrolladora 💻 de Perú 🇵🇪. Soy una programodora web [Javascript] me apasiona todo lo relacionado con aplicaciones en tiempo real. Me gusta el cine y los deportes 🏃.
Aficionada por el autoaprendizaje y el gran impacto que tiene programar.

¡Hagamos historia!"
        firstChractr="👩💻 Actualmente estoy trabajando en la aplicación web con React y Node"
        secondChractr="🌱 Actualmente estoy aprendiendo MongoDb Express Android Nodejs y Google AppScript."
      />
      <Proyects />
      <Skills />
      <Logros />
      <Footer />

      <TextFooter>© 2022 Nayruth Calla</TextFooter>
      <TextFooter>Desarrollado por Iam</TextFooter>
    </Container>
  )
}

export default PortflTamplate
