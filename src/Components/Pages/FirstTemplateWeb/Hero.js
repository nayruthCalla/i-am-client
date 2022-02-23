import styled from 'styled-components'
import {
  FaGithub,
  FaLinkedin,
  FaRegEnvelopeOpen,
  FaFacebookSquare,
  FaInstagram,
  FaSquarespace,
} from 'react-icons/fa'
// import LinksCompnent from '../../Layouts/LinksRedes'

const Container = styled.section`
  /* margin-top: 31rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem 3rem;
  width: 100%;
  margin-top: 10rem;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row-reverse;
    min-height: 100vh;
    width: 1024px;
  }
`
const ContWlcome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
const ContWlcomeSecond = styled(ContWlcome)`
  width: 100%;
  @media screen and (min-width: 768px) {
    align-items: flex-start;
    /* width: 70%; */
  }
`
const Figure = styled.figure`
  background: transparent;
  border: 3px solid #2bb8da;
  width: 17rem;
  height: 17rem;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  @media screen and (min-width: 768px) {
    width: 30rem;
    height: 30rem;
  }
`
const Image = styled.img`
  width: 15rem;
  height: 15rem;
  background: transparent;
  /* border: 3px solid #2bb8da; */
  box-sizing: border-box;
  background: #120e26;
  border-radius: 50%;
  :hover {
    filter: grayscale(80%);
  }
  @media screen and (min-width: 768px) {
    width: 25rem;
    height: 25rem;
  }
`
const FooterDataContainer = styled.div`
  display: flex;
  gap: 2rem;
  @media screen and (min-width: 768px) {
  }
`

const FooterLink = styled.a`
  text-decoration: none;
  color: #ffffff;
  padding: 5px 0px;
  font-size: 4rem;
  @media screen and (min-width: 768px) {
  }
`
const Welcome = styled.p`
  font-family: var(--font-SpaceM);
  color: #2bb8da;
  font-size: 2rem;
`
const Name = styled.h1`
  font-family: var(--font-SpaceM);
  color: #ffffff;
  font-size: 6rem;

  /* min-width: 40px; */
  white-space: normal;
  text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 75%;
  @media screen and (min-width: 768px) {
    font-size: 8rem;
    width: 50%;
  }
`
const Description = styled(Welcome)`
  max-width: 500px;
  font-size: 1.8rem;
  color: rgb(163, 168, 195);
`
const ButtonContc = styled.button`
  background: #120e26;
  border: 2px solid #2bb8da;
  box-sizing: border-box;
  border-radius: 13px;
  font-family: var(--font-SpaceM);
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 44px;
  padding: 0 1rem;
  color: #2bb8da;
  cursor: pointer;
  :hover {
    background: #2bb8da45;
  }
`

const Hero = ({ photo, links, userName, description }) => {
  // console.log(links)
  const selectLink = (Arrlink) => {
    if (Arrlink.length > 1) {
      const filtLink = Arrlink.filter(
        (e) => e.name === 'github' || e.name === 'linkedin'
      )
      if (filtLink.length > 0) {
        return filtLink
      }
      const sliceLink = Arrlink.slice(0, 2)
      return sliceLink
    }
    return Arrlink
  }
  // console.log(selectLink(links))
  const iconSocialNetwor = (nameIcon, link, i) => {
    if (nameIcon === 'github') {
      return (
        <FooterLink key={i} href={link} target="_blank">
          <FaGithub />
        </FooterLink>
      )
    }
    if (nameIcon === 'linkedin') {
      return (
        <FooterLink key={i} href={link} target="_blank">
          <FaLinkedin />
        </FooterLink>
      )
    }
    if (nameIcon === 'gmail') {
      return (
        <FooterLink
          key={i}
          href={`mailto:${link}?subject=Questions&body=Escribe aquí si tienes preguntas`}
          target="_blank"
        >
          <FaRegEnvelopeOpen />
        </FooterLink>
      )
    }
    if (nameIcon === 'instagram') {
      return (
        <FooterLink key={i} href={link} target="_blank">
          <FaInstagram />
        </FooterLink>
      )
    }
    if (nameIcon === 'facebook') {
      return (
        <FooterLink key={i} href={link} target="_blank">
          <FaFacebookSquare />
        </FooterLink>
      )
    }
    return (
      <FooterLink key={i} href={link} target="_blank">
        <FaSquarespace />
      </FooterLink>
    )
  }
  return (
    <Container id="Home">
      <ContWlcome>
        <Figure>
          <Image src={photo} />
        </Figure>
        <FooterDataContainer>
          {selectLink(links).map((e, i) => iconSocialNetwor(e.name, e.link, i))}
        </FooterDataContainer>
      </ContWlcome>
      <ContWlcomeSecond>
        <Welcome>Bienvenid@ soy</Welcome>
        <Name>{userName}</Name>
        <Description>{description}</Description>
        <ButtonContc>Contáctame</ButtonContc>
      </ContWlcomeSecond>
    </Container>
  )
}

export default Hero
