import { useMemo } from 'react'
import styled, { css } from 'styled-components'
import {
  FaFolderOpen,
  FaExternalLinkAlt,
  FaGithub,
  // FaFireAlt,
} from 'react-icons/fa'
import { IconContext } from 'react-icons'

const Container = styled('article')(
  ({ colorBtn }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: ${colorBtn === 'dasboard' ? '35rem' : '35rem'};
    padding: 2rem;
    background-color: ${colorBtn === 'dasboard'
      ? 'transparent'
      : 'transparent'};
    /* background: #ffffff; */
    border: ${colorBtn === 'dasboard'
      ? '1px solid rgba(143, 3, 3, 0.35)'
      : '2px solid rgba(43, 184, 218, 0.5)'};
    box-sizing: border-box;
    border-radius: 8px;
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1024px) {
      min-width: 35rem;
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
    color: ${colorBtn === 'dasboard' ? '#c54646' : '#EFEFEF'};
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
const ButtonLink = styled('a')(
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
    color: ${colorBtn === 'dasboard' ? '#c54646' : '#A3A8C3'};
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
  white-space: normal;
  white-space: normal;
  text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
const Description = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1.7rem;
  line-height: 24px;
  text-align: justify;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-top: 10px;
`
const FooterCard = styled('div')(
  ({ colorBtn }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    font-size: 1.5rem;
    font-family: var(--font-SpaceM);
    color: ${colorBtn === 'dasboard' ? '#000' : '#E6E6E6'};
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
    flex-direction: column;
    gap: 1rem;
    @media screen and (min-width: 768px) {
      flex-wrap: wrap;
      justify-content: center;
      flex-direction: row;
      align-items: center;
    }
    @media screen and (min-width: 1024px) {
    }
  `
)
const ContText = styled.div`
  display: flex;
  gap: 1.5rem;
`
const TextFooter = styled.p`
  white-space: normal;
  text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 1.5rem;
  font-family: var(--font-SpaceM);
  text-transform: capitalize;
`
const CardProyect = ({
  colorBtn,
  title,
  description,
  techFirst,
  techSecond,
  level,
  links,
}) => {
  const value = useMemo(() => ({ className: 'card-icon' }))

  return (
    <Container colorBtn={colorBtn}>
      <HeaderCard colorBtn={colorBtn}>
        <ContText>
          <IconContext.Provider value={value}>
            <FaFolderOpen />
          </IconContext.Provider>
          <TextFooter>{level}</TextFooter>
        </ContText>
        <ContainerBtn>
          {links.map((e, i) => (
            <div key={i}>
              {e.name === 'Demo' ? (
                <ButtonLink href={e.link} target="_blank">
                  <IconContext.Provider value={value}>
                    <FaExternalLinkAlt />
                  </IconContext.Provider>
                </ButtonLink>
              ) : (
                <ButtonLink href={e.link} target="_blank">
                  <IconContext.Provider value={value}>
                    <FaGithub />
                  </IconContext.Provider>
                </ButtonLink>
              )}
            </div>
          ))}
        </ContainerBtn>
      </HeaderCard>
      <BodyCard colorBtn={colorBtn}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </BodyCard>
      <FooterCard colorBtn={colorBtn}>
        <ContText>
          <TextFooter>{techFirst}</TextFooter>|
          <TextFooter>{techSecond}</TextFooter>
        </ContText>
      </FooterCard>
    </Container>
  )
}

export default CardProyect
