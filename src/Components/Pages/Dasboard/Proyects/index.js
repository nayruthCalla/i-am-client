import styled from 'styled-components'
import { FaPlus } from 'react-icons/fa'
import AddProyect from './AddProyect'
import CardProyect from '../../../Layouts/CardProyect'
// import TextareaDashboard from '../../../Layouts/Areashboard'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  @media screen and (min-width: 768px) {
    min-height: 100vh;
    justify-content: flex-start;
    /* padding: 2rem 8rem; */
  }
`
const ContainerProyects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  padding: 0 4rem 3rem 4rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1024px) {
  }
`

// const Image = styled.img``
const AddButton = styled.button`
  background: #c54646;
  border: none;
  padding: 1rem;
  color: #f6f6f9;
  font-size: 1.8rem;
  align-items: center;
  display: flex;
  border-radius: 0.8rem;
  gap: 1rem;
  width: 100%;
  max-width: 35rem;
  justify-content: center;
  cursor: pointer;
  :hover {
    background: var(--hover-dasb);
  }
`

const Proyects = () => {
  return (
    <Container>
      <ContainerProyects>
        <CardProyect
          colorBtn="dasboard"
          title="Burguer Queen"
          description="Aplicación educativa de Android que agrega la interfaz de usuario de la aplicación Design Course"
          techFirst="React"
          techSecond="Graphql"
          level="Intermedio"
        />
        <CardProyect
          colorBtn="dasboard"
          title="Burguer Queen"
          description="Aplicación educativa de Android que agrega la interfaz de usuario de la aplicación Design Course"
          techFirst="React"
          techSecond="Graphql"
          level="Intermedio"
        />
        <CardProyect
          colorBtn="dasboard"
          title="Burguer Queen"
          description="Aplicación educativa de Android que agrega la interfaz de usuario de la aplicación Design Course"
          techFirst="React"
          techSecond="Graphql"
          level="Intermedio"
        />
      </ContainerProyects>

      <AddButton>
        <FaPlus />
        Añadir Proyecto
      </AddButton>
      <AddProyect />
    </Container>
  )
}

export default Proyects
