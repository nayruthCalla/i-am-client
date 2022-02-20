import styled from 'styled-components'
import LinksCompnent from '../../../Layouts/LinksRedes'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 4rem;
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
`

const AboutMeRead = ({ userName, profession, about, interests, links }) => {
  // console.log(links)
  return (
    <Container>
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
      </ContainerAbo>
      <LinksCompnent links={links} />
    </Container>
  )
}

export default AboutMeRead
