import { useEffect, useState } from 'react'
import styled from 'styled-components'
import CardProyect from '../../Layouts/CardProyect'

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
  }
  @media screen and (min-width: 1024px) {
    width: 1024px;
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
const TitleFilter = styled.button`
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

const Span = styled.span`
  color: #2bb8da;
`
const Line = styled.div`
  background: rgba(43, 184, 218, 0.5);
  width: 100%;
  height: 2px;
`
const ContainerProyects = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1024px) {
  }
`
const ContSectionTitleMenu = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
`

const Proyects = ({ proyects }) => {
  const [typeFilter, setTypeFilter] = useState(proyects)

  const filterProyects = (arr, text) => {
    if (text === 'complejo') {
      const difficultProyect = arr.filter((e) => e.level === 'complejo')
      // console.log(difficultProyect)
      setTypeFilter(difficultProyect)
    }
    if (text === 'facil') {
      const difficultProyect = arr.filter((e) => e.level === 'facil')
      // console.log(difficultProyect)
      setTypeFilter(difficultProyect)
    }
    if (text === 'intermedio') {
      const difficultProyect = arr.filter((e) => e.level === 'intermedio')
      // console.log(difficultProyect)
      setTypeFilter(difficultProyect)
    }
    if (text === 'todos') {
      setTypeFilter(proyects)
    }
  }
  useEffect(() => {}, [])
  // console.log(typeFilter)
  return (
    <Container id="proyects">
      <ContSectionTitle>
        <SectionTitle>
          <Span>02.</Span> Mis Proyectos
        </SectionTitle>
        <Line />
      </ContSectionTitle>
      <ContSectionTitleMenu>
        <TitleFilter
          onClick={() => {
            filterProyects(proyects, 'todos')
          }}
        >
          Todos
        </TitleFilter>
        <TitleFilter
          onClick={() => {
            filterProyects(proyects, 'complejo')
          }}
        >
          Complejo
        </TitleFilter>
        <TitleFilter
          onClick={() => {
            filterProyects(proyects, 'intermedio')
          }}
        >
          Intermedio
        </TitleFilter>
        <TitleFilter
          onClick={() => {
            filterProyects(proyects, 'facil')
          }}
        >
          Fácil
        </TitleFilter>
      </ContSectionTitleMenu>

      <ContainerProyects>
        {typeFilter?.map((e, i) => (
          <CardProyect
            key={i}
            colorBtn="template"
            title={e.proyectName}
            description={e.description}
            techFirst={e.techFirst}
            techSecond={e.techSecond}
            level={e.level}
            links={e.links}
          />
        ))}
      </ContainerProyects>
    </Container>
  )
}

export default Proyects
