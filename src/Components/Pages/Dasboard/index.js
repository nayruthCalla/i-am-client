import styled from 'styled-components'
import ButtonDashborad from '../../Layouts/ButtonDashborad'
import Line from '../../Layouts/LineStyle'
import About from './About'
import Proyects from './Proyects'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`
const ContMenuButton = styled.div``

const DasBoard = () => {
  return (
    <Container>
      <ContMenuButton>
        <ButtonDashborad text="Acerca de Mí" screen="mobile" />
        <Line />
        <About />
        <Line />
      </ContMenuButton>
      <ContMenuButton>
        <ButtonDashborad text="Mis Proyectos" screen="mobile" />
        <Line />
        <Proyects />
      </ContMenuButton>
      <ContMenuButton>
        <ButtonDashborad text="Mis Skills" screen="mobile" />
        <Line />
      </ContMenuButton>
      <ContMenuButton>
        <ButtonDashborad text="Mis Logros" screen="mobile" />
        <Line />
      </ContMenuButton>
      <ContMenuButton>
        <ButtonDashborad text="Mi Contacto" screen="mobile" />
        <Line />
      </ContMenuButton>
      <ContMenuButton>
        <ButtonDashborad text="Mi CV" screen="mobile" />
      </ContMenuButton>
    </Container>
  )
}

export default DasBoard
