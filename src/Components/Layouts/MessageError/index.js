import styled from 'styled-components'

const Container = styled.div``
const MessageP = styled.p`
  font-family: Dongle;
  font-size: 25px;
  line-height: 36px;
  color: #ff5e5b;
  text-align: center;
`

const Message = ({ text }) => {
  return (
    <Container>
      <MessageP>{text}</MessageP>
    </Container>
  )
}

export default Message
