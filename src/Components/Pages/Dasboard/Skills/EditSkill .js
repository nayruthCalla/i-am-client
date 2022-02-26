import styled from 'styled-components'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import InputDashboard from '../../../Layouts/InputDashboard'
import Message from '../../../Layouts/MessageError'
import { useEditSkill } from './customHooks'

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

const EditSkill = ({ dataEdited, setAddCardEdit, addCardEdit }) => {
  // const [textLink, setLinkText] = useState([])
  const [updateSkill] = useEditSkill()

  const formik = useFormik({
    initialValues: {
      skillName: dataEdited.skillName,
      // inputLink: '',
      // resultLink: textLink,
    },
    validationSchema: Yup.object({
      skillName: Yup.string()
        .required(':( Escribe el nombre de tu skill!')
        .min(3, 'Puedes poner un nombre más descriptivo'),
    }),
    onSubmit: async (values) => {
      // console.log(values.skillName)
      try {
        // // console.log(textLink)
        await updateSkill({
          variables: {
            updateSkillId: dataEdited.id,
            skillName: values.skillName,
          },
        })
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

export default EditSkill
