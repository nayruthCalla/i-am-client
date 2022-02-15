import styled from 'styled-components'
// import PropTypes from 'prop-types';

// Components FaLinkedin, FaGithub, FaInstagram, FaFacebook
// import { FaPlus } from 'react-icons/fa'
import InputDashboard from '../../../Layouts/InputDashboard'
import TextareaDashboard from '../../../Layouts/Areashboard'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Form = styled.form`
  width: 100%;
  max-width: 65rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 3rem;
  & input[id='comPhoto'] {
    display: none;
  }
  & label[for='comPhoto'] {
    min-width: 300px;
    height: 50px;
    display: flex;
    padding: 6px 0px;
    cursor: pointer;
    margin-top: 10px;
    justify-content: center;
  }
`

const SaveButton = styled.button`
  background: #c54646;
  border: none;
  padding: 1rem;
  color: #f6f6f9;
  font-size: 1.8rem;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 0.8rem;
  gap: 1rem;
  width: 100%;
  margin: 4rem 0 0 0;
  cursor: pointer;
  :hover {
    background: var(--hover-dasb);
  }
`
const AddLogros = () => {
  return (
    <Container>
      <Form>
        <InputDashboard
          placeholder="Front-end developer en Laboratoria"
          textLabel="Escribe un título"
        />
        <TextareaDashboard
          placeholder="Bootcamp intensivo en el desarrollo de hábilidades blandas y técnicas para desarrollo web, bajo metodología ágil. Lenguajes: Javascript, HTML5, CSS3."
          textLabel="Describe brebemente tu experiencia"
          size="big"
        />

        <SaveButton>Guardar</SaveButton>
      </Form>
    </Container>
  )
}

export default AddLogros
