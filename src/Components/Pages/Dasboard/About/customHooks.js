import { useMutation, useQuery } from '@apollo/client'
import {
  EDIT_ABOUT_BY_ID,
  GET_ABOUT_BY_USERID,
  DELETE_ABOUT_BY_ID,
  ADD_ABOUT_ME,
} from './querysAndMutations'

export const useAboutMe = () => {
  const result = useQuery(GET_ABOUT_BY_USERID)
  return result
}
export const useAddAbout = () => {
  const result = useMutation(ADD_ABOUT_ME, {
    refetchQueries: [GET_ABOUT_BY_USERID, 'GetAboutMe'],
  })
  return result
}
export const useEditAbout = () => {
  const result = useMutation(EDIT_ABOUT_BY_ID, {
    refetchQueries: [GET_ABOUT_BY_USERID, 'GetAboutMe'],
  })
  return result
}
export const useDeleteAbout = () => {
  const result = useMutation(DELETE_ABOUT_BY_ID, {
    refetchQueries: [GET_ABOUT_BY_USERID, 'GetAboutMe'],
  })
  return result
}
