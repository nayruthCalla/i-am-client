/* eslint-disable react/void-dom-elements-no-children */
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import { useAuth0 } from '@auth0/auth0-react'
import styled, { css } from 'styled-components'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Axios from 'axios'

import { BiImageAdd } from 'react-icons/bi'
import { FaUserAlt, FaPlus, FaMinus } from 'react-icons/fa'
import InputDashboard from '../../../Layouts/InputDashboard'
import TextareaDashboard from '../../../Layouts/Areashboard'
import Message from '../../../Layouts/MessageError'
import { useAddAbout } from './customHooks'
import userg from '../../../../assets/user.gif'
import { GET_USER_BY_USERGITHUB } from './querysAndMutations'

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
    max-width: 100rem;
  }
`
const ContainerAbout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: space-around;
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
const P = styled.a`
  font-family: Dongle;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 36px;
  color: rgb(123 157 209 / 94%);
  text-align: left;
`
const Preview = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-flow: column-reverse;
  gap: 0;
  background: #004cff0a;
  padding: 1rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 1.3rem;
    width: auto;
  }
  @media screen and (min-width: 1024px) {
  }
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
const ImagePrevw = styled.img`
  min-height: 150px;
  min-width: 150px;
  max-height: 150px;
  max-width: 150px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 50%;
  object-fit: cover;
  object-position: center center;
  :hover {
    filter: grayscale(80%);
  }
  @media screen and (min-width: 768px) {
    min-height: 250px;
    min-width: 250px;
    max-height: 250px;
    max-width: 250px;
  }
`
const FigurePrevw = styled.figure`
  background: transparent;
  border: 3px solid #2bb8da;
  width: 17rem;
  height: 17rem;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  @media screen and (min-width: 768px) {
    width: 30rem;
    height: 30rem;
  }
`

//--------------------------

const About = ({ showCont, setShowCont }) => {
  const { user } = useAuth0()
  const nameKey = process.env.REACT_APP_NAME_KEY
  const [addAboutMe] = useAddAbout()
  const [url, setLink] = useState(true)
  const [textLink, setLinkText] = useState([
    {
      name: '',
      link: '',
    },
  ])
  const [imgPerfil, setImgPerfil] = useState(' ')
  const [addPhoto, setAddPhoto] = useState(false)
  // const [validateQtyLinks, setValidateQtyLinks] = useState(false)

  const formik = useFormik({
    initialValues: {
      username: '',
      occupation: '',
      aboutMe: '',
      interests: '',
      inputLink: '',
      linktype: '',
      resultLink: textLink,
      // linkContact: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required(':( Tu nombre y apellido es obligatorio!')
        .min(6, 'Puedes poner tu nombre completo por favor'),
      occupation: Yup.string()
        .required(':( Describir tu ocupaci??n es obligatorio!')
        .min(10, 'Destalla m??s sobre tu ocupaci??n'),
      aboutMe: Yup.string()
        .required(':( Describir sobre t?? es obligatorio!')
        .min(10, 'Cuentanos m??s sobre t??, para que te conozcan mejot'),
      interests: Yup.string()
        .required(':( Escribir sobre lo que quieres es obligatorio!')
        .min(
          10,
          'Si describes m??s a detalle de lo que quieres, te podr??n conocer mejor'
        ),
      linktype: Yup.string()
        .oneOf(
          ['gmail', 'linkedin', 'github', 'instagram', 'facebook'],
          'Invalid Link Type'
        )
        .required(':( Debes elegir una cuenta a la que vas a asociar tu link'),
      inputLink: Yup.string(),
    }),
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      // console.log(values)
      try {
        const { data } = await addAboutMe({
          variables: {
            // userId: '6206b58f284d4e1f15002d39',
            firstName: values.username,
            profession: values.occupation,
            aboutMeText: values.aboutMe,
            interests: values.interests,
            socialNetworks: textLink,
            photo: addPhoto ? imgPerfil.data.secure_url : userg,
          },
        })
        // console.log(data.addAboutMe)
        if (data.addAboutMe) {
          Swal.fire({
            title: 'Excelente!',
            text: 'Tus datos se guardar??n exitosamente!',
            icon: 'success',
            imageWidth: 300,
            imageAlt: 'Custom image',
          })
          setShowCont(!showCont)
        }
      } catch (e) {
        // console.log(e)
      }
    },
  })
  const handleClick = () => {
    // console.log(textLink)
    const FilterLinks = textLink.filter((e) => e.link !== '')
    // console.log(FilterLinks)
    setLink(!url)
    setLinkText([
      ...FilterLinks,
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

  const uploadImage = async (event) => {
    try {
      const formData = new FormData()
      formData.append('file', event.target.files[0])
      formData.append('upload_preset', `${process.env.REACT_APP_CLOUD}`)

      const imgResul = await Axios.post(
        `https://api.cloudinary.com/v1_1/${nameKey}/image/upload`,
        formData
      )
      setImgPerfil(imgResul)
      setAddPhoto(true)
    } catch (e) {
      // console.log(e)
    }
  }
  useEffect(async () => {
    // console.log(user?.sub)
    if (user?.sub.split('|')[0] === 'github') {
      try {
        const dataUser = await Axios.post(
          'https://api.github.com/graphql',
          {
            query: GET_USER_BY_USERGITHUB,
            variables: {
              login: user.sub.split('|')[0] === 'github' ? user.nickname : '',
            },
          },
          {
            headers: {
              Authorization: process.env.REACT_APP_GITHUB_KEY,
            },
          }
        )
        // console.log(dataUser.data.data.user)

        await addAboutMe({
          variables: {
            // userId: '6206b58f284d4e1f15002d39',
            firstName: dataUser.data.data.user.name
              ? dataUser.data.data.user.name
              : 'Agrega tu Nombre',
            profession: 'Agrega tu ocupaci??n',
            aboutMeText: dataUser.data.data.user.bio
              ? dataUser.data.data.user.bio
              : 'Hablanos sobre t??',
            interests: 'Agrega tus intereses',
            socialNetworks: [
              {
                name: 'github',
                link: dataUser.data.data.user.url,
              },
            ],
            photo: user.picture,
          },
        })
        // console.log(data)
      } catch (e) {
        // console.log('errores', e)
      }
    }
  }, [user])
  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <ContainerAbout>
          <div>
            <ContentAddImage>
              {imgPerfil !== ' ' ? (
                <FigurePrevw>
                  <ImagePrevw src={imgPerfil.data.secure_url} />
                </FigurePrevw>
              ) : (
                <Figure>
                  <FaUserAlt />
                </Figure>
              )}

              <label htmlFor="comPhoto">
                <input
                  type="file"
                  name="comPhoto"
                  id="comPhoto"
                  accept="image/*"
                  multiple
                  onChange={(e) => {
                    uploadImage(e)
                  }}
                />

                <AddImage data-test="addPhoto">
                  <BiImageAdd />
                  A??adir imagen de p??rfil
                </AddImage>
              </label>
            </ContentAddImage>
          </div>
          <div>
            <InputDashboard
              placeholder="Un nombre y un Apellido Nayruth Calla"
              textLabel=" Nombre y Apellido para tu portada"
              value={formik.values.username}
              onChange={formik.handleChange}
              id="username"
              name="username"
              onBlur={formik.handleBlur}
              data-test="textName"
            />
            {formik.touched.username && formik.errors.username ? (
              <Message text={formik.errors.username} />
            ) : null}
            {/* {console.log(formik.touched.username)} */}
            <TextareaDashboard
              placeholder="Apasionada en Desarrollo Javascript React / Web Apps y Automatizaci??n con NodeJS"
              textLabel="?? A qu?? te dedicas ?"
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
              placeholder="Hola, soy Nayruth ????, una desarrolladora ???? de Per?? ????????. Soy una programodora web [Javascript] me apasiona todo lo relacionado con aplicaciones en tiempo real. Me gusta el cine y los deportes ????.
          Aficionada por el autoaprendizaje y el gran impacto que tiene programar.
          
          ??Hagamos historia!"
              textLabel="Habla sobre t??"
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
                    <div key={i}>
                      {e.link === '' ? null : (
                        <Preview>
                          <P
                            id="linkContact"
                            name="linkContact"
                            href={e.link}
                            target="_blank"
                          >
                            {e.name}
                          </P>
                          <ButtonRed
                            type="button"
                            data-test="btnDeletLinkSocialNet"
                            onClick={() => handleReduce(e.name, e.link)}
                          >
                            <FaMinus />
                          </ButtonRed>
                        </Preview>
                      )}
                    </div>
                  ))}
                </ContPrev>
              ) : null}

              <ContSocialNetwork>
                <Select
                  label="link Type"
                  name="linktype"
                  onChange={formik.handleChange}
                >
                  <Option value="">Elegir</Option>
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
                <AddButton
                  data-test="btnAddLinkSocialNet"
                  type="button"
                  onClick={handleClick}
                >
                  <FaPlus />
                </AddButton>
              </ContSocialNetwork>

              {/* {validateQtyLinks ? (
                <Message text=":( Ya ingresaste ese link!" />
              ) : null} */}
              {formik.touched.inputLink && formik.errors.inputLink ? (
                <Message text={formik.errors.inputLink} />
              ) : null}
              {formik.touched.linktype && formik.errors.linktype ? (
                <Message text={formik.errors.linktype} />
              ) : null}
              {formik.errors.linkContact ? (
                <Message text={formik.errors.linkContact} />
              ) : null}
            </ContSelect>
          </div>
        </ContainerAbout>
        <SaveButton data-test="btnAddAbout" type="submit">
          Guardar
        </SaveButton>
      </Form>
    </Container>
  )
}

export default About
