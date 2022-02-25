import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FaCreditCard } from 'react-icons/fa'

const Container = styled.div``
const Message = styled.p``
const Form = styled.form``

const ButtonLogin = styled.button`
  font-family: var(--font-Dongle);
  font-size: 2.5rem;
  font-weight: bold;
  font-style: normal;
  color: #3e3f3ab8;
  border: none;
  border-radius: 8px;
  background-color: transparent;
  padding: 0 1rem 0 1rem;
`
const ButtonSign = styled(ButtonLogin)`
  background: var(--color-pink-prim);
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 2rem;
  color: #ffffff;
  padding: 0.5rem 1rem;
  :hover {
    background: #c54646;
  }
`
const Payment = () => {
  const [message, setMessage] = useState('')
  const action = `${process.env.REACT_APP_PAYMENT_URL}api/payment/create-checkout-session`

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search)

    if (query.get('success')) {
      setMessage('Order placed! You will receive an email confirmation.')
    }

    if (query.get('canceled')) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      )
    }
  }, [])
  // console.log(data, loading)
  return (
    <Container>
      {message ? (
        <Message>{message}</Message>
      ) : (
        <Form data-test="donate" action={action} method="POST">
          <ButtonSign type="submit">
            <FaCreditCard />
            Enviar regalito por tarjeta
          </ButtonSign>
        </Form>
      )}
    </Container>
  )
}
export default Payment
