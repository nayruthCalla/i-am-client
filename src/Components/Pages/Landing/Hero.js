/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components'

import phono from '../../../assets/phone.svg'
import share from '../../../assets/share.svg'
import link from '../../../assets/link-main.svg'

const Container = styled.section`
  display: flex;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1024px) {
    justify-content: space-between;
    width: 100%;
    padding: 4.5rem 0;
    align-items: center;
  }
`
const Figure = styled.figure`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
  @media screen and (min-width: 1024px) {
  }
`
const FigureMobile = styled.figure`
  width: 90%;
  margin-top: 60px;
  @media screen and (min-width: 768px) {
    width: auto;
  }
  @media screen and (min-width: 1024px) {
  }
`
const Image = styled.img`
  width: 100%;
`
const Main = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 60px;
  margin-left: 30px;
  @media screen and (min-width: 768px) {
    width: 65%;
  }
  @media screen and (min-width: 1024px) {
    width: 40%;
  }
`
const Title = styled.h1`
  font-family: var(--font-Dongle);
  font-style: normal;
  font-weight: bold;
  font-size: 4.5rem;
  line-height: 40px;
  color: rgba(0, 0, 0, 0.2);
  @media screen and (min-width: 768px) {
    font-size: 4.5rem;
    line-height: 30px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 6.5rem;
    line-height: 60px;
  }
`
const Button = styled.button`
  padding: 0 1rem 0 1rem;
  border-radius: 8px;
  width: 70%;
  background: var(--color-pink-prim);
  font-family: var(--font-Dongle);
  font-size: 2.5rem;
  font-weight: bold;
  font-style: normal;
  color: #ffffff;
  border: none;
  cursor: pointer;
  &:hover {
    background: #f95a61b8;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
  }
  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`

// say g

const Hero = () => {
  return (
    <Container>
      <Figure>
        <Image alt="logo-app" src={phono} />
      </Figure>
      <Main>
        <Title>Deja que tu portafolio web Hable por tí</Title>
        <Figure>
          <Image alt="logo-app" src={link} />
        </Figure>
        <Button>Crear Pagina</Button>
      </Main>
      <FigureMobile>
        <Image alt="logo-app" src={share} />
      </FigureMobile>
    </Container>
  )
}

export default Hero
