import { useFormik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import styled, { css } from 'styled-components'
// import PropTypes from 'prop-types';

// Components FaLinkedin, FaGithub, FaInstagram, FaFacebook
import { FaPlus, FaMinus } from 'react-icons/fa'
import InputDashboard from '../../../Layouts/InputDashboard'
import TextareaDashboard from '../../../Layouts/Areashboard'
import Message from '../../../Layouts/MessageError'
import { useAddProyects } from './customHooks'
// import CardProyect from '../../../Layouts/CardProyect'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
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
    width: 100%;
    max-width: 100rem;
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
  font-family: Dongle;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 36px;
  color: rgba(67, 75, 87, 0.94);
`
const SelectLevel = styled(Select)`
  /* padding: 1rem; */
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
  @media screen and (min-width: 768px) {
    width: 40%;
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
const Preview = styled.div`
  width: 100%;
  display: flex;
  gap: 1.3rem;
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
const P = styled.a`
  font-family: Dongle;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 36px;
  color: rgb(123 157 209 / 94%);
  text-align: left;
`
const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 3rem;
  }
`
const DivColum = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const AddProyectC = ({ setStateForm, stateForm, setAddCard, addCard }) => {
  const [textLink, setLinkText] = useState([])
  const [mess, setMess] = useState(false)
  const [messRequired, setMessRequired] = useState(false)
  const [validateQtyLinks, setValidateQtyLinks] = useState(false)
  const [AddProyect] = useAddProyects()

  const formik = useFormik({
    initialValues: {
      nameProyect: '',
      descriptionProyc: '',
      techFirst: '',
      techSecond: '',
      level: '',
      inputLink: '',
      linktype: '',
      resultLink: textLink,
    },
    validationSchema: Yup.object({
      nameProyect: Yup.string()
        .required(':( Pon le un t??tulo a tu proyecto!')
        .min(3, 'Puedes poner un nombre m??s descriptivo a tu proyecto'),
      descriptionProyc: Yup.string()
        .required(':( Pon una descripci??n a tu proyecto!')
        .min(10, 'Destalla m??s sobre que hiciste en este proyecto'),
      techFirst: Yup.string()
        .required(':( Escribe una tecnolog??a que usaste')
        .min(2, 'Puedes ingresar un nombre m??s descriptivo'),
      techSecond: Yup.string()
        .required(':( Escribe una tecnolog??a que usaste')
        .min(2, 'Puedes ingresar un nombre m??s descriptivo'),
      level: Yup.string()
        .oneOf(['facil', 'intermedio', 'complejo'], 'Ivalido nivel')
        .required(':( Debes elegir un nivel, para este proyecto'),
      inputLink: Yup.string().url(),
      linktype: Yup.string()
        .oneOf(['Demo', 'Repo'], 'Invalid Link Type')
        .required(':( Debes elegir una cuenta a la que vas a asociar el link'),
      // resultLink: Yup.array().min(
      //   1,
      //   ':( Tienes que agregar como m??nimo una red para que se contacten contigo!'
      // ),

      //   .url()
      //   .nullable(),
    }),
    onSubmit: async ({
      nameProyect,
      descriptionProyc,
      techFirst,
      techSecond,
      level,
    }) => {
      try {
        // console.log(textLink)
        await AddProyect({
          variables: {
            proyectName: nameProyect,
            description: descriptionProyc,
            techFirst,
            techSecond,
            level,
            links: textLink,
          },
        })
        setStateForm([])
      } catch (e) {
        // console.log(e)
      }
      setStateForm([
        ...stateForm,
        {
          // userId: '620db8375913666d02a1f5ba',
          proyectName: nameProyect,
          description: descriptionProyc,
          techFirst,
          techSecond,
          level,
          links: textLink,
        },
      ])
      setAddCard(!addCard)
    },
  })
  const handleClick = () => {
    if (formik.values.linktype && formik.values.inputLink) {
      setMessRequired(false)
      if (textLink.length > 1) {
        setValidateQtyLinks(true)
      } else {
        setValidateQtyLinks(false)
        const searchLink = textLink.find(
          (e) =>
            e.name === formik.values.linktype &&
            e.link === formik.values.inputLink
        )
        if (!searchLink) {
          setMess(false)
          setLinkText([
            ...textLink,
            { name: formik.values.linktype, link: formik.values.inputLink },
          ])
        } else {
          setMess(true)
        }
      }
    } else {
      setMessRequired(true)
    }
    formik.values.inputLink = ''
  }
  // console.log(mess)
  const handleReduce = (name, link) => {
    // console.log(textLink)
    const filterLinks = textLink.filter(
      (e) => name !== e.name || e.link !== link
    )
    // console.log(filterLinks, name, link)
    setLinkText(filterLinks)
    setMess(false)
    setValidateQtyLinks(false)
  }
  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <Div>
          <DivColum>
            <InputDashboard
              placeholder="Burguer Queen"
              textLabel="Nombre de Proyecto"
              value={formik.values.nameProyect}
              onChange={formik.handleChange}
              id="nameProyect"
              name="nameProyect"
              onBlur={formik.handleBlur}
            />
            {formik.touched.nameProyect && formik.errors.nameProyect ? (
              <Message text={formik.errors.nameProyect} />
            ) : null}
          </DivColum>

          <DivColum>
            <TextareaDashboard
              placeholder="Aplicaci??n educativa de Android  ??????????????? que agrega la interfaz de usuario de la aplicaci??n Design Course"
              textLabel="Una peque??a descripci??n"
              value={formik.values.descriptionProyc}
              onChange={formik.handleChange}
              id="descriptionProyc"
              name="descriptionProyc"
              onBlur={formik.handleBlur}
            />
            {formik.touched.descriptionProyc &&
            formik.errors.descriptionProyc ? (
              <Message text={formik.errors.descriptionProyc} />
            ) : null}
          </DivColum>
        </Div>
        <Div>
          <DivColum>
            <InputDashboard
              placeholder="Redux"
              textLabel="Tecnolog??a importante 1"
              value={formik.values.techFirst}
              onChange={formik.handleChange}
              id="techFirst"
              name="techFirst"
              onBlur={formik.handleBlur}
            />
            {formik.touched.techFirst && formik.errors.techFirst ? (
              <Message text={formik.errors.techFirst} />
            ) : null}
          </DivColum>
          <DivColum>
            <InputDashboard
              placeholder="Graphql"
              textLabel="Tecnolog??a importante 2"
              value={formik.values.techSecond}
              onChange={formik.handleChange}
              id="techSecond"
              name="techSecond"
              onBlur={formik.handleBlur}
            />
            {formik.touched.techSecond && formik.errors.techSecond ? (
              <Message text={formik.errors.techSecond} />
            ) : null}
          </DivColum>
        </Div>
        <Div>
          <ContSelect>
            <Label name="level">??Que tan complejo fue este proyecto?</Label>
            <ContSocialNetwork>
              <SelectLevel
                label="level"
                name="level"
                data-test="selectLevelProyect"
                onChange={formik.handleChange}
              >
                <Option value="">Elegir</Option>
                <Option value="facil">F??cil</Option>
                <Option value="intermedio">Intermedio</Option>
                <Option value="complejo">Complejo</Option>
              </SelectLevel>
            </ContSocialNetwork>
            {formik.touched.level && formik.errors.level ? (
              <Message text={formik.errors.level} />
            ) : null}
          </ContSelect>
          <ContSelect>
            <Label name="linktype">Agrega Links de tu proyecto </Label>
            <ContSocialNetwork>
              <Select
                label="link Type"
                name="linktype"
                data-test="selectLinkProyect"
                onChange={formik.handleChange}
              >
                <Option value="">Elegir</Option>
                <Option value="Demo">Demo</Option>
                <Option value="Repo">Repositorio</Option>
              </Select>
              <InputLink
                placeholder="Link https://..."
                value={formik.values.inputLink}
                onChange={formik.handleChange}
                id="inputLink"
                name="inputLink"
                data-test="inputLinkProyect"
                onBlur={formik.handleBlur}
              />
              <AddButton
                data-test="addLinkProyect"
                type="button"
                onClick={handleClick}
              >
                <FaPlus />
              </AddButton>
            </ContSocialNetwork>
            {textLink.length <= 0 ? (
              <Message text="Agrega un link para tu proyecto" />
            ) : null}
            {validateQtyLinks ? (
              <Message text=" :( Ups! Ya no puedes agregar m??s links" />
            ) : null}
            {messRequired ? (
              <Message text=" :( Debes ingresar un link y elegir entre Demo o Repo!" />
            ) : null}
            {mess ? <Message text="Ups! Ya ingresaste ese link :(" /> : null}
            {formik.touched.inputLink && formik.errors.inputLink ? (
              <Message text={formik.errors.inputLink} />
            ) : null}
            {formik.touched.linktype && formik.errors.linktype ? (
              <Message text={formik.errors.linktype} />
            ) : null}
            {textLink.length > 0 ? (
              <ContPrev>
                {textLink.map((e, i) => (
                  <Preview key={i}>
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
                      onClick={() => handleReduce(e.name, e.link)}
                    >
                      <FaMinus />
                    </ButtonRed>
                  </Preview>
                ))}
              </ContPrev>
            ) : null}
          </ContSelect>
        </Div>
        <SaveButton name="btnAddProyect" type="submit">
          Guardar Proyecto
        </SaveButton>
      </Form>
    </Container>
  )
}

export default AddProyectC
