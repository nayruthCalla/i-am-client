import { gql } from '@apollo/client'

// QUERIES
export const ADD_PROYECT = gql`
  mutation AddProyect(
    $proyectName: String!
    $level: String!
    $description: String!
    $techFirst: String!
    $techSecond: String!
    $links: [LinkProyect]!
  ) {
    addProyect(
      proyectName: $proyectName
      level: $level
      description: $description
      techFirst: $techFirst
      techSecond: $techSecond
      links: $links
    ) {
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
  query Query {
    getProyectByUser {
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
export const EDIT_PROYECT_BY_ID = gql`
  mutation UpdateProyect(
    $updateProyectId: String!
    $proyectName: String
    $level: String
    $description: String
    $techFirst: String
    $techSecond: String
    $links: [LinkProyect]
  ) {
    updateProyect(
      id: $updateProyectId
      proyectName: $proyectName
      level: $level
      description: $description
      techFirst: $techFirst
      techSecond: $techSecond
      links: $links
    ) {
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
