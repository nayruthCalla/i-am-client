import styled from 'styled-components'
import LinksCompnent from '../../../Layouts/LinksRedes'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 4rem;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`
const Title = styled.p`
  font-family: var(--font-saira);
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 47px;
  color: #a3a8c3;
  white-space: normal;
`
const Description = styled.p`
  font-family: var(--font-saira);
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 24px;
  text-align: justify;
  white-space: normal;
  color: #a3a8c3;
`
const TitleText = styled.p`
  font-family: Dongle;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 36px;
  color: rgba(67, 75, 87, 0.94);
  text-align: left;
`
const ContainerAbo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    max-width: 54rem;
  }
`
const FigurePrevw = styled.figure`
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
const ImagePrevw = styled.img`
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

const AboutMeRead = ({
  userName,
  profession,
  about,
  interests,
  links,
  photo,
}) => {
  // console.log(photo, links)
  return (
    <Container>
      <FigurePrevw>
        <ImagePrevw src={photo} />
      </FigurePrevw>
      <ContainerAbo>
        <TitleText>Mi Nombre:</TitleText>
        <Title>{userName}</Title>
        <TitleText>Ocupación:</TitleText>
        <Description>{profession}</Description>
        <TitleText>Sobre mí:</TitleText>
        <Description>{about}</Description>
        <TitleText>Que me interesa:</TitleText>
        <Description>{interests}</Description>
        <TitleText>Mis Redes Sociales:</TitleText>
        <LinksCompnent links={links} />
      </ContainerAbo>
    </Container>
  )
}

export default AboutMeRead
