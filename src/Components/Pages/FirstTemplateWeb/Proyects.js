import styled from 'styled-components'
import CardProyect from '../../Layouts/CardProyect'

const Container = styled.section`
  /* margin-top: 31rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  gap: 2rem;
  padding: 2rem 3rem;
  @media screen and (min-width: 768px) {
    min-height: 100vh;
    padding: 2rem 8rem;
    justify-content: flex-start;
  }
`

const ContSectionTitle = styled.div``
const SectionTitle = styled.h2`
  font-family: var(--font-SpaceM);
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;
  line-height: 59px;
  color: #ffffff;
  :hover {
    color: #2bb8da;
  }
`
const Span = styled.span`
  color: #2bb8da;
`
const Line = styled.div`
  background: rgba(43, 184, 218, 0.5);
  width: 100%;
  height: 2px;
`
const ContainerProyects = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1024px) {
  }
`
const Proyects = () => {
  return (
    <Container id="proyects">
      <ContSectionTitle>
        <SectionTitle>
          <Span>02.</Span> Mis Proyectos
        </SectionTitle>
        <Line />
      </ContSectionTitle>
      <ContainerProyects>
        <CardProyect
          colorBtn="template"
          title="Burguer Queen"
          description="Aplicación educativa de Android que agrega la interfaz de usuario de la aplicación Design Course"
          techFirst="React"
          techSecond="Graphql"
          level="Intermedio"
        />
        <CardProyect
          colorBtn="template"
          title="Burguer Queen"
          description="Aplicación educativa de Android que agrega la interfaz de usuario de la aplicación Design Course"
          techFirst="React"
          techSecond="Graphql"
          level="Intermedio"
        />
        <CardProyect
          colorBtn="template"
          title="Burguer Queen"
          description="Aplicación educativa de Android que agrega la interfaz de usuario de la aplicación Design Course"
          techFirst="React"
          techSecond="Graphql"
          level="Intermedio"
        />
      </ContainerProyects>
    </Container>
  )
}

export default Proyects
