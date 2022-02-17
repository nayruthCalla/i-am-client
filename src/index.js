import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import './css/index.css'
import App from './Components/App'
import reportWebVitals from './reportWebVitals'

const client = new ApolloClient({
  connectToDevTools: true,
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Auth0Provider
          domain="dev-nrm0r917.us.auth0.com"
          clientId="XfmeMUDbnne0jqYJWg9qZn0nhK5KGwXo"
          redirectUri={window.location.origin}
        >
          <App />
        </Auth0Provider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
