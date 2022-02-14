import { useMemo } from 'react'
import styled, { css } from 'styled-components'
import { FaSortDown } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import PropTypes from 'prop-types'

const Button = styled('button')(
  () => css`
    font-family: var(--font-Dongle);
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 43px;
    color: #ff5e5b;
    border: none;
    background-color: Transparent;
    display: flex;
    justify-content: center;
    width: fit-content;
    margin: 0.5rem 0 0.5rem 25%;
    padding: 0 1rem;
    border-radius: 1.1rem;
    cursor: pointer;
    &:hover {
      background: rgba(249, 90, 97, 0.09);
    }
    .icon-button {
      color: #c54646;
    }
    @media screen and (min-width: 768px) {
      margin: 0.5rem 0 0.5rem 10%;
    }
    @media screen and (min-width: 1024px) {
    }
  `
)

const ButtonDashborad = ({ text, screen }) => {
  const value = useMemo(() => ({ className: 'icon-button' }))
  return (
    <Button screen={screen}>
      <IconContext.Provider value={value}>
        <FaSortDown />
      </IconContext.Provider>
      {text}
    </Button>
  )
}
ButtonDashborad.propTypes = {
  text: PropTypes.string.isRequired,
  screen: PropTypes.string.isRequired,
}
export default ButtonDashborad
