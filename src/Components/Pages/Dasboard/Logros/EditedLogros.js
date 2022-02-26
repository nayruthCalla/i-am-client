import styled from 'styled-components'
import * as Yup from 'yup'
import { useFormik } from 'formik'
// import PropTypes from 'prop-types';

// Components FaLinkedin, FaGithub, FaInstagram, FaFacebook
// import { FaPlus } from 'react-icons/fa'
import InputDashboard from '../../../Layouts/InputDashboard'
import TextareaDashboard from '../../../Layouts/Areashboard'
import Message from '../../../Layouts/MessageError'
import { useEditLogro } from './customHooks'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
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
  @media screen and (min-width: 768px) {
    width: 40%;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`
const ContButtons = styled('div')`
  display: flex;
  /* flex-direction: column; */
  width: 100%;
  gap: 4rem;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
  }
`

const AddLogros = ({ dataEdited, setAddCardEdit, addCardEdit }) => {
  const [updateLogros] = useEditLogro()

  const formik = useFormik({
    initialValues: {
      title: dataEdited.title,
      description: dataEdited.description,
      // resultLink: textLink,
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required(':( Escribe un título para este logro!')
        .min(3, 'Puedes poner un título más descriptivo'),
      description: Yup.string()
        .required(':( Pon una descripción a este logro')
        .min(10, 'Destalla más sobre que hiciste en este logro'),
    }),
    onSubmit: async (values) => {
      // console.log(values)
      try {
        // // console.log(textLink)
        await updateLogros({
          variables: {
            updateLogrosId: dataEdited.id,
            title: values.title,
            description: values.description,
          },
        })
        // setStateForm([])
        // console.log(data)
        // if (data.addSkill) {
        //   Swal.fire({
        //     title: 'Excelente!',
        //     text: 'Tus datos se guardarón exitosamente!',
        //     imageUrl: `${correct}`,
        //     imageWidth: 300,
        //     imageAlt: 'Custom image',
        //   })
        // }
      } catch (e) {
        // console.log(e)
      }
      setAddCardEdit(!addCardEdit)
    },
  })
  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <InputDashboard
          placeholder="Front-end developer en Laboratoria"
          textLabel="Escribe un título"
          value={formik.values.title}
          onChange={formik.handleChange}
          id="title"
          name="title"
          onBlur={formik.handleBlur}
        />
        {formik.touched.title && formik.errors.title ? (
          <Message text={formik.errors.title} />
        ) : null}
        <TextareaDashboard
          placeholder="Bootcamp intensivo en el desarrollo de hábilidades blandas y técnicas para desarrollo web, bajo metodología ágil. Lenguajes: Javascript, HTML5, CSS3."
          textLabel="Describe brebemente tu experiencia"
          size="big"
          value={formik.values.description}
          onChange={formik.handleChange}
          id="description"
          name="description"
          onBlur={formik.handleBlur}
        />
        {formik.touched.description && formik.errors.description ? (
          <Message text={formik.errors.description} />
        ) : null}

        <ContButtons>
          <SaveButton type="submit">Editar</SaveButton>
          <SaveButton
            type="button"
            onClick={() => setAddCardEdit(!addCardEdit)}
          >
            Cancelar
          </SaveButton>
        </ContButtons>
      </Form>
    </Container>
  )
}

export default AddLogros
