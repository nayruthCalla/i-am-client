import styled from 'styled-components'
import * as Yup from 'yup'
import { useFormik } from 'formik'
// import PropTypes from 'prop-types';

// Components FaLinkedin, FaGithub, FaInstagram, FaFacebook
// import { FaPlus } from 'react-icons/fa'
import InputDashboard from '../../../Layouts/InputDashboard'
import Message from '../../../Layouts/MessageError'
import { useAddSkill } from './customHooks'

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
const AddSkill = ({ setAddCard, addCard }) => {
  // const [textLink, setLinkText] = useState([])
  const [addSkill] = useAddSkill()

  const formik = useFormik({
    initialValues: {
      skillName: '',
      // inputLink: '',
      // resultLink: textLink,
    },
    validationSchema: Yup.object({
      skillName: Yup.string()
        .required(':( Escribe el nombre de tu skill!')
        .min(3, 'Puedes poner un nombre más descriptivo'),
    }),
    onSubmit: async (values) => {
      // console.log(values)
      try {
        // // console.log(textLink)
        await addSkill({
          variables: {
            skillName: values.skillName,
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
      setAddCard(!addCard)
    },
  })
  // console.log(addCard)
  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <InputDashboard
          placeholder="Javascript.."
          textLabel="Nombre de Skill"
          value={formik.values.skillName}
          onChange={formik.handleChange}
          id="skillName"
          name="skillName"
          onBlur={formik.handleBlur}
        />
        {formik.touched.skillName && formik.errors.skillName ? (
          <Message text={formik.errors.skillName} />
        ) : null}

        <SaveButton type="submit">Guardar</SaveButton>
      </Form>
    </Container>
  )
}

export default AddSkill
