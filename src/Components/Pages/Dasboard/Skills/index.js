import styled from 'styled-components'
import { FaPlus } from 'react-icons/fa'
import AddProyect from './AddSkill'
import CardSkill from '../../../Layouts/CardSkill'
// import TextareaDashboard from '../../../Layouts/Areashboard'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
`
const ContainerSkills = styled.div`
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
  max-width: 25rem;
  justify-content: center;
  cursor: pointer;
  :hover {
    background: var(--hover-dasb);
  }
`

const Skills = () => {
  return (
    <Container>
      <ContainerSkills>
        <CardSkill colorBtn="dasboard" text="Javascript" />
        <CardSkill colorBtn="dasboard" text="Javascript" />
        <CardSkill colorBtn="dasboard" text="Javascript" />
        <CardSkill colorBtn="dasboard" text="Javascript" />
      </ContainerSkills>
      <AddButton>
        <FaPlus />
        Añadir Skill
      </AddButton>
      <AddProyect />
    </Container>
  )
}

export default Skills
