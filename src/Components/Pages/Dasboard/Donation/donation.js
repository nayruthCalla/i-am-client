// import { gql, useQuery } from '@apollo/client'
// import { useState, useEffect } from 'react'
// import { GiCoffeeCup } from 'react-icons/gi'
// import styled from 'styled-components'

// const Container = styled.div``
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

// const GET_PAYMENT = gql`
//   query Query {
//     getUrlPayment
//   }
// `
// const Payment = () => {
//   const { loading, data } = useQuery(GET_PAYMENT)
//   const [message, setMessage] = useState('')
//   //   const baseURL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8081'
//   //   const action = `${baseURL}api/payment/create-checkout-session`

//   useEffect(() => {
//     // Check to see if this is a redirect back from Checkout
//     const query = new URLSearchParams(window.location.search)

//     if (query.get('success')) {
//       setMessage('Order placed! You will receive an email confirmation.')
//     }

//     if (query.get('canceled')) {
//       setMessage(
//         "Order canceled -- continue to shop around and checkout when you're ready."
//       )
//     }
//   }, [data])
//   // console.log(data, loading)
//   return (
//     <Container>
//       {message ? (
//         <Message>{message}</Message>
//       ) : (
//         <Form
//           data-test="donate"
//           action={
//             loading ? '' : `${data.getUrlPayment}/create-checkout-session`
//           }
//           method="POST"
//         >
//           <Button type="submit">
//             <GiCoffeeCup />
//           </Button>
//         </Form>
//       )}
//     </Container>
//   )
// }
// export default Payment
// // ={
// //     // loading ? action : `${data.getUrlPayment}/create-checkout-session`
// //   }
