/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react'
import { gql, useMutation } from '@apollo/client'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'
import Hero from './Hero'
import linkMain from '../../../assets/link.svg'
import happy from '../../../assets/happy.svg'
import rrss from '../../../assets/rrss.svg'
import Footer from '../../Layouts/Footer'
import Header from '../../Layouts/Header'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
  margin-top: 10rem;
`
const ContImages = styled.article`
  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
  }
  @media screen and (min-width: 1024px) {
  }
`
const Title = styled.h1`
  font-family: Dongle;
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.61);
  margin: 8rem 0;
  @media screen and (min-width: 768px) {
    font-size: 4.5rem;
    line-height: 30px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 6.5rem;
    line-height: 60px;
  }
`
const ContImg = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 3rem 0;
`
const TitleImg = styled(Title)`
  font-size: 2rem;
  margin: 0;
  @media screen and (min-width: 768px) {
    line-height: 20px;
  }
  @media screen and (min-width: 1024px) {
  }
`
const Figure = styled.figure`
  width: 65%;
`
const Image = styled.img`
  width: 100%;
`
// graphql
// const GET_USERS = gql`
//   query Query {
//     getUsers {
//       fullName
//       userName
//       id
//       email
//     }
//   }
// `
const ADD_USER = gql`
  mutation Mutation($name: String, $nickname: String!, $email: String) {
    addUser(name: $name, nickname: $nickname, email: $email) {
      token
    }
  }
`

const Landing = () => {
  const { user, isAuthenticated } = useAuth0()
  const [addUser] = useMutation(ADD_USER)
  // console.log(client)
  useEffect(async () => {
    if (isAuthenticated) {
      try {
        const { data } = await addUser({
          variables: {
            name: user.name,
            nickname: user.nickname,
            email: user.name,
          },
        })

        const { token } = data.addUser
        localStorage.setItem('token', token)
      } catch (e) {
        // console.log('errores', e)
      }
    }
  }, [user])
  return (
    <>
      <Header />
      <Container>
        <Hero />
        <Title>Todas las funciones que necesitas</Title>
        <ContImages>
          <ContImg>
            <Figure>
              <Image alt="logo-app" src={linkMain} />
              <TitleImg>Comparte el link de tu portafolio web</TitleImg>
            </Figure>
          </ContImg>
          <ContImg>
            <Figure>
              <Image alt="logo-app" src={happy} />
              <TitleImg>Agregar tus skills, esperiencia laboralb</TitleImg>
            </Figure>
          </ContImg>
          <ContImg>
            <Figure>
              <Image alt="logo-app" src={rrss} />
              <TitleImg>
                CAgrega tus Redes sociales para que se contacten
              </TitleImg>
            </Figure>
          </ContImg>
        </ContImages>
      </Container>
      <Footer />
    </>
  )
}

export default Landing
