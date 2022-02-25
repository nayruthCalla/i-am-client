// import { useState } from 'react'

import styled from 'styled-components'
import { FaPaypal } from 'react-icons/fa'
import DonationCard from './Donation'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6.5rem 0;
  gap: 3rem;
`

const P = styled.p`
  font-family: var(--font-Dongle);
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 43px;
  color: rgb(67 75 87 / 68%);
  text-align: center;
`
const Figure = styled.figure``
const Image = styled.img`
  width: 20rem;
`
const Desc = styled.p`
  font-family: var(--font-Dongle);
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 36px;
  display: flex;
  align-items: center;
  text-align: justify;
  color: #3e3f3a;
  white-space: normal;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    max-width: 65rem;
  }
`
const ButtonLogin = styled.a`
  font-family: var(--font-Dongle);
  font-size: 2.5rem;
  font-weight: bold;
  font-style: normal;
  color: #3e3f3ab8;
  border: none;
  border-radius: 8px;
  background-color: transparent;
  padding: 0 1rem 0 1rem;
  text-decoration: none;
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
const ContButton = styled.div`
  display: flex;
  gap: 5rem;
`

const Donation = () => {
  return (
    <Container>
      <P>¿Cómo nos puedes ayudar?</P>
      <Desc>
        iAmp, es una App Web si fines de lucro, busca ayudar a compartir lo
        mejor de ti en un portafolio web. y tú también puedes ayudarnos
        enviandonos regalitos o invitándonos cafecitos para i-Amp, elige las
        opciones disponibles para tí
      </Desc>
      <Figure>
        <Image
          alt="logo-app"
          src="https://res.cloudinary.com/drcn7ijzl/image/upload/v1645745679/regalo_dzdmh0.png"
        />
      </Figure>
      <ContButton>
        <DonationCard />
        <ButtonSign href="https://ko-fi.com/iampe" target="_blank">
          <FaPaypal />
          Enviar cafecito por Paypal
        </ButtonSign>
      </ContButton>
    </Container>
  )
}

export default Donation
