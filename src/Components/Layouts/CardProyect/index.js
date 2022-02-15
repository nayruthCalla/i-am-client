import { useMemo } from 'react'
import styled, { css } from 'styled-components'
import {
  FaFolderMinus,
  FaExternalLinkAlt,
  FaGithub,
  FaFireAlt,
} from 'react-icons/fa'
import { IconContext } from 'react-icons'

const Container = styled('article')(
  ({ colorBtn }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: ${colorBtn === 'dasboard' ? '35rem' : '40rem'};
    padding: 2rem;
    background-color: transparent;
    /* background: #ffffff; */
    border: ${colorBtn === 'dasboard'
      ? '1px solid rgba(143, 3, 3, 0.35)'
      : 'border: 2px solid rgba(43, 184, 218, 0.5)'};
    box-sizing: border-box;
    border-radius: 8px;
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1024px) {
    }
  `
)
const HeaderCard = styled('header')(
  ({ colorBtn }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    font-size: 2.5rem;
    .card-icon {
      color: ${colorBtn === 'dasboard' ? '#c54646' : '#EFEFEF'};
      :hover {
        color: ${colorBtn === 'dasboard'
          ? 'var(--hover-dasb)'
          : 'var(--color-prtfolio)'};
      }
    }
  `
)
const ButtonLink = styled('button')(
  () => css`
    border: none;
    padding: 1rem;
    align-items: center;
    display: flex;
    cursor: pointer;
    font-size: 2.5rem;
    background-color: transparent;
    :hover {
      color: rgba(255, 94, 91, 0.62);
    }
  `
)
const ContainerBtn = styled('div')(
  () => css`
    display: flex;
  `
)

const BodyCard = styled('div')(
  ({ colorBtn }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 2rem;
    background-color: transparent;
    color: ${colorBtn === 'dasboard' ? '#c54646' : '#EFEFEF'};
    border-radius: 8px;
    font-family: var(--font-Saira);
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1024px) {
    }
  `
)
const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;
  line-height: 47px;
  text-align: justify;
  color: #444444;
`
const Description = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1.7rem;
  line-height: 24px;
  text-align: justify;
  color: #444444;
`
const FooterCard = styled('div')(
  ({ colorBtn }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    font-size: 1.5rem;
    font-family: var(--font-SpaceM);
    .card-icon {
      color: ${colorBtn === 'dasboard' ? '#c54646' : '#EFEFEF'};
      font-size: 2.5rem;
      :hover {
        color: ${colorBtn === 'dasboard'
          ? 'var(--hover-dasb)'
          : 'var(--color-prtfolio)'};
      }
    }
    padding: 1rem 0 0 0;
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1024px) {
    }
  `
)
const ContText = styled.div`
  display: flex;
  gap: 1.5rem;
`
const TextFooter = styled.p``
const CardProyect = ({
  colorBtn,
  title,
  description,
  techFirst,
  techSecond,
  level,
}) => {
  const value = useMemo(() => ({ className: 'card-icon' }))
  //   const valueFooter = useMemo(() => ({ className: 'footer-icon' }))
  return (
    <Container colorBtn={colorBtn}>
      <HeaderCard colorBtn={colorBtn}>
        <IconContext.Provider value={value}>
          <FaFolderMinus />
        </IconContext.Provider>
        <ContainerBtn>
          <ButtonLink>
            <IconContext.Provider value={value}>
              <FaExternalLinkAlt />
            </IconContext.Provider>
          </ButtonLink>
          <ButtonLink>
            <IconContext.Provider value={value}>
              <FaGithub />
            </IconContext.Provider>
          </ButtonLink>
        </ContainerBtn>
      </HeaderCard>
      <BodyCard>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </BodyCard>
      <FooterCard colorBtn={colorBtn}>
        <ContText>
          <IconContext.Provider value={value}>
            <FaFireAlt />
          </IconContext.Provider>
          <TextFooter>{level}</TextFooter>
        </ContText>
        <ContText>
          <TextFooter>{techFirst}</TextFooter>
          <TextFooter>{techSecond}</TextFooter>
        </ContText>
      </FooterCard>
    </Container>
  )
}

export default CardProyect