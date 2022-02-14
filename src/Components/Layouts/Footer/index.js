/* eslint-disable jsx-a11y/anchor-is-valid */
import { useMemo } from 'react'
import styled from 'styled-components'
import { FaLinkedin } from 'react-icons/fa'
import { IconContext } from 'react-icons'

import logo from '../../../assets/logoIam.svg'

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: rgba(35, 31, 32, 0.09);
  padding: 2rem;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
`
const ContFooter = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  @media screen and (min-width: 1024px) {
  }
`
const Figure = styled.figure`
  width: 10rem;
  margin-bottom: 10px;
`
const Image = styled.img`
  width: 100%;
`
const Contact = styled.div`
  display: flex;
  align-items: center;
  .icon-linkeind {
    color: var(--color-pink-prim);
    font-size: 2.3rem;
  }
`
const Ul = styled.ul`
  justify-content: center;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
`
const Li = styled.li`
  list-style: none;
  padding: 1rem;
`
const Title = styled.h1`
  font-family: Dongle;
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.61);
  line-height: 5px;
  @media screen and (min-width: 768px) {
    font-size: 4.5rem;
    line-height: 30px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 6.5rem;
    line-height: 60px;
  }
`
const Link = styled.a`
  text-decoration: none;
  font-family: var(--font-Dongle);
  font-size: 2.5rem;
  font-weight: bold;
  font-style: normal;
  color: #3e3f3ab8;
  margin-top: 3px;
`
const Desc = styled.p`
  font-family: var(--font-Dongle);
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 36px;
  display: flex;
  align-items: center;
  text-align: justify;
  color: #3e3f3a;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    max-width: 40rem;
  }
`
const TextFooter = styled(Desc)`
  text-decoration: none;
  font-family: var(--font-Dongle);
  font-size: 2.5rem;
  font-weight: bold;
  font-style: normal;
  color: #3e3f3ab8;
`

// say

const Footer = () => {
  const value = useMemo(() => ({ className: 'icon-linkeind' }))
  return (
    <Container>
      <ContFooter>
        <Ul>
          <Li>
            <Title>Acerca de</Title>
            <Figure>
              <Image alt="logo-app" src={logo} />
            </Figure>
          </Li>
          <Li>
            <Title>Contáctanos</Title>
            <Contact>
              <IconContext.Provider value={value}>
                <FaLinkedin />
              </IconContext.Provider>
              <Link>Nayruth Calla</Link>
            </Contact>
          </Li>
        </Ul>
        <Desc>
          Con i Am , podrás presentarte virtualmente, para que más personas
          conozcan tu perfil, podras compartir el link público a todo el mundo.
        </Desc>
      </ContFooter>

      <TextFooter>i Am 2021 @ Made by NayruthCalla</TextFooter>
    </Container>
  )
}
export default Footer
