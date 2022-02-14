/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components'
import Hero from './Hero'
import linkMain from '../../../assets/link.svg'
import happy from '../../../assets/happy.svg'
import rrss from '../../../assets/rrss.svg'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  margin 8rem 0;
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
  margin 3rem 0;
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
  @media screen and (min-width: 768px) {
    /* width: auto; */
  @media screen and (min-width: 1024px) {
  }
`
const Image = styled.img`
  width: 100%;
`

const Landing = () => {
  return (
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
  )
}

export default Landing
