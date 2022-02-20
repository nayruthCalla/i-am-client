import { gql } from '@apollo/client'

export const ADD_LOGRO = gql`
  mutation AddLogros($title: String!, $description: String!) {
    addLogros(title: $title, description: $description) {
      id
      userName
      userId
      title
      description
    }
  }
`
export const GET_LOGROS = gql`
  query GetLogrosByUser {
    getLogrosByUser {
      id
      userName
      userId
      title
      description
    }
  }
`
export const EDIT_LOGRO_BY_USER = gql`
  mutation UpdateLogros(
    $updateLogrosId: String!
    $title: String!
    $description: String!
  ) {
    updateLogros(
      id: $updateLogrosId
      title: $title
      description: $description
    ) {
      id
      userName
      userId
      title
      description
    }
  }
`
export const DELETE_LOGRO_BY_ID = gql`
  mutation DeleteLogros($deleteLogrosId: String!) {
    deleteLogros(id: $deleteLogrosId) {
      id
      userName
      userId
      title
      description
    }
  }
`
export const ADD_SKILL = gql`
  mutation AddSkill($skillName: String!) {
    addSkill(skillName: $skillName) {
      id
      userName
      userId
      skillName
    }
  }
`

export const GET_SKILL_BY_USER = gql`
  query GetSkillByUser {
    getSkillByUser {
      id
      userName
      userId
      skillName
      imageSkill
    }
  }
`
export const EDIT_SKILL_BY_ID = gql`
  mutation UpdateSkill($updateSkillId: String!, $skillName: String!) {
    updateSkill(id: $updateSkillId, skillName: $skillName) {
      id
      userName
      userId
      skillName
    }
  }
`
export const DELETE_SKILL_BY_ID = gql`
  mutation DeleteSkill($deleteSkillId: String!) {
    deleteSkill(id: $deleteSkillId) {
      id
      userName
      userId
      skillName
    }
  }
`
