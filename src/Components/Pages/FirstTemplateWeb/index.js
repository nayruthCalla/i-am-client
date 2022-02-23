/* eslint-disable no-return-assign */
/* eslint-disable no-constant-condition */
/* eslint-disable react/jsx-no-useless-fragment */
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
import { useGetProfileUser } from './Data/customHooks'

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  margin: 0;
  background: var(--primary-template);
`
const TextFooter = styled.p`
  font-family: Saira;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  color: #a3a8c3;
`
const ContDestop = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const PortflTamplate = () => {
  const { userName } = useParams()
  const { data } = useGetProfileUser(userName)

  return (
    <Container>
      {data?.getProfileUserAbout.length > 0 ? (
        <>
          {data?.getProfileUserAbout.map((e, i) => (
            <div key={i}>
              <Header userName={e.firstName} />
              <ContDestop>
                <Hero
                  photo={user}
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
        </>
      ) : null}
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

      <Footer />

      <TextFooter>© 2022 {userName}</TextFooter>
      <TextFooter>Desarrollado por © 2022 Nayruth Calla - i-Am</TextFooter>
    </Container>
  )
}

export default PortflTamplate
