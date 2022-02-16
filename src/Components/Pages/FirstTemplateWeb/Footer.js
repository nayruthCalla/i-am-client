import styled from 'styled-components'

const Container = styled.section`
  /* margin-top: 31rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 3rem 3rem;
  @media screen and (min-width: 768px) {
    min-height: 100vh;
    padding: 2rem 8rem;
    gap: 5rem;
    /* justify-content: flex-start; */
  }
`

const ContSectionTitle = styled.div``
const SectionTitle = styled.h2`
  font-family: var(--font-SpaceM);
  font-style: normal;
  font-weight: normal;
  font-size: 2.3rem;
  line-height: 44px;
  color: #2bb8da;
  :hover {
    color: #ffffff;
  }
  @media screen and (min-width: 768px) {
    font-size: 3rem;
    /* justify-content: flex-start; */
  }
`
const Span = styled.span`
  color: #2bb8da;
`
const Line = styled.div`
  background: rgba(43, 184, 218, 0.5);
  width: 100%;
  height: 2px;
`
const Title = styled.p`
  font-family: var(--font-SpaceM);
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 37px;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    font-size: 4rem;
    /* justify-content: flex-start; */
  }
`
const Text = styled.p`
  font-family: var(--font-SpaceM);
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  color: #a3a8c3;
`
const ButtonContc = styled.button`
  background: #120e26;
  border: 2px solid #2bb8da;
  box-sizing: border-box;
  border-radius: 13px;
  font-family: var(--font-SpaceM);
  font-style: normal;
  font-weight: normal;
  font-size: 2.5rem;
  line-height: 44px;
  padding: 0 3rem;
  color: #2bb8da;
`

const Skills = () => {
  return (
    <Container id="contact">
      <ContSectionTitle>
        <SectionTitle>
          <Span>05.</Span> ¿Qué sigue?
        </SectionTitle>
        <Line />
      </ContSectionTitle>
      <Title>Ponernos en contacto</Title>
      <Text>
        Aunque actualmente no estoy buscando nuevas oportunidades, mi bandeja de
        entrada siempre está abierta. Ya sea que tenga una pregunta o
        simplemente quiera saludar, ¡haré todo lo posible para responderle!
      </Text>
      <ButtonContc>Dí Hola</ButtonContc>
    </Container>
  )
}

export default Skills
