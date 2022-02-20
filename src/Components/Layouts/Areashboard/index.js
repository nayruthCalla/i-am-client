// import { useMemo } from 'react'
import styled, { css } from 'styled-components'
// import { FaSortDown } from 'react-icons/fa'
// import { IconContext } from 'react-icons'
import PropTypes from 'prop-types'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
// huwhsuwdhwu hshshshswudwu
const TextArea = styled('textarea')(
  ({ size }) => css`
    background: #ffffff;
    border: 2px solid rgba(67, 75, 87, 0.31);
    box-sizing: border-box;
    border-radius: 0.8rem;
    font-family: var(--font-Dongle);
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    line-height: 25px;
    padding: 0 1rem;
    text-align: center;
    padding: 1.5rem;
    height: ${size === 'big' ? '20rem' : '8rem'};
    resize: none;
    color: #484747;
    ::placeholder {
      color: rgba(67, 75, 87, 0.45);
    }
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1024px) {
    }
  `
)
const Label = styled.label`
  font-family: Dongle;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 36px;
  color: rgba(67, 75, 87, 0.94);
  text-align: left;
`

const TextareaDashboard = ({
  placeholder,
  textLabel,
  size,
  value,
  onChange,
  name,
}) => {
  return (
    <Container>
      <Label htmlFor={name}>{textLabel}</Label>
      <TextArea
        type="text"
        placeholder={placeholder}
        size={size}
        value={value}
        onChange={onChange}
        id={name}
        name={name}
      />
    </Container>
  )
}
TextareaDashboard.propTypes = {
  placeholder: PropTypes.string.isRequired,
}
export default TextareaDashboard
