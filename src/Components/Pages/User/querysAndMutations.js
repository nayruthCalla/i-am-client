/* eslint-disable import/prefer-default-export */
import { gql } from '@apollo/client'

export const GET_USER = gql`
  query GetUser {
    getUser {
      userName
      name
      nickname
      email
      id
    }
  }
`
