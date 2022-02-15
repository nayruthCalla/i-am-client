/* eslint-disable jsx-a11y/anchor-is-valid */
import { useMemo } from 'react'
import styled from 'styled-components'
import {
  FaUserAlt,
  FaElementor,
  FaMedal,
  FaChild,
  // FaAddressBook,
  FaFileAlt,
} from 'react-icons/fa'
import { IconContext } from 'react-icons'
import user from '../../../assets/user.gif'

const MenuBar = styled.nav`
  background: rgba(196, 196, 196, 0.1);
  width: 25rem;
  box-shadow: 6px 4px 10px 0px rgb(0 9 128 / 25%);
  padding: 3rem 0;
  height: 100vh;
  position: fixed;
  left: 0;
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
`
const Photo = styled.img`
  width: 7rem;
  border-radius: 50%;
  border: 4px solid var(--color-pink-prim);
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
const DasBoard = () => {
  const value = useMemo(() => ({ className: 'icon-button' }))
  return (
    <MenuBar>
      <UserPhoto>
        <Photo src={user} />
      </UserPhoto>
      <Ul>
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
      </Ul>
    </MenuBar>
  )
}

export default DasBoard
