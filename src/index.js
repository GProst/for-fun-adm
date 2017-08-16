import ReactDOM from 'react-dom'
import React from 'react'
import {AppContainer} from 'react-hot-loader' // TODO: remove in production

import Root from './Root'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Root)

if (module.hot) {
  module.hot.accept('./Root', () => { render(Root) })
}
