/* eslint-disable jsx-a11y/anchor-is-valid */
import { useAuth0 } from '@auth0/auth0-react'
import { useMemo } from 'react'
import styled from 'styled-components'
import {
  FaUserAlt,
  FaElementor,
  FaMedal,
  FaChild,
  FaExternalLinkAlt,
  FaFileAlt,
  FaDonate,
} from 'react-icons/fa'
import { IconContext } from 'react-icons'
import userdefault from '../../../assets/user.gif'

const MenuBar = styled.nav`
  display: none;
  @media screen and (min-width: 768px) {
    /* min-height: 100vh; */
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    background: rgba(196, 196, 196, 0.1);
    width: 25rem;
    box-shadow: 6px 4px 10px 0px rgb(0 9 128 / 25%);
    padding: 3rem 0;
    min-height: 100vh;
    position: fixed;
    left: 0;
  }
`
const Ul = styled.ul`
  width: 100%;
  font-family: var(--font-Dongle);
  font-style: normal;
  font-weight: bold;
  font-size: 2.5rem;
  color: rgba(67, 75, 87, 0.78);
  .icon-button {
    color: var(--color-dasbo-desk);
  }
`
const UserPhoto = styled.figure`
  width: 100%;
  margin: 0 0 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 50%;
`
const Photo = styled.img`
  /* width: 10rem;
  border-radius: 50%;
  background-color: var(--color-pink-prim);
  border: 4px solid var(--color-pink-prim); */
  object-fit: cover;
  object-position: center center;
  width: 100px;
  height: 100px;
  border-radius: 65px;
  border: 5px solid #6c646538;
`
const Li = styled.li`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  padding: 0.7rem 1rem 0.5rem 1rem;
  cursor: pointer;
  :hover {
    background: #e4f4fb;
  }
`
const Link = styled.a`
  text-decoration: none;
  color: rgba(67, 75, 87, 0.78);
`
const UserName = styled.p`
  font-family: var(--font-Dongle);
  font-style: normal;
  font-weight: bold;
  font-size: 2.5rem;
  color: rgba(67, 75, 87, 0.78);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 20rem;
`

const DasBoard = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()
  const value = useMemo(() => ({ className: 'icon-button' }))
  if (isLoading) {
    return <MenuBar> ... </MenuBar>
  }
  return (
    // isAuthenticated && (
    <MenuBar>
      <UserPhoto>
        <Photo src={isAuthenticated ? user.picture : userdefault} />
        <UserName>{user.name}</UserName>
      </UserPhoto>
      <Ul>
        <Li>
          <IconContext.Provider value={value}>
            <FaExternalLinkAlt />
          </IconContext.Provider>
          <Link href="#userName">Mi Link</Link>
        </Li>
        <Li>
          <IconContext.Provider value={value}>
            <FaUserAlt />
          </IconContext.Provider>
          <Link href="#about">Acerca de mí</Link>
        </Li>
        <Li>
          <IconContext.Provider value={value}>
            <FaElementor />
          </IconContext.Provider>
          <Link href="#proyects">Mis Proyectos</Link>
        </Li>
        <Li>
          <IconContext.Provider value={value}>
            <FaMedal />
          </IconContext.Provider>
          <Link href="#skills">Mis Skills</Link>
        </Li>
        <Li>
          <IconContext.Provider value={value}>
            <FaChild />
          </IconContext.Provider>
          <Link href="#logros">Mis Logros</Link>
        </Li>
        <Li>
          <IconContext.Provider value={value}>
            <FaFileAlt />
          </IconContext.Provider>
          <Link href="#cv">Mi CV</Link>
        </Li>
        <Li>
          <IconContext.Provider value={value}>
            <FaDonate />
          </IconContext.Provider>
          <Link href="#donation">Donaciones</Link>
        </Li>
      </Ul>
    </MenuBar>
    // )
  )
}

export default DasBoard
