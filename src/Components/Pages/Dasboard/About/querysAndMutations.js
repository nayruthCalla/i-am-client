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
// ADD
export const GET_ABOUT_BY_USERNAME = gql`
  query GetAboutMeByUserName($userName: ID!) {
    getAboutMeByUserName(userName: $userName) {
      firstName
      profession
      lastName
      linkUsername
      aboutMeText
      interests
      socialNetworks {
        name
        link
      }
      photo
      userName
      userId
      id
    }
  }
`
export const GET_ABOUT_BY_USERID = gql`
  query GetAboutMe {
    getAboutMe {
      id
      userId
      userName
      firstName
      lastName
      profession
      linkUsername
      aboutMeText
      interests
      socialNetworks {
        name
        link
      }
      photo
    }
  }
`
export const EDIT_ABOUT_BY_ID = gql`
  mutation UpdateAboutMe(
    $updateAboutMeId: String!
    $firstName: String
    $lastName: String
    $profession: String
    $linkUsername: String
    $aboutMeText: String
    $interests: String
    $socialNetworks: SocialNetworkPost
    $photo: String
  ) {
    updateAboutMe(
      id: $updateAboutMeId
      firstName: $firstName
      lastName: $lastName
      profession: $profession
      linkUsername: $linkUsername
      aboutMeText: $aboutMeText
      interests: $interests
      socialNetworks: $socialNetworks
      photo: $photo
    ) {
      id
      userId
      userName
      firstName
      lastName
      profession
      linkUsername
      aboutMeText
      interests
      socialNetworks {
        name
        link
      }
      photo
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
    $picture: String
  ) {
    updateUser(
      nickname: $nickname
      name: $name
      userName: $userName
      email: $email
      picture: $picture
    ) {
      id
      userName
      name
      nickname
      email
      roles {
        admin
      }
      picture
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
