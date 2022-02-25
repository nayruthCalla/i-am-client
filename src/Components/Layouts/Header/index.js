/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import styled from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { useGetUserAbout } from '../../Pages/Dasboard/Username/customHooks'

import logo from '../../../assets/logoIam.svg'

const Container = styled.header`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1.5rem 2rem 1.5rem 2rem;
    background: #ffffff;
    box-shadow: 0px 2px 16px rgba(0, 9, 128, 0.25);
    position: fixed;
  }
  @media screen and (min-width: 1024px) {
  }
`
const Figure = styled.figure`
  width: 10rem;
  margin-left: 30px;
`
const Image = styled.img`
  width: 100%;
  margin-bottom: 10px;
`
const Nagitation = styled.nav``
const Ul = styled.ul`
  display: flex;
  gap: 2rem;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
`
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
const Cont = styled.div``
const ContMenu = styled.div`
  background: #f95a61;
  position: fixed;
  width: 100%;
  margin-top: 71px;
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1024px) {
  }
`
const FigureNav = styled.figure`
  width: 10rem;
`
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 3.5rem;
  padding: 0 2rem;
  color: #998f8f;
  position: fixed;
  width: 100%;
  background: #fff;
  box-shadow: 0px 2px 16px rgba(0, 9, 128, 0.25);
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1024px) {
  }
`
const ButtonHamb = styled.button`
  border: none;
  background: transparent;
  font-size: 3.5rem;
  color: #998f8f;
  &:hover {
    background: rgba(249, 90, 97, 0.09);
  }
`
const ButtonMobile = styled(ButtonLogin)`
  font-size: 3.5rem;
  color: #fff;
`

const MenuHamb = styled('div')`
  background: #f95a61;
  display: flex;
  flex-direction: column;
`
const ContColumn = styled('div')`
  display: flex;
  flex-direction: column;
`

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()
  const { data } = useGetUserAbout()
  const navigate = useNavigate()
  const logoutSess = () => {
    logout({ returnTo: window.location.origin })
    localStorage.clear()
  }

  return (
    <Cont>
      <Container>
        <Figure onClick={() => navigate('/')}>
          <Image alt="logo-app" src={logo} />
        </Figure>
        <Nagitation>
          <Ul>
            {isAuthenticated ? (
              <div>
                <ButtonLogin onClick={() => navigate('/dashboard')}>
                  Mi Panel
                </ButtonLogin>
                <ButtonLogin onClick={logoutSess}>Cerrar Sesión</ButtonLogin>
              </div>
            ) : (
              <ButtonLogin onClick={() => loginWithRedirect()}>
                Iniciar Sesión
              </ButtonLogin>
            )}
            {isAuthenticated ? (
              <>
                {data?.getUserByIdAbout.length > 0 ? (
                  <>
                    {data?.getUserByIdAbout.map((e, i) => (
                      <ButtonSign
                        key={i}
                        onClick={() => navigate(`/ia/${e.userName}`)}
                      >
                        Ver mi Página
                      </ButtonSign>
                    ))}
                  </>
                ) : null}
              </>
            ) : (
              <ButtonSign onClick={() => loginWithRedirect()}>
                Crear Página
              </ButtonSign>
            )}
          </Ul>
        </Nagitation>
      </Container>
      <Div>
        <FigureNav onClick={() => navigate('/')}>
          <Image alt="logo-app" src={logo} />
        </FigureNav>
        <ButtonHamb onClick={() => setShowMenu(!showMenu)}>
          <FaBars />
        </ButtonHamb>
      </Div>
      <ContMenu>
        {showMenu ? (
          <MenuHamb>
            <ButtonMobile onClick={() => navigate('/')}>Inicio</ButtonMobile>
            {isAuthenticated ? (
              <ContColumn>
                <ButtonMobile onClick={() => navigate('/dashboard')}>
                  Mi Panel
                </ButtonMobile>
                <ButtonMobile onClick={logoutSess}>Cerrar Sesión</ButtonMobile>
              </ContColumn>
            ) : (
              <ButtonMobile onClick={() => loginWithRedirect()}>
                Iniciar Sesión
              </ButtonMobile>
            )}
            {isAuthenticated ? (
              <>
                {data?.getUserByIdAbout.length > 0 ? (
                  <>
                    {data?.getUserByIdAbout.map((e, i) => (
                      <ButtonMobile
                        key={i}
                        onClick={() => navigate(`/ia/${e.userName}`)}
                      >
                        Ver mi Página
                      </ButtonMobile>
                    ))}
                  </>
                ) : null}
              </>
            ) : (
              <ButtonMobile onClick={() => loginWithRedirect()}>
                Crear Página
              </ButtonMobile>
            )}
          </MenuHamb>
        ) : null}
      </ContMenu>
    </Cont>
  )
}
export default Header
