import { useMemo } from 'react'
import styled, { css } from 'styled-components'
import { FaCircle } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const Container = styled('article')(
  ({ colorBtn }) => css`
    display: grid;
    grid-template-columns: 1fr 5fr;
    gap: 1rem;
    align-items: flex-start;
    /* max-width: ${colorBtn === 'dasboard' ? '20rem' : '40rem'}; */
    background-color: transparent;
    color: ${colorBtn === 'dasboard' ? '#797770' : 'rgba(204, 204, 204, 0.77)'};
    .card-icon {
      color: ${colorBtn === 'dasboard' ? '#c54646' : '#EFEFEF'};
      :hover {
        color: ${colorBtn === 'dasboard'
          ? 'var(--hover-dasb)'
          : 'var(--color-prtfolio)'};
      }
    }
    :hover {
      .hovercolor {
        border: ${colorBtn === 'dasboard'
          ? '3px dashed #c54646'
          : '3px dashed rgba(43, 184, 218, 0.5)'};
      }
      .card-icon {
        color: ${colorBtn === 'dasboard'
          ? 'var(--hover-dasb)'
          : 'var(--color-prtfolio)'};
      }
      .hovercolorText {
        color: ${colorBtn === 'dasboard'
          ? 'var(--hover-dasb)'
          : 'var(--color-prtfolio)'};
      }
    }
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1024px) {
    }
  `
)

const Title = styled.p`
  font-family: var(--font-saira);
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 47px;
  color: #a3a8c3;
  white-space: normal;
`
const Description = styled.p`
  font-family: var(--font-saira);
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 24px;
  text-align: justify;
  white-space: normal;
  color: #a3a8c3;
`
const ContLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  gap: 0.5rem;
  height: -webkit-fill-available;
`
const Line = styled.div`
  width: 5px;
  height: 8rem;
  height: inherit;
  border: ${({ colorBtn }) =>
    colorBtn === 'dasboard'
      ? '3px dashed #c54646'
      : '3px dashed rgba(43, 184, 218, 0.5)'};
  :hover {
    border: ${({ colorBtn }) =>
      colorBtn === 'dasboard'
        ? '3px dashed var(--hover-dasb)'
        : '3px dashed var(--color-prtfolio)'};
  }
`
const ContText = styled.div``

const CardLogro = ({ colorBtn, title, description }) => {
  const value = useMemo(() => ({ className: 'card-icon' }))
  //   const valueFooter = useMemo(() => ({ className: 'footer-icon' }))
  return (
    <Container colorBtn={colorBtn}>
      <ContLine>
        <IconContext.Provider value={value}>
          <FaCircle />
        </IconContext.Provider>
        <Line colorBtn={colorBtn} className="hovercolor" />
      </ContLine>
      <ContText>
        <Title className="hovercolorText">{title}</Title>
        <Description>{description}</Description>
      </ContText>
    </Container>
  )
}

export default CardLogro
