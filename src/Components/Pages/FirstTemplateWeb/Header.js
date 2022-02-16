/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components'

// import logo from '../../../assets/logoIam.svg'

const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.5rem 2rem 1.5rem 2rem;
  background: transparent;
  box-shadow: 1px 8px 4px 5px rgba(0, 0, 0, 0.26);
  /* position: fixed; */
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1024px) {
    font-size: 35px;
    line-height: 52px;
  }
`
const ContTitle = styled.div``
const Title = styled.a`
  font-family: var(--font-SpaceM);
  font-style: normal;
  font-weight: normal;
  color: rgb(244, 244, 244);
`
const Nagitation = styled.nav``
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1024px) {
  }
`
const Li = styled.li`
  list-style: none;
  padding: 0 1rem 0 1rem;
  /* border-radius: 2rem; */
  cursor: pointer;
  &:hover {
    /* background: rgba(249, 90, 97, 0.09); */
  }
`
// const LiSec = styled(Li)`
//   list-style: none;
//   &:hover {
//     background: #f95a61b8;
//   }
// `
const Link = styled.a`
  text-decoration: none;
  font-family: var(--font-SpaceM);
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 30px;
  color: #ffffff;
  :hover {
    color: #2bb8da;
  }
`
const Span = styled.span`
  color: #2bb8da;
`
// const LinkLogin = styled(Link)`
//   color: #ffffff;
// `
// say

const Header = ({ userName }) => (
  <Container>
    <ContTitle>
      <Title>{userName}</Title>
    </ContTitle>
    <Nagitation>
      <Ul>
        <Li>
          <Link href="#about">
            <Span>01.</Span> Sobre mí
          </Link>
        </Li>
        <Li>
          <Link href="#proyects">
            <Span>02.</Span> Proyectos
          </Link>
        </Li>
        <Li>
          <Link href="#skills">
            <Span>03.</Span> Skills
          </Link>
        </Li>
        <Li>
          <Link href="#logros">
            <Span>04.</Span> Logros
          </Link>
        </Li>
        <Li>
          <Link href="#contact">
            <Span>05.</Span> Contacto
          </Link>
        </Li>
      </Ul>
    </Nagitation>
  </Container>
)

export default Header
