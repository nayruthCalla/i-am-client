/* eslint-disable import/prefer-default-export */
import { useQuery } from '@apollo/client'
import { GET_USER } from './querysAndMutations'

export const getUserCurrent = () => {
  const result = useQuery(GET_USER)
  return result
}
