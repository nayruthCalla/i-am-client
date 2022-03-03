/* eslint-disable import/prefer-default-export */
// import { useQuery } from '@apollo/client'
import { useLazyQuery } from '@apollo/client'
import { GET_PROYECTS_BY_USERGITHUB } from './querysAndMutations'

export const useGetProyectbyUserGithub = (userName, nameProyect) => {
  const result = useLazyQuery(GET_PROYECTS_BY_USERGITHUB, {
    variables: {
      owner: userName,
      name: nameProyect,
      first: 10,
      first1: 10,
    },
  })
  return result
}
