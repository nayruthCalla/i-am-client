import { useMemo } from 'react'
import styled, { css } from 'styled-components'
import { FaEyeDropper } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const Container = styled('article')(
  ({ colorBtn }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: ${colorBtn === 'dasboard' ? '20rem' : '40rem'};
    background-color: transparent;
    font-family: var(--font-SpaceM);
    font-style: normal;
    font-weight: normal;
    font-size: 2.5rem;
    line-height: 37px;
    color: ${colorBtn === 'dasboard' ? '#797770' : 'rgba(204, 204, 204, 0.77)'};
    .card-icon {
      color: ${colorBtn === 'dasboard' ? '#c54646' : '#EFEFEF'};
      :hover {
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

const Text = styled.p``

const CardSkill = ({ colorBtn, text }) => {
  const value = useMemo(() => ({ className: 'card-icon' }))
  //   const valueFooter = useMemo(() => ({ className: 'footer-icon' }))
  return (
    <Container colorBtn={colorBtn}>
      <IconContext.Provider value={value}>
        <FaEyeDropper />
      </IconContext.Provider>
      <Text>{text}</Text>
    </Container>
  )
}

export default CardSkill
