/* eslint-disable import/prefer-default-export */
// import { gql } from '@apollo/client'

export const GET_PROYECTS_BY_USERGITHUB = `
  query ProyectByUserGithub(
    $name: String = ""
    $owner: String = ""
    $first: Int
    $first1: Int
  ) {
    repository(name: $name, owner: $owner) {
      name
      description
      url
      homepageUrl
      createdAt
      repositoryTopics(first: $first) {
        nodes {
          topic {
            name
          }
        }
      }
      languages(first: $first1) {
        totalCount
        totalSize
        edges {
          size
          node {
            name
            color
          }
        }
      }
    }
  }
`
