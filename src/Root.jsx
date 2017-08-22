import React from 'react'
import {injectGlobal, ThemeProvider} from 'styled-components'
import {Route, Switch} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import {Provider} from 'react-redux'

import './font'

import history from './redux/history'
import store from './redux/store'
import theme from './theme'

import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'

injectGlobal`
  html {
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html.wf-active {
    font-family: "Roboto", sans-serif;
  }

  html {
    height: 100vh;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  #root {
    height: 100%;
  }
`

class Root extends React.Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ConnectedRouter history={history} store={store}>
            <Switch>
              <Route exact path='/' component={MainPage} />
              <Route exact path='/login' component={LoginPage} />
            </Switch>
          </ConnectedRouter>
        </Provider>
      </ThemeProvider>
    )
  }
}

export default Root
