import { useMutation, useQuery } from '@apollo/client'
import {
  ADD_SKILL,
  GET_SKILL_BY_USER,
  EDIT_SKILL_BY_ID,
  DELETE_SKILL_BY_ID,
} from './querysAndMutations'

export const useAllSkillByUser = () => {
  const result = useQuery(GET_SKILL_BY_USER)
  return result
}
export const useAddSkill = () => {
  const result = useMutation(ADD_SKILL, {
    refetchQueries: [GET_SKILL_BY_USER, 'getSkillByUser'],
  })
  return result
}
export const useEditSkill = () => {
  const result = useMutation(EDIT_SKILL_BY_ID, {
    refetchQueries: [GET_SKILL_BY_USER, 'getSkillByUser'],
  })
  return result
}
export const useDeleteSkill = () => {
  const result = useMutation(DELETE_SKILL_BY_ID, {
    refetchQueries: [GET_SKILL_BY_USER, 'getSkillByUser'],
  })
  return result
}
