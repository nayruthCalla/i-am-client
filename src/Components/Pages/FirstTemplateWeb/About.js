// import { useMemo } from 'react'
// import { IconContext } from 'react-icons'
import styled from 'styled-components'

import {
  // FaGithub,
  // FaLinkedin,
  // FaRegEnvelopeOpen,
  FaChevronRight,
  FaLink,
} from 'react-icons/fa'
import LinksCompnent from '../../Layouts/LinksRedes'

const Container = styled.section`
  /* margin-top: 31rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  gap: 2rem;
  padding: 2rem 3rem;
  @media screen and (min-width: 768px) {
    min-height: 100vh;
    padding: 2rem 8rem;
  }
`

const ContSectionTitle = styled.div``
const SectionTitle = styled.h2`
  font-family: var(--font-SpaceM);
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;
  line-height: 59px;
  color: #ffffff;
  :hover {
    color: #2bb8da;
  }
`
const Span = styled.span`
  color: #2bb8da;
`
const Line = styled.div`
  background: rgba(43, 184, 218, 0.5);
  width: 100%;
  height: 2px;
`
const Greet = styled.p`
  font-family: var(--font-SpaceM);
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 37px;
  color: #ffffff;
  white-space: normal;
`
const AboutMe = styled(Greet)`
  color: rgb(163, 168, 195);
  font-size: 1.8rem;
  margin: 0.5rem 0px;
  font-style: normal;
  font-weight: normal;
  line-height: 27px;
`
const Characts = styled(AboutMe)`
  font-size: 1.5rem;
`
const TitleSocialNet = styled(Greet)`
  color: rgb(171 171 173);
`
const FooterDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

// const FooterLink = styled.a`
//   font-family: var(--font-SpaceM);
//   font-style: normal;
//   font-weight: normal;
//   font-size: 1.8rem;
//   line-height: 37px;
//   color: rgba(204, 204, 204, 0.77);
//   background: #000000;
//   width: fit-content;
//   padding: 0 1.5rem;
//   display: flex;
//   gap: 1rem;
//   align-items: center;
//   :hover {
//     color: #2bb8da;
//   }
//   .icon {
//     color: #ffffffba;
//     font-size: 2rem;
//   }
//   @media screen and (min-width: 768px) {
//     padding: 0px 20px;
//   }
// `

const About = ({ links, aboutMe, firstChractr }) => {
  // const value = useMemo(() => ({ className: 'icon' }))
  return (
    <Container id="about">
      <ContSectionTitle>
        <SectionTitle>
          <Span>01.</Span> Sobre mí
        </SectionTitle>
        <Line />
      </ContSectionTitle>
      <Greet>Hola 👋</Greet>
      <AboutMe>{aboutMe}</AboutMe>
      <Characts>
        <FaChevronRight />
        {firstChractr}
      </Characts>

      <TitleSocialNet>
        <FaLink />
        Contáctame conmingo
      </TitleSocialNet>
      <FooterDataContainer>
        <LinksCompnent links={links} />
        {/* <FooterLink href={linkGit}>
          <IconContext.Provider value={value}>
            <FaRegEnvelopeOpen />
          </IconContext.Provider>
          Email
        </FooterLink>
        <FooterLink href={linkGit}>
          <IconContext.Provider value={value}>
            <FaGithub />
          </IconContext.Provider>
          GitHub
        </FooterLink>
        <FooterLink href={linkLinke}>
          <IconContext.Provider value={value}>
            <FaLinkedin />
          </IconContext.Provider>
          LinkedIn
        </FooterLink> */}
      </FooterDataContainer>
    </Container>
  )
}

export default About
