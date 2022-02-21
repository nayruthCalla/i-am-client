/* eslint-disable no-undef */

import styled from 'styled-components'
import error from '../../assets/error.gif'
import Footer from './Footer'
import Header from './Header'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`
const Image = styled.img``
// const Message = styled.p``
// const Form = styled.form``
// const Button = styled.button`
//   border: none;
//   background: none;
//   color: var(--principal-color);
//   font-size: 2.8rem;
//   margin-left: 10px;
//   cursor: pointer;
//   &:hover {
//     color: #29ace094;
//   }
// `

const Error = () => {
  return (
    <>
      <Header />
      <Container>
        <Image src={error} />
      </Container>
      <Footer />
    </>
  )
}
export default Error
