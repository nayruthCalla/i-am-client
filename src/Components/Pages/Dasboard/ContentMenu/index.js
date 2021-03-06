import styled, { css } from 'styled-components'
// import PropTypes from 'prop-types';

// Components FaLinkedin, FaGithub, FaInstagram, FaFacebook
import { BiImageAdd } from 'react-icons/bi'
import { FaUserAlt, FaPlus } from 'react-icons/fa'
import InputDashboard from '../../../Layouts/InputDashboard'
import TextareaDashboard from '../../../Layouts/Areashboard'
// import { IconContext } from 'react-icons'TextareaDashboard
// import Line from '../../Layouts/LineStyle'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ContentAddImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 35px;
`
const Figure = styled.figure`
  display: flex;
  background: rgba(196, 196, 196, 0.26);
  border-radius: 15px;
  width: 117px;
  height: 113px;
  justify-content: center;
  align-items: center;
  color: #70777d;
  font-size: 3rem;
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

const AddImage = styled.p`
  border: none;
  font-size: 1.7rem;
  cursor: pointer;
  color: rgba(67, 75, 87, 0.94);
  margin-top: 10px;

  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
    font-size: 30px;
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
    border-radius: 20px;
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
const ContentMenu = () => {
  return (
    <Container>
      <Form>
        <ContentAddImage>
          <Figure>
            <FaUserAlt />
          </Figure>
          <label htmlFor="comPhoto">
            <input
              type="file"
              name="comPhoto"
              id="comPhoto"
              accept="image/*"
              multiple
            />
            <AddImage>
              <BiImageAdd />
              A??adir imagen de p??rfil
            </AddImage>
          </label>
        </ContentAddImage>
        <InputDashboard
          placeholder="Un nombre y un Apellido NayruthCalla"
          textLabel=" Nombre y Apellido para tu portada"
        />
        <TextareaDashboard
          placeholder="Apasionado en Desarrollo Android Java / Kotlin & JS Web Apps y Automatizaci??n con NodeJS"
          textLabel="?? A qu?? te dedicas ?"
        />
        <TextareaDashboard
          placeholder="Hola, soy Roger ????, un desarrollador ??????????????? de Per?? ????????. Soy un desarrollador m??vil [Android] y todo lo relacionado con aplicaciones en tiempo real. Me gusta el cine y los deportes ????.
          Aficionada por el autoaprendizaje y el gran impacto que tiene programar.          
          ??Hagamos historia!"
          textLabel="Habla sobre t??"
          size="big"
        />

        <InputDashboard
          placeholder="Que estoy haciendo actualmente"
          textLabel="Comparte tus intereses"
        />
        <ContSelect>
          <Label>Agrega el link de tus redes sociales</Label>
          <ContSocialNetwork>
            <Select>
              <Option>Elegir</Option>
              <Option>LinkedIn</Option>
              <Option>GitHub</Option>
              <Option>Instagram</Option>
              <Option>Facebook</Option>
            </Select>
            <InputLink placeholder="Link https://..." />
            <AddButton>
              <FaPlus />
            </AddButton>
          </ContSocialNetwork>
        </ContSelect>
      </Form>
    </Container>
  )
}

export default ContentMenu
