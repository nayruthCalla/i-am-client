import { gql } from '@apollo/client'

// QUERIES
export const ADD_PROYECT = gql`
  mutation AddArrProyects($proyects: [ArryProyects]) {
    addArrProyects(proyects: $proyects) {
      id
      userId
      proyectName
      level
      description
      techFirst
      techSecond
      links {
        link
        name
      }
    }
  }
`
// MUTATIONS
// ADD
export const GET_PROYECT_BY_USER = gql`
  query Query($userId: String!) {
    getProyectByUser(userId: $userId) {
      userId
      proyectName
      level
      id
      description
      techFirst
      techSecond
      links {
        link
        name
      }
    }
  }
`
// EDIT
export const EDIT_USER_BY_ID = gql`
  mutation UpdateUser(
    $nickname: String!
    $name: String
    $userName: ID
    $email: String
  ) {
    updateUser(
      nickname: $nickname
      name: $name
      userName: $userName
      email: $email
    ) {
      id
      userName
      name
      nickname
      email
      roles {
        admin
      }
    }
  }
`
// DELETE
export const DELETE_PROPERTY_BY_ID = gql`
  mutation DeleteProyect($deleteProyectId: String!) {
    deleteProyect(id: $deleteProyectId) {
      id
      userId
      proyectName
      level
      description
      techFirst
      techSecond
      links {
        link
        name
      }
    }
  }
`
