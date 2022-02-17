/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

import logo from '../../../assets/logoIam.svg'

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.5rem 2rem 1.5rem 2rem;
  background: #ffffff;
  box-shadow: 0px 2px 16px rgba(0, 9, 128, 0.25);
  position: fixed;
`
const Figure = styled.figure`
  width: 10rem;
  margin-bottom: 10px;
`
const Image = styled.img`
  width: 100%;
`
const Nagitation = styled.nav``
const Ul = styled.ul`
  display: flex;
  gap: 2rem;
`
// const Li = styled.li`
//   list-style: none;
//   padding: 0 1rem 0 1rem;
//   border-radius: 2rem;
//   cursor: pointer;
//   &:hover {
//     background: rgba(249, 90, 97, 0.09);
//   }
// `
// const LiSec = styled(Li)`
//   list-style: none;
//   background: var(--color-pink-prim);
//   &:hover {
//     background: #f95a61b8;
//   }
// `
// const Link = styled.a`
//   text-decoration: none;
//   font-family: var(--font-Dongle);
//   font-size: 2.5rem;
//   font-weight: bold;
//   font-style: normal;
//   color: #3e3f3ab8;
// `
// const LinkLogin = styled(Link)`
//   color: #ffffff;
// `
const ButtonLogin = styled.button`
  font-family: var(--font-Dongle);
  font-size: 2.5rem;
  font-weight: bold;
  font-style: normal;
  color: #3e3f3ab8;
  border: none;
  border-radius: 8px;
  background-color: transparent;
  padding: 0 1rem 0 1rem;
  &:hover {
    background: rgba(249, 90, 97, 0.09);
  }
`
const ButtonSign = styled(ButtonLogin)`
  background: var(--color-pink-prim);
  color: #ffffff;
  &:hover {
    background: #f95a61b8;
  }
`
// say

const Header = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()
  const navigate = useNavigate()
  return (
    <Container>
      <Figure onClick={() => navigate('/')}>
        <Image alt="logo-app" src={logo} />
      </Figure>
      <Nagitation>
        <Ul>
          {/* <Li>
            <Link href="#">Iniciar Sesion</Link>
          </Li>
          <LiSec>
            <LinkLogin href="#">Crear Pagina</LinkLogin>
          </LiSec> */}
          {isAuthenticated ? (
            <div>
              <ButtonLogin onClick={() => navigate('/dasboard')}>
                Mi Panel
              </ButtonLogin>
              <ButtonLogin
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Cerrar Sesión
              </ButtonLogin>
            </div>
          ) : (
            <ButtonLogin onClick={() => loginWithRedirect()}>
              Iniciar Sesión
            </ButtonLogin>
          )}
          {isAuthenticated ? (
            <ButtonSign onClick={() => navigate('/portfolio')}>
              Ver mi Página
            </ButtonSign>
          ) : (
            <ButtonSign onClick={() => loginWithRedirect()}>
              Crear Página
            </ButtonSign>
          )}
        </Ul>
      </Nagitation>
    </Container>
  )
}
export default Header
