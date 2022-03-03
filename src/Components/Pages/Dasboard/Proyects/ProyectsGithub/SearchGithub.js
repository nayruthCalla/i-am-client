/* eslint-disable no-shadow */
import styled, { css } from 'styled-components'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FaSearch } from 'react-icons/fa'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'
import { GET_PROYECTS_BY_USERGITHUB } from './querysAndMutations'

// import Message from '../../../../Layouts/MessageError'
// import { useGetProyectbyUserGithub } from './customHooks'

const ContForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  width: 80%;
  @media screen and (min-width: 768px) {
    width: 35rem;
    max-width: 35rem;
  }
  @media screen and (min-width: 1024px) {
  }
`
const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(67, 75, 87, 0.31);
  box-sizing: border-box;
  border-radius: 0.8rem;
  @media screen and (min-width: 768px) {
    /* justify-content: flex-start; */
  }
`

const AddButton = styled.button`
  background: transparent;
  /* border-radius: 50%; */
  border: none;
  padding: 1rem;
  color: #c54646;
  font-size: 2rem;
  align-items: center;
  display: flex;
  cursor: pointer;
  :hover {
    /* background: var(--color-pink-prim); */
  }
`
const Input = styled('input')(
  ({ owner }) => css`
    background: transparent;
    border: ${owner === 'owner' ? '2px solid rgba(67,75,87,0.31)' : 'none'};
    outline: none;
    font-family: var(--font-Dongle);
    font-style: normal;
    font-weight: bold;
    font-size: 2.5rem;
    line-height: 36px;
    padding: 0 1rem;
    text-align: center;
    color: #484747;
    width: 100%;
    border-radius: ${owner === 'owner' ? '0.8rem' : 'none'};
    ::placeholder {
      color: rgba(67, 75, 87, 0.45);
    }
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1024px) {
    }
  `
)

//--------------------------

const SearchProyectGitHub = ({
  setSearchProyect,
  setAddCard,
  setShowProyectGit,
}) => {
  // const [repository] = useGetProyectbyUserGithub()
  const { user } = useAuth0()
  // console.log(user.sub.split('|')[0])

  const formik = useFormik({
    initialValues: {
      nameRepo: '',
      ownerGithub: '',
    },
    validationSchema: Yup.object({
      nameRepo: Yup.string()
        .required(':( Tu nombre y apellido es obligatorio!')
        .min(1, 'Puedes poner tu nombre completo por favor'),
      ownerGithub: Yup.string().min(
        1,
        'Puedes poner tu nombre completo por favor'
      ),
    }),
    onSubmit: async (values) => {
      // console.log(values)
      try {
        const { data } = await axios.post(
          'https://api.github.com/graphql',
          {
            query: GET_PROYECTS_BY_USERGITHUB,
            variables: {
              owner:
                user.sub.split('|')[0] === 'github'
                  ? user.nickname
                  : values.ownerGithub,
              name: values.nameRepo,
              first: 10,
              first1: 10,
            },
          },
          {
            headers: {
              Authorization: process.env.REACT_APP_GITHUB_KEY,
            },
          }
        )
        // console.log(data.data.repository)
        setSearchProyect(data.data.repository)
        formik.values.nameRepo = ''
        setAddCard(false)
        setShowProyectGit(true)
      } catch (e) {
        // console.log(e)
      }
    },
  })

  return (
    <ContForm>
      {user?.sub.split('|')[0] === 'github' ? null : (
        <Input
          placeholder="Nombre de usuario GitHub"
          value={formik.values.ownerGithub}
          onChange={formik.handleChange}
          id="ownerGithub"
          name="ownerGithub"
          onBlur={formik.handleBlur}
          data-test="textName"
          owner="owner"
        />
      )}

      <Container onSubmit={formik.handleSubmit}>
        <AddButton data-test="btnAddLinkSocialNet" type="submit">
          <FaSearch />
        </AddButton>
        <Input
          placeholder="Nombre de tu repositorio en GitHub"
          value={formik.values.nameRepo}
          onChange={formik.handleChange}
          id="nameRepo"
          name="nameRepo"
          onBlur={formik.handleBlur}
          data-test="textName"
        />

        {/* {formik.touched.nameRepo && formik.errors.nameRepo ? (
        <Message text={formik.errors.nameRepo} />
      ) : null} */}
      </Container>
    </ContForm>
  )
}

export default SearchProyectGitHub
