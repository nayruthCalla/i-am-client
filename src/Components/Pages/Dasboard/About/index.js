/* eslint-disable react/jsx-no-useless-fragment */
import Swal from 'sweetalert2'
import { useState } from 'react'
import styled from 'styled-components'
import { FaEllipsisH } from 'react-icons/fa'
import CreateAbout from './CreateAbout'
// import Editd from './EditedAbout'
// import { getUserCurrent } from '../../User/customHooks'
import { useAboutMe, useDeleteAbout } from './customHooks'
import AboutRead from './AboutMe'
import EditAbout from './EditAbout'
import alert from '../../../../assets/alert.gif'

const P = styled.p`
  font-family: var(--font-Dongle);
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 43px;
  color: rgb(67 75 87 / 68%);
  text-align: center;
`
const ButtonRed = styled.button`
  background: transparent;
  /* border-radius: 50%; */
  border: 3px;
  border-radius: 3px;
  border: none;
  padding: 1rem;
  color: #c54646;
  width: 17%;
  font-size: 1.8rem;
  align-items: center;
  display: flex;
  padding: 0.1rem 1.5rem;
  width: fit-content;
  cursor: pointer;
  :hover {
    background: #e7dbe7;
  }
`
const ContentMore = styled.div`
  display: flex;
  gap: 1.3rem;
  justify-content: center;
  align-items: center;
`
const ButtonMore = styled.button`
  font-family: var(--font-Dongle);
  font-style: normal;
  font-size: 30px;
  line-height: 43px;
  color: #8b8080;
  text-align: center;
  border: none;
  background: transparent;
  border-radius: 3px;
  padding: 0 1rem;
  cursor: pointer;
  :hover {
    background: #e7dbe7;
  }
`
const ContMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 7rem 4rem 4rem 4rem;
`
const Preview = styled('div')`
  /* width: 100%; */
  display: flex;
  gap: 1.3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: ${({ colorPrev }) => (colorPrev ? '#29abe014;' : 'transparent')};
  @media screen and (min-width: 768px) {
    /* flex-direction: row;
    flex-wrap: wrap; */
  }
  @media screen and (min-width: 1024px) {
  }
`

const AboutMe = () => {
  const [more, setMore] = useState(false)
  const [showCont, setShowCont] = useState(true)
  const { data } = useAboutMe()
  const [edited, setEdited] = useState()
  const [addCardEdit, setAddCardEdit] = useState(false)
  const [deleteAboutMe] = useDeleteAbout()

  const handleMore = () => {
    setMore(!more)
    // console.log(more)
  }

  const handleEdit = async (items) => {
    // console.log(items)
    setEdited(items)
    // setAddCard(!addCard)
    setAddCardEdit(!addCardEdit)
  }
  //   console.log(dataAbout, dataUser)
  const handleDelete = async (id) => {
    // console.log(id)
    Swal.fire({
      title: 'Eliminar ',
      text: 'Podras otro descrpción cuanod quieras :)',
      imageUrl: `${alert}`,
      showCancelButton: true,
      confirmButtonColor: '#29ABE0',
      cancelButtonColor: '#D9534F',
      confirmButtonText: 'Sí, Eliminar',
      imageWidth: 300,
      imageHeight: 250,
      imageAlt: 'Custom image',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Se eliminó ', '', 'success')
        deleteAboutMe({
          variables: {
            deleteAboutMeId: id,
          },
        })
      }
    })
  }
  return (
    <div>
      <ContMore>
        <ButtonRed type="button" onClick={handleMore}>
          <FaEllipsisH />
        </ButtonRed>
        <P>Sobre mí</P>
      </ContMore>

      {data?.getAboutMe.length > 0 ? (
        <>
          {data?.getAboutMe.map((e, i) => (
            <Preview key={i}>
              {addCardEdit ? (
                <>
                  {more ? (
                    <ContentMore>
                      <ButtonMore
                        type="button"
                        onClick={() => setAddCardEdit(!addCardEdit)}
                      >
                        Cancelar
                      </ButtonMore>
                    </ContentMore>
                  ) : null}
                  <EditAbout
                    dataEdited={edited}
                    ifEdit
                    setAddCardEdit={setAddCardEdit}
                    addCardEdit={addCardEdit}
                  />
                </>
              ) : (
                <>
                  {more ? (
                    <ContentMore>
                      <ButtonMore type="button" onClick={() => handleEdit(e)}>
                        Editar
                      </ButtonMore>
                      <ButtonMore
                        type="button"
                        onClick={() => handleDelete(e.id)}
                      >
                        Eliminar
                      </ButtonMore>
                    </ContentMore>
                  ) : null}
                  <AboutRead
                    key={i}
                    userName={e.firstName}
                    profession={e.profession}
                    about={e.aboutMeText}
                    interests={e.interests}
                    links={e.socialNetworks}
                    photo={e.photo}
                  />
                </>
              )}
            </Preview>
          ))}
        </>
      ) : (
        <CreateAbout showCont={showCont} setShowCont={setShowCont} />
      )}
    </div>
  )
}

export default AboutMe
