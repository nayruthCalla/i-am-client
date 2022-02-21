/* eslint-disable import/prefer-default-export */
import { gql } from '@apollo/client'

export const GET_PROFILE_USER = gql`
  query GetProfileUserAbout(
    $userName: ID!
    $getProfileUserProyectUserName2: ID!
    $getProfileUserSkillUserName2: ID!
    $getProfileUserLogrosUserName2: ID!
  ) {
    getProfileUserAbout(userName: $userName) {
      id
      userId
      userName
      firstName
      lastName
      linkUsername
      profession
      aboutMeText
      interests
      socialNetworks {
        name
        link
      }
      photo
    }
    getProfileUserProyect(userName: $getProfileUserProyectUserName2) {
      id
      userId
      userName
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
    getProfileUserSkill(userName: $getProfileUserSkillUserName2) {
      id
      userName
      userId
      skillName
    }
    getProfileUserLogros(userName: $getProfileUserLogrosUserName2) {
      id
      userName
      userId
      title
      description
    }
  }
`
