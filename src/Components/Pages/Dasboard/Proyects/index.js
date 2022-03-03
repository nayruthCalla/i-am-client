/* eslint-disable no-shadow */
import Swal from 'sweetalert2'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FaPlus, FaEllipsisH } from 'react-icons/fa'
import AddProyect from './AddProyect'
import CardProyect from '../../../Layouts/CardProyect'
import alert from '../../../../assets/alert.gif'
// import TextareaDashboard from '../../../Layouts/Areashboard'
import { useAllProyectByUser, useDeleteProyect } from './customHooks'
import EditedProyect from './EditedProyect'
import SearchProyectGitHub from './ProyectsGithub/SearchGithub'
import ShowProyectGH from './ProyectsGithub/ShowProyect'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6.5rem 0 4rem 0;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`
const ContainerProyects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 2rem;
  gap: 3rem;
  padding: 0 2rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1024px) {
  }
`
const ContAddProyect = styled(ContainerProyects)`
  align-items: center;
  margin: 4rem 2rem 2rem 2rem;
`

// const Image = styled.img``
const AddButton = styled.button`
  background: #c54646;
  border: none;
  padding: 1rem;
  color: #f6f6f9;
  font-size: 1.8rem;
  align-items: center;
  display: flex;
  border-radius: 0.8rem;
  gap: 1rem;
  width: 80%;
  justify-content: center;
  cursor: pointer;
  :hover {
    background: var(--hover-dasb);
  }
  @media screen and (min-width: 768px) {
    width: 35rem;
    max-width: 35rem;
  }
  @media screen and (min-width: 1024px) {
  }
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
const Preview = styled.div`
  /* width: 100%; */
  display: flex;
  gap: 1.3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    /* flex-direction: row;
    flex-wrap: wrap; */
  }
  @media screen and (min-width: 1024px) {
  }
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
const ContentButtonProyects = styled.div`
  display: flex;
  gap: 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

//--------------------------

const Proyects = () => {
  const [addCard, setAddCard] = useState(false)
  const [addCardEdit, setAddCardEdit] = useState(false)
  const [more, setMore] = useState(false)
  const [stateForm, setStateForm] = useState([])
  const { error, data } = useAllProyectByUser()
  const [deleteProyect] = useDeleteProyect()
  const [edited, setEdited] = useState()
  const [searchProyect, setSearchProyect] = useState()
  const [showProyectGit, setShowProyectGit] = useState(false)

  const handleMore = () => {
    setMore(!more)
  }
  // console.log(more)

  const handleEdit = async (items) => {
    // console.log(items)
    setEdited(items)
    // setAddCard(!addCard)
    setAddCardEdit(!addCardEdit)
  }

  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Eliminar Proyecto',
      text: 'Podras agregar otro proyecto cuando quieras :)',
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
        Swal.fire('Se eliminó Proyecto', '', 'success')
        deleteProyect({
          variables: {
            deleteProyectId: id,
          },
        })
      }
    })
  }

  useEffect(() => {
    // console.log(searchProyect, 'buscar')
  }, [searchProyect])

  return (
    <Container>
      {addCardEdit ? (
        <EditedProyect
          stateForm={stateForm}
          setStateForm={setStateForm}
          setAddCard={setAddCard}
          addCard={addCard}
          dataEdited={edited}
          ifEdit
          setAddCardEdit={setAddCardEdit}
          addCardEdit={addCardEdit}
        />
      ) : (
        <>
          <ContentButtonProyects>
            <SearchProyectGitHub
              setSearchProyect={setSearchProyect}
              setAddCard={setAddCard}
              addCard={addCard}
              setShowProyectGit={setShowProyectGit}
            />
            <AddButton
              data-test="btnAddProyect"
              onClick={() => {
                setAddCard(!addCard)
                setShowProyectGit(false)
              }}
            >
              <FaPlus />
              Añadir Proyecto
            </AddButton>
          </ContentButtonProyects>
          {addCard ? (
            <AddProyect
              stateForm={stateForm}
              setStateForm={setStateForm}
              setAddCard={setAddCard}
              addCard={addCard}
            />
          ) : null}
          {showProyectGit ? (
            <ShowProyectGH
              searchProyect={searchProyect}
              setShowProyectGit={setShowProyectGit}
              showProyectGit={showProyectGit}
            />
          ) : null}
        </>
      )}

      {data?.getProyectByUser.length > 0 ? (
        <ContAddProyect>
          <ButtonRed type="button" onClick={handleMore}>
            <FaEllipsisH />
          </ButtonRed>
          <P>Mis Proyectos</P>
          <ContainerProyects>
            {data?.getProyectByUser.map((e, i) => (
              <Preview key={i}>
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

                <CardProyect
                  colorBtn="dasboard"
                  title={e.proyectName}
                  description={e.description}
                  techFirst={e.techFirst}
                  techSecond={e.techSecond}
                  level={e.level}
                  links={e.links}
                  setmore={setMore}
                  flagButton={more}
                />
              </Preview>
            ))}
          </ContainerProyects>
        </ContAddProyect>
      ) : (
        error
      )}
    </Container>
  )
}

export default Proyects
