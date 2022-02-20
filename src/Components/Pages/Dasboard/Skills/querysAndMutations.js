import { gql } from '@apollo/client'

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
