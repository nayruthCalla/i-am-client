import { useMutation, useQuery, useLazyQuery } from '@apollo/client'
import {
  ADD_PROYECT,
  DELETE_PROPERTY_BY_ID,
  GET_PROYECT_BY_USER,
  EDIT_USER_BY_ID,
  GET_ABOUT_BY_USERNAME,
  EDIT_ABOUT_BY_ID,
  GET_ABOUT_BY_USERID,
} from './querysAndMutations'

export const useAboutMe = () => {
  const result = useQuery(GET_ABOUT_BY_USERID)
  return result
}
export const useAboutByUserNameQuery = (userName) => {
  const result = useQuery(GET_ABOUT_BY_USERNAME, { variables: { userName } })
  return result
}
export const useAboutByUserName = () => {
  const result = useLazyQuery(GET_ABOUT_BY_USERNAME)
  return result
}
export const useEditAbout = () => {
  const result = useMutation(EDIT_ABOUT_BY_ID, {
    refetchQueries: [GET_ABOUT_BY_USERNAME, 'getAboutMeByUserName'],
  })
  return result
}
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
