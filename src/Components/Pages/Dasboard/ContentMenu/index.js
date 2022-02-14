import styled from 'styled-components'
// import PropTypes from 'prop-types';

// Components
import { BiImageAdd } from 'react-icons/bi'
import { FaUserAlt } from 'react-icons/fa'
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
// const Image = styled.img``

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
              Añadir imagen
            </AddImage>
          </label>
        </ContentAddImage>
        <InputDashboard
          placeholder="Un nombre y un Apellido NayruthCalla"
          textLabel=" Nombre y Apellido para tu portada"
        />
        <TextareaDashboard
          placeholder="Apasionado en Desarrollo Android Java / Kotlin & JS Web Apps y Automatización con NodeJS"
          textLabel="¿ A qué te dedicas ?"
        />
        <TextareaDashboard
          placeholder="Hola, soy Roger 😄, un desarrollador 👨🏻‍💻 de Perú 🇵🇪. Soy un desarrollador móvil [Android] y todo lo relacionado con aplicaciones en tiempo real. Me gusta el cine y los deportes 🏃.
          Aficionada por el autoaprendizaje y el gran impacto que tiene programar.          
          ¡Hagamos historia!"
          textLabel="Habla sobre tí"
        />

        <InputDashboard
          placeholder="El apellido que saldrá en tu portada"
          textLabel="Primer Apellido"
        />
      </Form>
    </Container>
  )
}

export default ContentMenu
