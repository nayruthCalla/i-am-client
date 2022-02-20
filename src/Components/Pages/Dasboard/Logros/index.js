import { useState } from 'react'
import Swal from 'sweetalert2'
import styled from 'styled-components'
import { FaPlus, FaEllipsisH } from 'react-icons/fa'
import AddLogros from './AddLogros'
import CardLogros from '../../../Layouts/CardLogros'
import { useAllLogrosByUser, useDeleteLogro } from './customHooks'
import EditedLogros from './EditedLogros'
import alert from '../../../../assets/alert.gif'
// import TextareaDashboard from '../../../Layouts/Areashboard'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
`
const ContainerLogros = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  padding: 0 4rem 3rem 4rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1024px) {
  }
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
  width: 100%;
  max-width: 25rem;
  justify-content: center;
  cursor: pointer;
  :hover {
    background: var(--hover-dasb);
  }
`
const ContAddProyect = styled('div')`
  align-items: center;
  margin: 4rem 2rem 2rem 2rem;
`
const ContMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem;
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
const P = styled.p`
  font-family: var(--font-Dongle);
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 43px;
  color: rgb(67 75 87 / 68%);
  text-align: center;
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
const Logros = () => {
  const [addCard, setAddCard] = useState(false)
  const { error, data } = useAllLogrosByUser()
  const [more, setMore] = useState(false)
  const [edited, setEdited] = useState()
  const [addCardEdit, setAddCardEdit] = useState(false)
  const [deleteLogros] = useDeleteLogro()

  console.log(edited)
  const handleMore = () => {
    setMore(!more)
    // setColor(!colorPrev)
  }
  const handleEdit = async (items) => {
    // console.log(items)
    setEdited(items)
    // setAddCard(!addCard)
    setAddCardEdit(!addCardEdit)
    // Swal.fire({
    //   title: 'Eliminar Proyecto',
    //   text: 'Recuerda que podras agregar otro proyecto cuando quieras :)',
    //   imageUrl: `${alert}`,
    //   showCancelButton: true,
    //   confirmButtonColor: '#29ABE0',
    //   cancelButtonColor: '#D9534F',
    //   confirmButtonText: 'Sí, Eliminar',
    //   imageWidth: 300,
    //   imageHeight: 250,
    //   imageAlt: 'Custom image',
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire('Se eliminó Proyecto', '', 'success')
    //     deleteProyect({
    //       variables: {
    //         deleteProyectId: id,
    //       },
    //     })
    //   }
    // })
  }
  const handleDelete = async (id) => {
    // console.log(id)
    Swal.fire({
      title: 'Eliminar Skill',
      text: 'Podras agregar otro logro cuando quieras :)',
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
        Swal.fire('Se eliminó Logro', '', 'success')
        deleteLogros({
          variables: {
            deleteLogrosId: id,
          },
        })
      }
    })
  }

  return (
    <Container>
      {addCardEdit ? (
        <EditedLogros
          setAddCard={setAddCard}
          addCard={addCard}
          dataEdited={edited}
          ifEdit
          setAddCardEdit={setAddCardEdit}
          addCardEdit={addCardEdit}
        />
      ) : (
        <>
          <AddButton
            onClick={() => {
              setAddCard(!addCard)
            }}
          >
            <FaPlus />
            Añadir Logro
          </AddButton>
          {addCard ? (
            <AddLogros setAddCard={setAddCard} addCard={addCard} />
          ) : null}
        </>
      )}

      {data?.getLogrosByUser.length > 0 ? (
        <ContAddProyect>
          <ContMore>
            <ButtonRed type="button" onClick={handleMore}>
              <FaEllipsisH />
            </ButtonRed>
            <P>Mis Logros/Retos</P>
          </ContMore>
          <ContainerLogros>
            {data?.getLogrosByUser.map((e, i) => (
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

                <CardLogros
                  colorBtn="dasboard"
                  title={e.title}
                  description={e.description}
                />
              </Preview>
            ))}
          </ContainerLogros>
        </ContAddProyect>
      ) : (
        error
      )}
    </Container>
  )
}

export default Logros
