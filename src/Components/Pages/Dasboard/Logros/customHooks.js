import { useMutation, useQuery } from '@apollo/client'
import {
  ADD_SKILL,
  GET_SKILL_BY_USER,
  EDIT_SKILL_BY_ID,
  DELETE_SKILL_BY_ID,
  ADD_LOGRO,
  GET_LOGROS,
  EDIT_LOGRO_BY_USER,
  DELETE_LOGRO_BY_ID,
} from './querysAndMutations'

export const useAddLogro = () => {
  const result = useMutation(ADD_LOGRO, {
    refetchQueries: [GET_LOGROS, 'getLogrosByUser'],
  })
  return result
}
export const useAllLogrosByUser = () => {
  const result = useQuery(GET_LOGROS)
  return result
}
export const useEditLogro = () => {
  const result = useMutation(EDIT_LOGRO_BY_USER, {
    refetchQueries: [GET_LOGROS, 'getLogrosByUser'],
  })
  return result
}
export const useDeleteLogro = () => {
  const result = useMutation(DELETE_LOGRO_BY_ID, {
    refetchQueries: [GET_LOGROS, 'getLogrosByUser'],
  })
  return result
}

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
