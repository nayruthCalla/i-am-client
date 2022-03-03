import { gql } from '@apollo/client'

// ADD
export const ADD_ABOUT_ME = gql`
  mutation AddAboutMe(
    $firstName: String!
    $profession: String!
    $aboutMeText: String!
    $interests: String!
    $socialNetworks: [SocialNetworkPost]!
    $photo: String!
  ) {
    addAboutMe(
      firstName: $firstName
      profession: $profession
      aboutMeText: $aboutMeText
      interests: $interests
      socialNetworks: $socialNetworks
      photo: $photo
    ) {
      id
      userId
      firstName
      profession
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
    $profession: String
    $aboutMeText: String
    $interests: String
    $socialNetworks: [SocialNetworkPost]
    $photo: String
  ) {
    updateAboutMe(
      id: $updateAboutMeId
      firstName: $firstName
      profession: $profession
      aboutMeText: $aboutMeText
      interests: $interests
      socialNetworks: $socialNetworks
      photo: $photo
    ) {
      id
      userId
      userName
      firstName
      profession
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

// DELETE
export const DELETE_ABOUT_BY_ID = gql`
  mutation DeleteAboutMe($deleteAboutMeId: String!) {
    deleteAboutMe(id: $deleteAboutMeId) {
      id
      userId
      userName
      firstName
      profession
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

// github
export const GET_USER_BY_USERGITHUB = `
query MyQuery($login: String = "") {
  user(login: $login) {
    bio
    name
    url
    location
    email
    avatarUrl(size: 10)
  }
}
`
