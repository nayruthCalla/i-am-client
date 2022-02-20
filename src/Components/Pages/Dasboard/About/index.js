import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FaEllipsisH } from 'react-icons/fa'
import CreateAbout from './CreateAbout'
// import Editd from './EditedAbout'
// import { getUserCurrent } from '../../User/customHooks'
import { useAboutMe } from './customHooks'
import AboutRead from './AboutMe'

const P = styled.p`
  font-family: var(--font-Dongle);
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 43px;
  color: rgb(67 75 87 / 68%);
  text-align: center;
`
const ButtonRed = styled.button`
  background: transparent;
  /* border-radius: 50%; */
  border: 3px;
  border-radius: 3px;
  border: none;
  padding: 1rem;
  color: #c54646;
  width: 17%;
  font-size: 1.8rem;
  align-items: center;
  display: flex;
  padding: 0.1rem 1.5rem;
  width: fit-content;
  cursor: pointer;
  :hover {
    background: #e7dbe7;
  }
`
const ContentMore = styled.div`
  display: flex;
  gap: 1.3rem;
  justify-content: center;
  align-items: center;
`
const ButtonMore = styled.button`
  font-family: var(--font-Dongle);
  font-style: normal;
  font-size: 30px;
  line-height: 43px;
  color: #8b8080;
  text-align: center;
  border: none;
  background: transparent;
  border-radius: 3px;
  padding: 0 1rem;
  cursor: pointer;
  :hover {
    background: #e7dbe7;
  }
`
const ContMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem;
`
// const Container = styled('article')(
//   ({ colorBtn }) => css`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     width: 100%;
//     max-width: ${colorBtn === 'dasboard' ? '35rem' : '40rem'};
//     padding: 2rem;
//     background-color: transparent;
//     /* background: #ffffff; */
//     border: ${colorBtn === 'dasboard'
//       ? '1px solid rgba(143, 3, 3, 0.35)'
//       : '2px solid rgba(43, 184, 218, 0.5)'};
//     box-sizing: border-box;
//     border-radius: 8px;
//     @media screen and (min-width: 768px) {
//     }
//     @media screen and (min-width: 1024px) {
//       min-width: 35rem;
//     }
//   `
// )

const AboutMe = () => {
  const [more, setMore] = useState(false)
  const [showCont, setShowCont] = useState(true)
  const { data, error } = useAboutMe()
  const [dataAboutM] = useState({
    firstName: '',
    profession: '',
    aboutMeText: '',
    interests: '',
    resultLink: [],
  })

  //   const [dataUser, setDataUser] = useState({ getUser: { userName: '' } })
  //   const [dataAbout, setDataAbout] = useState({})
  // const { data } = getUserCurrent()
  //   const [GetAboutMeByUserName, result] = useAboutByUserName()
  // console.log(data)
  const handleMore = () => {
    setMore(!more)
    // console.log(more)
  }
  //   console.log(data)
  useEffect(() => {
    // setDataAboutM(data.getAboutMe)
  }, [data])

  const edited = async () => {
    try {
      //   const resp = await GetAboutMeByUserName({
      //     variables: { userName: data.getUser.userName },
      //   })
      //   setDataAbout(resp.data.getAboutMeByUserName)
    } catch (e) {
      // console.log(e)
    }
  }
  //   console.log(dataAbout, dataUser)
  return (
    <div>
      <ContMore>
        <ButtonRed type="button" onClick={handleMore}>
          <FaEllipsisH />
        </ButtonRed>
        <P>Sobre mí</P>
      </ContMore>
      {more ? (
        <ContentMore>
          <ButtonMore type="button" onClick={edited}>
            Editar
          </ButtonMore>
          <ButtonMore type="button">Eliminar</ButtonMore>
        </ContentMore>
      ) : null}
      {Object.keys(dataAboutM).length !== 0 ? (
        <AboutRead
          userName={dataAboutM.firstName}
          profession={dataAboutM.profession}
          about={dataAboutM.aboutMeText}
          interests={dataAboutM.interests}
          links={dataAboutM.links}
        />
      ) : (
        error
      )}
      <CreateAbout showCont={showCont} setShowCont={setShowCont} />
    </div>
  )
}

export default AboutMe
