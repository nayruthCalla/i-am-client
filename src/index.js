import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { ApolloProvider } from '@apollo/client'
import client from './config/apolloClient'
import './css/index.css'
import App from './Components/App'
import reportWebVitals from './reportWebVitals'

const domainAth = process.env.REACT_APP_DOMAIN
const clientAth = process.env.REACT_APP_CLIENT_ID

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Auth0Provider
          domain={domainAth}
          clientId={clientAth}
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
