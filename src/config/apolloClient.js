import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token')
  // return the headers to the context so httpLink can read them
  // console.log(token)
  return {
    headers: {
      ...headers,
      authorization: token || '',
    },
  }
})

const client = new ApolloClient({
  connectToDevTools: true,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    addTypename: false,
  }),
})
export default client
