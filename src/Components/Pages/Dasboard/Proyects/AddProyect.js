import styled, { css } from 'styled-components'
// import PropTypes from 'prop-types';

// Components FaLinkedin, FaGithub, FaInstagram, FaFacebook
import { FaPlus } from 'react-icons/fa'
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

const ContSelect = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`
const ContSocialNetwork = styled.div`
  width: 100%;
  display: flex;
  gap: 1.3rem;
`
const Select = styled.select`
  background: #ffffff;
  border: 2px solid rgba(67, 75, 87, 0.31);
  box-sizing: border-box;
  border-radius: 8px;
`
const Option = styled.option``
const Label = styled.label`
  font-family: Dongle;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 36px;
  color: rgba(67, 75, 87, 0.94);
  text-align: left;
`

// const Image = styled.img``
const AddButton = styled.button`
  background: #c54646;
  border-radius: 50%;
  border: none;
  padding: 1rem;
  color: #f6f6f9;
  font-size: 1.8rem;
  align-items: center;
  display: flex;
`
const InputLink = styled('input')(
  () => css`
    background: #ffffff;
    border: 2px solid rgba(67, 75, 87, 0.31);
    box-sizing: border-box;
    border-radius: 8px;
    font-family: var(--font-Dongle);
    font-style: normal;
    font-weight: bold;
    font-size: 2.5rem;
    line-height: 36px;
    padding: 0 1rem;
    text-align: center;
    width: inherit;
    ::placeholder {
      color: rgba(67, 75, 87, 0.45);
    }
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1024px) {
    }
  `
)
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
const AddProyect = () => {
  return (
    <Container>
      <Form>
        <InputDashboard
          placeholder="Burguer Queen"
          textLabel="Nombre de Proyecto"
        />
        <TextareaDashboard
          placeholder="Aplicación educativa de Android  👨🏻‍💻 que agrega la interfaz de usuario de la aplicación Design Course"
          textLabel="Una pequeña descripción"
        />
        <InputDashboard
          placeholder="Redux"
          textLabel="Tecnología importante 1"
        />
        <InputDashboard
          placeholder="Graphql"
          textLabel="Tecnología importante 2"
        />
        <ContSelect>
          <Label>¿Que tan complejo fue este proyecto?</Label>
          <ContSocialNetwork>
            <Select>
              <Option>Eligir</Option>
              <Option>Fácil</Option>
              <Option>Intermedio</Option>
              <Option>Complejo</Option>
            </Select>
          </ContSocialNetwork>
        </ContSelect>
        <ContSelect>
          <Label>Agrega Links de tu proyecto </Label>
          <ContSocialNetwork>
            <Select>
              <Option>Eligir</Option>
              <Option>Demo</Option>
              <Option>Repositorio</Option>
            </Select>
            <InputLink placeholder="Link https://..." />
            <AddButton>
              <FaPlus />
            </AddButton>
          </ContSocialNetwork>
        </ContSelect>
        <SaveButton>Guardar</SaveButton>
      </Form>
    </Container>
  )
}

export default AddProyect
