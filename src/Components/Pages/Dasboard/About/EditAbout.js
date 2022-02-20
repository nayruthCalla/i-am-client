import Swal from 'sweetalert2'
import { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
// import PropTypes from 'prop-types';
import { useFormik } from 'formik'
import * as Yup from 'yup'

// Components FaLinkedin, FaGithub, FaInstagram, FaFacebook
import { BiImageAdd } from 'react-icons/bi'
import { FaUserAlt, FaPlus, FaMinus } from 'react-icons/fa'
import InputDashboard from '../../../Layouts/InputDashboard'
import TextareaDashboard from '../../../Layouts/Areashboard'
import Message from '../../../Layouts/MessageError'
import correct from '../../../../assets/correct.gif'
import { useEditAbout } from './customHooks'
// import LinkSocialNet from './SocialNetwork'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    min-height: 100vh;
    /* padding: 2rem 8rem; */
  }
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
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
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
const P = styled.p`
  font-family: Dongle;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 36px;
  color: rgb(123 157 209 / 94%);
  text-align: left;
`
const Preview = styled.div`
  width: 100%;
  display: flex;
  gap: 1.3rem;
`
const ContPrev = styled.div`
  width: 100%;
  display: flex;
  gap: 1.3rem;
  flex-wrap: wrap;
  padding: 2rem;
  background: #f7f6f7;
  margin: 2rem 0;
`
const ButtonRed = styled.button`
  background: transparent;
  /* border-radius: 50%; */
  border: 3px;
  border-radius: 3px;
  border: none;
  padding: 1rem;
  color: #c54646;
  font-size: 1.8rem;
  align-items: center;
  display: flex;
  padding: 0.1rem 1.5rem;
  cursor: pointer;
  :hover {
    background: #e7dbe7;
  }
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
  cursor: pointer;
  :hover {
    background: var(--hover-dasb);
  }
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
    color: #484747;
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
  @media screen and (min-width: 768px) {
    width: 40%;
  }
  @media screen and (min-width: 1024px) {
  }
`

const About = ({ dataEdited, setAddCardEdit, addCardEdit }) => {
  console.log(dataEdited.socialNetworks)
  const [url, setLink] = useState(true)
  const [textLink, setLinkText] = useState([dataEdited.socialNetworks])
  const [updateAboutMe] = useEditAbout()
  // console.log(loading, error) { loading, error }
  const formik = useFormik({
    initialValues: {
      username: dataEdited.firstName,
      occupation: dataEdited.profession,
      aboutMe: dataEdited.aboutMeText,
      interests: dataEdited.interests,
      inputLink: '',
      linktype: '',
      resultLink: textLink,
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required(':( Tu nombre y apellido es obligatorio!')
        .min(6, 'Puedes poner tu nombre completo por favor'),
      occupation: Yup.string()
        .required(':( Describir tu ocupación es obligatorio!')
        .min(10, 'Destalla más sobre tu ocupación'),
      aboutMe: Yup.string()
        .required(':( Describir sobre tí es obligatorio!')
        .min(10, 'Cuentanos más sobre tí, para que te conozcan mejot'),
      interests: Yup.string()
        .required(':( Escribir sobre lo que quieres es obligatorio!')
        .min(
          10,
          'Si describes más a detalle de lo que quieres, te podrán conocer mejor'
        ),
      linktype: Yup.string().oneOf(
        ['gmail', 'linkedin', 'github', 'instagram', 'facebook'],
        'Invalid Link Type'
      ),
      inputLink: Yup.string().url(),
    }),
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      try {
        // console.log(textLink)
        const { data } = await updateAboutMe({
          variables: {
            updateAboutMeId: dataEdited.id,
            firstName: values.username,
            profession: values.occupation,
            aboutMeText: values.aboutMe,
            interests: values.interests,
            socialNetworks: textLink,
            photo: '',
          },
        })
        // console.log(data.addAboutMe)
        if (data.addAboutMe) {
          Swal.fire({
            title: 'Excelente!',
            text: 'Tus datos se guardarón exitosamente!',
            imageUrl: `${correct}`,
            imageWidth: 300,
            imageAlt: 'Custom image',
          })
        }
      } catch (e) {
        // console.log(e)
      }
      setAddCardEdit(!addCardEdit)
    },
  })
  const handleClick = () => {
    setLink(!url)
    setLinkText([
      ...textLink,
      { name: formik.values.linktype, link: formik.values.inputLink },
    ])
    formik.values.inputLink = ''
  }
  const handleReduce = (name, link) => {
    // console.log(textLink)
    const filterLinks = textLink.filter((e) => e.link !== link)
    // console.log(filterLinks)
    setLinkText(filterLinks)
  }
  useEffect(() => {
    setLinkText(dataEdited.socialNetworks)
  }, [])
  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
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
              Añadir imagen de pérfil
            </AddImage>
          </label>
        </ContentAddImage>
        <InputDashboard
          placeholder="Un nombre y un Apellido Nayruth Calla"
          textLabel=" Nombre y Apellido para tu portada"
          value={formik.values.username}
          onChange={formik.handleChange}
          id="username"
          name="username"
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username ? (
          <Message text={formik.errors.username} />
        ) : null}
        {/* {console.log(formik.touched.username)} */}
        <TextareaDashboard
          placeholder="Apasionada en Desarrollo Javascript React / Web Apps y Automatización con NodeJS"
          textLabel="¿ A qué te dedicas ?"
          value={formik.values.occupation}
          onChange={formik.handleChange}
          id="occupation"
          name="occupation"
          onBlur={formik.handleBlur}
        />
        {formik.touched.occupation && formik.errors.occupation ? (
          <Message text={formik.errors.occupation} />
        ) : null}
        <TextareaDashboard
          placeholder="Hola, soy Nayruth 😄, una desarrolladora 💻 de Perú 🇵🇪. Soy una programodora web [Javascript] me apasiona todo lo relacionado con aplicaciones en tiempo real. Me gusta el cine y los deportes 🏃.
          Aficionada por el autoaprendizaje y el gran impacto que tiene programar.
          
          ¡Hagamos historia!"
          textLabel="Habla sobre tí"
          size="big"
          value={formik.values.aboutMe}
          onChange={formik.handleChange}
          id="aboutMe"
          name="aboutMe"
          onBlur={formik.handleBlur}
        />
        {formik.touched.aboutMe && formik.errors.aboutMe ? (
          <Message text={formik.errors.aboutMe} />
        ) : null}

        <TextareaDashboard
          placeholder="Que estoy haciendo actualmente"
          textLabel="Comparte tus intereses"
          value={formik.values.interests}
          onChange={formik.handleChange}
          id="interests"
          name="interests"
          onBlur={formik.handleBlur}
        />
        {formik.touched.interests && formik.errors.interests ? (
          <Message text={formik.errors.interests} />
        ) : null}
        <ContSelect>
          <Label htmlFor="linktype">Agrega el link de tus Contactos</Label>
          {textLink.length > 0 ? (
            <ContPrev>
              {textLink.map((e, i) => (
                <Preview key={i}>
                  <P>{e.name}</P>
                  <P>{e.link}</P>
                  <ButtonRed
                    type="button"
                    onClick={() => handleReduce(e.name, e.link)}
                  >
                    <FaMinus />
                  </ButtonRed>
                </Preview>
              ))}
            </ContPrev>
          ) : null}

          <ContSocialNetwork>
            <Select
              label="link Type"
              name="linktype"
              onChange={formik.handleChange}
            >
              <Option value="">Eligir</Option>
              <Option value="gmail">Gmail</Option>
              <Option value="linkedin">LinkedIn</Option>
              <Option value="github">GitHub</Option>
              <Option value="instagram">Instagram</Option>
              <Option value="facebook">Facebook</Option>
            </Select>
            <InputLink
              placeholder="Link https://..."
              value={formik.values.inputLink}
              onChange={formik.handleChange}
              id="inputLink"
              name="inputLink"
              onBlur={formik.handleBlur}
            />
            <AddButton type="button" onClick={handleClick}>
              <FaPlus />
            </AddButton>
          </ContSocialNetwork>
          {formik.touched.inputLink && formik.errors.inputLink ? (
            <Message text={formik.errors.inputLink} />
          ) : null}
          {formik.touched.linktype && formik.errors.linktype ? (
            <Message text={formik.errors.linktype} />
          ) : null}
        </ContSelect>
        <SaveButton type="submit">Guardar</SaveButton>
      </Form>
    </Container>
  )
}

export default About
