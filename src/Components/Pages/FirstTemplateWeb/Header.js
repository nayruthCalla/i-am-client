/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { firtsLetter } from './Data/utilis'

const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.5rem 2rem 1.5rem 2rem;
  background: transparent;
  box-shadow: 1px 8px 4px 5px rgba(0, 0, 0, 0.26);
  /* position: fixed; */
  font-size: 1.5rem;
  display: none;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    font-size: 35px;
    line-height: 52px;
  }
`
const ContTitle = styled.div``
const Title = styled.a`
  font-family: var(--font-SpaceM);
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  color: #2bb8da;
`
const Nagitation = styled.nav``
const NagitationMobile = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1.7rem 3rem;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    display: none;
  }
`
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  @media screen and (min-width: 768px) {
    @media screen and (min-width: 1024px) {
      flex-direction: row;
    }
  }
`
const Li = styled.li`
  list-style: none;
  padding: 0 1rem 0 1rem;
  /* border-radius: 2rem; */
  cursor: pointer;
  &:hover {
    /* background: rgba(249, 90, 97, 0.09); */
  }
`

const Link = styled.a`
  text-decoration: none;
  font-family: var(--font-SpaceM);
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 30px;
  color: #ffffff;
  :hover {
    color: #2bb8da;
  }
`
const Span = styled.span`
  color: #2bb8da;
`
const ButtonHamb = styled.button`
  border: none;
  background: transparent;
  font-size: 3.5rem;
  color: #ffffffcf;
  &:hover {
    background: rgba(249, 90, 97, 0.09);
  }
`
const ContHeader = styled.div`
  position: fixed;
  width: 100%;
  box-shadow: 1px 8px 4px 5px rgb(0 0 0 / 26%);
  background: var(--primary-template);
`

const Header = ({ userName }) => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <ContHeader>
      <Container>
        <Link href="#Home">
          <Title>{firtsLetter(userName)}</Title>
        </Link>
        <Nagitation>
          <Ul>
            <Li>
              <Link href="#about">
                <Span>01.</Span> Sobre mí
              </Link>
            </Li>
            <Li>
              <Link href="#proyects">
                <Span>02.</Span> Proyectos
              </Link>
            </Li>
            <Li>
              <Link href="#skills">
                <Span>03.</Span> Skills
              </Link>
            </Li>
            <Li>
              <Link href="#logros">
                <Span>04.</Span> Logros
              </Link>
            </Li>
            <Li>
              <Link href="#contact">
                <Span>05.</Span> Contacto
              </Link>
            </Li>
          </Ul>
        </Nagitation>
      </Container>

      <NagitationMobile>
        <ContTitle>
          <Title>{firtsLetter(userName)}</Title>
        </ContTitle>
        <ButtonHamb onClick={() => setShowMenu(!showMenu)}>
          <FaBars />
        </ButtonHamb>
      </NagitationMobile>
      {showMenu ? (
        <Ul>
          <Li>
            <Link href="#about">
              <Span>01.</Span> Sobre mí
            </Link>
          </Li>
          <Li>
            <Link href="#proyects">
              <Span>02.</Span> Proyectos
            </Link>
          </Li>
          <Li>
            <Link href="#skills">
              <Span>03.</Span> Skills
            </Link>
          </Li>
          <Li>
            <Link href="#logros">
              <Span>04.</Span> Logros
            </Link>
          </Li>
          <Li>
            <Link href="#contact">
              <Span>05.</Span> Contacto
            </Link>
          </Li>
        </Ul>
      ) : null}
    </ContHeader>
  )
}

export default Header
