import { gql } from '@apollo/client'

export const GET_USER_BY_ID_ABOUT = gql`
  query GetUserByIdAbout {
    getUserByIdAbout {
      id
      userName
      name
      nickname
      email
      picture
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
