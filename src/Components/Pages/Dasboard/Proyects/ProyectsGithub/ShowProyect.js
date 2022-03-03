/* eslint-disable no-return-assign */
/* eslint-disable no-shadow */
import styled from 'styled-components'
import { FaPlus } from 'react-icons/fa'
import { useAddProyects } from '../customHooks'
import Message from '../../../../Layouts/MessageError'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid rgb(67 75 87 / 23%);
  border-radius: 8px;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    max-width: 54rem;
  }
`
const TitleText = styled.p`
  font-family: Dongle;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  color: rgba(67, 75, 87, 0.94);
  text-align: left;
`
const Title = styled.p`
  font-family: var(--font-saira);
  font-style: normal;
  font-weight: 500;
  color: #a3a8c3;
  white-space: normal;
  font-size: 17px;
`
const AddButton = styled.button`
  background: transparent;
  color: #c54646;
  width: fit-content;
  border: none;
  padding: 1rem;
  font-size: 1.8rem;
  display: flex;
  border-radius: 0.8rem;
  width: auto;
  cursor: pointer;
  justify-content: center;
  :hover {
    color: var(--hover-dasb);
  }
  @media screen and (min-width: 768px) {
    /* width: 35rem; */
    /* max-width: 35rem; */
  }
  @media screen and (min-width: 1024px) {
  }
`

//--------------------------

const ShowProyectGH = ({ searchProyect, setShowProyectGit }) => {
  const [AddProyect] = useAddProyects()

  // console.log(searchProyect)
  const addProyectByGithub = async () => {
    let lenguages = ''
    let level = ''
    searchProyect.languages.edges.forEach((element) => {
      // const porct = parseFloat(
      //   (element.size * 100) / searchProyect.languages.totalSize
      // ).toFixed(2)  ${porct}%
      lenguages += `${element.node.name}, `
      if (searchProyect.languages.totalSize > 216161) {
        level = 'complejo'
      } else if (searchProyect.languages.totalSize <= 216161) {
        level = 'intermedio'
      } else {
        level = 'facil'
      }
    })
    // console.log(lenguages, level)
    try {
      // console.log(textLink)
      await AddProyect({
        variables: {
          proyectName: searchProyect?.name,
          description:
            searchProyect.description === null ? '' : searchProyect.description,
          techFirst: lenguages,
          techSecond: '',
          level,
          links: [
            {
              name: 'Demo',
              link:
                searchProyect.homepageUrl === null
                  ? ''
                  : searchProyect.homepageUrl,
            },
            {
              name: 'Repo',
              link: searchProyect.url === null ? '' : searchProyect.url,
            },
          ],
        },
      })
      setShowProyectGit(false)
      // console.log(setShowProyectGit)
    } catch (e) {
      // console.log(e)
    }
  }
  // console.log(searchProyect)
  if (!searchProyect) {
    return <Message text="Ups! El repositorio no existe :(" />
  }
  return (
    <Container>
      {/* <FaGithub /> */}
      <TitleText>{searchProyect?.name}</TitleText>
      <Title>{searchProyect?.description}</Title>
      <AddButton data-test="btnAddProyect" onClick={addProyectByGithub}>
        <FaPlus />
        Añadir Proyecto
      </AddButton>
    </Container>
  )
}

export default ShowProyectGH
