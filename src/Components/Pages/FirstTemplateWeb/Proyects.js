import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa'
import CardProyect from '../../Layouts/CardProyect'

const Container = styled.section`
  /* margin-top: 31rem; */
  display: flex;
  flex-direction: column;
  justify-content: end;
  /* align-items: center; */
  gap: 2rem;
  padding: 2rem 3rem;
  width: 100%;
  @media screen and (min-width: 768px) {
    min-height: 100vh;
    padding: 2rem 3rem;
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
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1024px) {
  }
`
const ContainerPag = styled(ContainerProyects)`
  flex-direction: row;
`

const ContSectionTitleMenu = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
`
const ButtonPagination = styled(TitleFilter)`
  border: none;
  font-size: 3.5rem;
`
const TextFooter = styled.p`
  font-family: var(--font-SpaceM);
  font-size: 2rem;
  color: #2bb8da;
`

const Proyects = ({ proyects }) => {
  const [typeFilter, setTypeFilter] = useState(proyects)
  const [TwoProyects, setTowProyects] = useState(typeFilter)
  const [showButtonNextandBack, setShowButtonNextandBack] = useState(false)
  const [numberPagination, setNumberPagination] = useState({
    ini: 0,
    fin: 2,
  })

  const filterProyects = (arr, text) => {
    if (text === 'complejo') {
      const difficultProyect = arr.filter((e) => e.level === 'complejo')
      // console.log(difficultProyect)
      setTypeFilter(difficultProyect)
      setNumberPagination({
        ini: 0,
        fin: 2,
      })
    }
    if (text === 'facil') {
      const difficultProyect = arr.filter((e) => e.level === 'facil')
      // console.log(difficultProyect)
      setTypeFilter(difficultProyect)
      setNumberPagination({
        ini: 0,
        fin: 2,
      })
    }
    if (text === 'intermedio') {
      const difficultProyect = arr.filter((e) => e.level === 'intermedio')
      // console.log(difficultProyect)
      setTypeFilter(difficultProyect)
      setNumberPagination({
        ini: 0,
        fin: 2,
      })
    }
    if (text === 'todos') {
      setTypeFilter(proyects)
      setNumberPagination({
        ini: 0,
        fin: 2,
      })
    }
  }

  useEffect(() => {
    if (typeFilter.length > 2) {
      const arr = typeFilter.slice(numberPagination.ini, numberPagination.fin)
      setTowProyects(arr)
      setShowButtonNextandBack(true)
    } else {
      setTowProyects(typeFilter)
      setShowButtonNextandBack(false)
    }
  }, [typeFilter, numberPagination])

  const handleNext = () => {
    setNumberPagination({
      ini: numberPagination.ini + 2,
      fin: numberPagination.fin + 2,
    })
    const arr = typeFilter.slice(numberPagination.ini, numberPagination.fin)
    setTowProyects(arr)
  }
  const handleBack = () => {
    setNumberPagination({
      ini: numberPagination.ini - 2,
      fin: numberPagination.fin - 2,
    })
    const arr = typeFilter.slice(numberPagination.ini, numberPagination.fin)
    setTowProyects(arr)
  }

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
        {TwoProyects?.map((e, i) => (
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
      {showButtonNextandBack ? (
        <ContainerPag>
          <ButtonPagination
            type="button"
            onClick={handleBack}
            disabled={numberPagination.ini === 0}
          >
            <FaAngleDoubleLeft />
          </ButtonPagination>
          <TextFooter>
            {numberPagination.fin > typeFilter.length
              ? numberPagination.fin - 1
              : numberPagination.fin}{' '}
            de {typeFilter.length}{' '}
          </TextFooter>

          <ButtonPagination
            type="button"
            onClick={handleNext}
            disabled={numberPagination.fin >= typeFilter.length}
          >
            <FaAngleDoubleRight />
          </ButtonPagination>
        </ContainerPag>
      ) : null}
    </Container>
  )
}

export default Proyects
