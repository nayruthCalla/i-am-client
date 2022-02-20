import styled from 'styled-components'
import Header from '../../Layouts/Header'
import ButtonDashborad from '../../Layouts/ButtonDashborad'
import Line from '../../Layouts/LineStyle'
import Username from './Username'
import About from './About'
import Proyects from './Proyects'
import Skills from './Skills'
import Logros from './Logros'
import Menu from './MenuBar'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  width: 100%;
  margin-top: 10rem;
  @media screen and (min-width: 768px) {
    min-height: 100vh;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`
const ContMenuButton = styled.div`
  @media screen and (min-width: 768px) {
    /* height: 100vh; */
    /* padding: 2rem 8rem; */
  }
`

const ContainerCont = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  @media screen and (min-width: 768px) {
    /* min-height: 100vh; */
  }
  @media screen and (min-width: 1024px) {
    margin-left: 25rem;
  }
`

const DasBoard = () => {
  return (
    <>
      <Header />
      <Container>
        <Menu />
        <ContainerCont>
          <ContMenuButton id="about">
            <ButtonDashborad text="Mi nombre de usuario" screen="mobile" />
            <Line />
            <Username />
            <Line />
          </ContMenuButton>
          <ContMenuButton id="about">
            <ButtonDashborad text="Acerca de Mí" screen="mobile" />
            <Line />
            <About />
            <Line />
          </ContMenuButton>
          <ContMenuButton id="proyects">
            <ButtonDashborad text="Mis Proyectos" screen="mobile" />
            <Line />
            <Proyects />
          </ContMenuButton>
          <ContMenuButton id="skills">
            <ButtonDashborad text="Mis Skills" screen="mobile" />
            <Line />
            <Skills />
            <Line />
          </ContMenuButton>
          <ContMenuButton id="logros">
            <ButtonDashborad text="Mis Logros" screen="mobile" />
            <Line />
            <Logros />
          </ContMenuButton>
          <ContMenuButton id="cv">
            <ButtonDashborad text="Mi Contacto" screen="mobile" />
            <Line />
          </ContMenuButton>
          <ContMenuButton>
            <ButtonDashborad text="Mi CV" screen="mobile" />
          </ContMenuButton>
        </ContainerCont>
      </Container>
    </>
  )
}

export default DasBoard
