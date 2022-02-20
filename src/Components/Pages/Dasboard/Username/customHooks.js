import { useMutation, useQuery } from '@apollo/client'
import { GET_USER_BY_ID_ABOUT, EDIT_USER_BY_ID } from './querysAndMutations'

export const useGetUserAbout = () => {
  const result = useQuery(GET_USER_BY_ID_ABOUT)
  return result
}

export const useEditUser = () => {
  const result = useMutation(EDIT_USER_BY_ID, {
    refetchQueries: [GET_USER_BY_ID_ABOUT, 'getUserByIdAbout'],
  })
  return result
}
