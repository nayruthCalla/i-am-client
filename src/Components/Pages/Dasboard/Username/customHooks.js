import { useMutation, useQuery } from '@apollo/client'
import {
  ADD_PROYECT,
  DELETE_PROPERTY_BY_ID,
  GET_PROYECT_BY_USER,
  EDIT_USER_BY_ID,
} from './querysAndMutations'

export const useAllProyectByUser = () => {
  const result = useQuery(GET_PROYECT_BY_USER)
  return result
}

export const useAddProyects = () => {
  const result = useMutation(ADD_PROYECT, {
    refetchQueries: [GET_PROYECT_BY_USER, 'getProyectByUser'],
  })
  return result
}
export const useDeleteProyect = () => {
  const result = useMutation(DELETE_PROPERTY_BY_ID, {
    refetchQueries: [GET_PROYECT_BY_USER, 'getProyectByUser'],
  })
  return result
}
export const useEditUser = () => {
  const result = useMutation(
    EDIT_USER_BY_ID
    //   , {
    //   refetchQueries: [GET_PROYECT_BY_USER, 'getProyectByUser'],
    // }
  )
  return result
}
