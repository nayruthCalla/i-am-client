import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

// process.env.REACT_APP_BACKEND_URL ||
const httpLink = createHttpLink({
  uri: process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000/graphql',
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  connectToDevTools: true,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    addTypename: false,
  }),
  fetchOptions: {
    mode: 'no-cors',
  },
})
export default client
