import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { ApolloProvider } from 'react-apollo'
import { apolloClient } from './apollo'
import { setupEthers } from './ethers'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

window.addEventListener('load', () => {
  setupEthers('mainnet')
  ReactDOM.render(
    <MuiThemeProvider theme={createMuiTheme({ palette: { type: 'dark' } })}>
      <BrowserRouter>
        <ApolloProvider client={apolloClient}>
          <App />
        </ApolloProvider>
      </BrowserRouter>
    </MuiThemeProvider>,
    document.getElementById('root')
  )
})

registerServiceWorker()
