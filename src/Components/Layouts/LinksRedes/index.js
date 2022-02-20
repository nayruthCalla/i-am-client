import { useMemo } from 'react'
import { IconContext } from 'react-icons'
import styled from 'styled-components'
import {
  FaGithub,
  FaLinkedin,
  FaRegEnvelopeOpen,
  FaFacebookSquare,
  FaInstagram,
  FaSquarespace,
} from 'react-icons/fa'

const FooterDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const FooterLink = styled.a`
  font-family: var(--font-SpaceM);
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 37px;
  color: rgba(204, 204, 204, 0.77);
  background: #000000;
  width: fit-content;
  padding: 0 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  :hover {
    color: #2bb8da;
  }
  .icon {
    color: #ffffffba;
    font-size: 2rem;
  }
  p:first-letter {
    text-transform: uppercase;
  }
  @media screen and (min-width: 768px) {
    padding: 0px 20px;
  }
`

const About = ({ links }) => {
  const value = useMemo(() => ({ className: 'icon' }))
  const iconSocialNetwor = (nameIcon) => {
    if (nameIcon === 'github') {
      return <FaGithub />
    }
    if (nameIcon === 'linkedin') {
      return <FaLinkedin />
    }
    if (nameIcon === 'gmail') {
      return <FaRegEnvelopeOpen />
    }
    if (nameIcon === 'instagram') {
      return <FaInstagram />
    }
    if (nameIcon === 'facebook') {
      return <FaFacebookSquare />
    }
    return <FaSquarespace />
  }
  return (
    <FooterDataContainer>
      {links.map((e, i) => (
        <FooterLink key={i} href={e.link} target="_blank">
          <IconContext.Provider value={value}>
            {iconSocialNetwor(e.name)}
          </IconContext.Provider>
          <p>{e.name}</p>
        </FooterLink>
      ))}
    </FooterDataContainer>
  )
}

export default About
