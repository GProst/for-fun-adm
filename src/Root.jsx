import React from 'react'
import {injectGlobal} from 'styled-components'
import {Route, Switch} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import {Provider} from 'react-redux'

import './font'

import {ThemeProvider} from './theme'

import history from './redux/history'
import store from './redux/store'

import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage/index'

injectGlobal`
  html {
    font-size: 16px;
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ${''/* TODO: font-size for smaller resolutions */}
  }

  html.wf-active {
    font-family: "Roboto", sans-serif;
  }

  html {
    height: 100vh;
  }

  body {
    height: 100%;
  }

  #root {
    height: 100%;
  }
  
  * {
    margin: 0;
    padding: 0;
  }
`

class Root extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history} store={store}>
          <ThemeProvider>
            <Switch>
              <Route exact path='/' component={MainPage} />
              <Route exact path='/login' component={LoginPage} />
            </Switch>
          </ThemeProvider>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default Root
