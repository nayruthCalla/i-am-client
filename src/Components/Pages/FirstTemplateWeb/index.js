/* eslint-disable no-return-assign */
/* eslint-disable no-constant-condition */
/* eslint-disable react/jsx-no-useless-fragment */
import { useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Proyects from './Proyects'
import Skills from './Skills'
import Logros from './Logros'
import Footer from './Footer'
import user from '../../../assets/user.gif'
import error from '../../../assets/errorprof.png'
import { useGetProfileUser } from './Data/customHooks'
import loading from '../../../assets/loading.gif'

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  margin: 0;
  background: var(--primary-template);
  padding-bottom: 1.6rem;
`
const ContainerError = styled(Container)`
  align-items: center;
  justify-content: center;
`

const TextLink = styled.a`
  font-family: Saira;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  color: #a3a8c3;
  text-decoration: none;
`
const ContDestop = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Image = styled.img`
  width: 30rem;
`
const Text = styled.p`
  font-family: var(--font-SpaceM);
  color: #ffffff61;
  font-size: 2rem;
  padding: 2rem;
`

const ImageLoading = styled.img`
  width: 35rem;
  display: flex;
  align-self: center;
  justify-self: center;
  flex: 1;
  @media screen and (min-width: 768px) {
    width: 50rem;
  }
`
const PortflTamplate = () => {
  const { userName } = useParams()
  const { data } = useGetProfileUser(userName)

  useEffect(() => {
    // localStorage.clear()
  }, [userName])

  if (userName === 'undefined') {
    return (
      <ContainerError>
        <Image src={error} alt="error" />
        <Text>
          Necesitas crear tu nombre de usuario para obtener tu portafolio web :)
        </Text>
      </ContainerError>
    )
  }
  return (
    <Container>
      {data?.getProfileUserAbout.length > 0 ? (
        <>
          {data?.getProfileUserAbout.map((e, i) => (
            <div key={i}>
              <Header userName={e.firstName} />
              <ContDestop>
                <Hero
                  photo={e.photo === '' ? user : e.photo}
                  linkGit="https://www.linkedin.com/"
                  linkLinke="https://www.linkedin.com/"
                  userName={e.firstName}
                  description={e.profession}
                  links={e.socialNetworks}
                />
                <About
                  aboutMe={e.aboutMeText}
                  firstChractr={e.interests}
                  links={e.socialNetworks}
                />
              </ContDestop>
            </div>
          ))}
          <ContDestop>
            {data?.getProfileUserProyect.length > 0 ? (
              <Proyects proyects={data?.getProfileUserProyect} />
            ) : null}
            {data?.getProfileUserSkill.length > 0 ? (
              <Skills skills={data?.getProfileUserSkill} />
            ) : null}
            {data?.getProfileUserLogros.length > 0 ? (
              <Logros logros={data?.getProfileUserLogros} />
            ) : null}
          </ContDestop>
          {data?.getProfileUserAbout.length > 0 ? (
            <Footer dataUser={data?.getProfileUserAbout} />
          ) : null}
        </>
      ) : (
        <ImageLoading src={loading} alt="loading" />
      )}

      <TextLink href="https://iamp.netlify.app/">
        Desarrollado por ?? 2022 Nayruth Calla - i-Am
      </TextLink>
      <TextLink href="https://jrgarciadev.com/">
        Adapted from the Junior Garc??a Portfolio
      </TextLink>
    </Container>
  )
}
export default PortflTamplate
