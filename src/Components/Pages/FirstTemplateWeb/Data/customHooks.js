/* eslint-disable import/prefer-default-export */
import { useQuery } from '@apollo/client'
import { GET_PROFILE_USER } from './querysAndMutations'

export const useGetProfileUser = (userName) => {
  const result = useQuery(GET_PROFILE_USER, {
    variables: {
      userName,
      getProfileUserProyectUserName2: userName,
      getProfileUserSkillUserName2: userName,
      getProfileUserLogrosUserName2: userName,
    },
  })
  return result
}
