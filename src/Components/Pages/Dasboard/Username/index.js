/* eslint-disable react/jsx-no-useless-fragment */
import styled from 'styled-components'
import Swal from 'sweetalert2'
import { useFormik } from 'formik'
import { useAuth0 } from '@auth0/auth0-react'
import * as Yup from 'yup'
import { FaPlus } from 'react-icons/fa'
import InputDashboard from '../../../Layouts/InputDashboard'
import Message from '../../../Layouts/MessageError'
import { useEditUser, useGetUserAbout } from './customHooks'
import sad from '../../../../assets/sad.gif'
import correct from '../../../../assets/correct.gif'

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
`
const ContainerUsername = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  padding: 0 4rem 3rem 4rem;
  width: 50%;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
`

// const Image = styled.img``
const AddButton = styled.button`
  background: #c54646;
  border: none;
  padding: 1rem;
  color: #f6f6f9;
  font-size: 1.8rem;
  align-items: center;
  display: flex;
  border-radius: 0.8rem;
  gap: 1rem;
  width: 100%;
  max-width: 25rem;
  justify-content: center;
  cursor: pointer;
  :hover {
    background: var(--hover-dasb);
  }
`
const P = styled.p`
  font-family: var(--font-Dongle);
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 43px;
  color: rgb(67 75 87 / 68%);
  text-align: center;
`

const Username = () => {
  const [updateUser] = useEditUser()
  const { user } = useAuth0()
  const { data } = useGetUserAbout()

  const formik = useFormik({
    initialValues: {
      usernameUnique: '',
    },
    validationSchema: Yup.object({
      usernameUnique: Yup.string()
        .required(':( Tu nombre de usuario es y obligatorio!')
        .min(4, 'Puedes poner un nombre que te identifique mejor'),
    }),
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      try {
        // console.log(textLink)
        const dataUpdate = await updateUser({
          variables: {
            name: user.name,
            nickname: user.nickname,
            email: user.name,
            userName: values.usernameUnique,
          },
        })
        if (dataUpdate.data.updateUser) {
          Swal.fire({
            title: 'Excelente!',
            text: 'Tus datos se guardarón exitosamente!',
            imageUrl: `${correct}`,
            imageWidth: 300,
            confirmButtonColor: '#f95a61',
            imageAlt: 'Custom image',
          })
        }
      } catch (e) {
        Swal.fire({
          title: 'Ups :(',
          text: 'Otra persona ya tine ese nombre, deberas cambiar',
          imageUrl: `${sad}`,
          imageWidth: 300,
          confirmButtonColor: '#f95a61',
          imageAlt: 'Custom image',
        })
      }
    },
  })
  //   console.log(data, loading, error)
  return (
    <Container onSubmit={formik.handleSubmit}>
      {data?.getUserByIdAbout.length > 0 ? (
        <>
          {data?.getUserByIdAbout.map((e, i) => (
            <div key={i}>
              {e.userName === 'undefined' ? (
                <>
                  <ContainerUsername>
                    <InputDashboard
                      placeholder="Este nombre se verá en la url de portafolio"
                      textLabel="Agrega tu Nombre de usuario para tener tu Link"
                      value={formik.values.usernameUnique}
                      onChange={formik.handleChange}
                      id="usernameUnique"
                      name="usernameUnique"
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.usernameUnique &&
                    formik.errors.usernameUnique ? (
                      <Message text={formik.errors.usernameUnique} />
                    ) : null}
                  </ContainerUsername>
                  <AddButton type="submit">
                    <FaPlus />
                    Añadir mi nombre
                  </AddButton>
                </>
              ) : (
                <P>https://iAm.netlify.com/{e.userName}</P>
              )}
            </div>
          ))}
        </>
      ) : null}
    </Container>
  )
}

export default Username
