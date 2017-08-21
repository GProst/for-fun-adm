import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import {routerMiddleware, routerReducer} from 'react-router-redux'

import history from './history'
import * as reducers from './reducers'

const middleware = [routerMiddleware(history)]

if (process.env.NODE_ENV !== 'production') {
  middleware.push(require('redux-logger').createLogger())
}

let finalCreateStore = compose(applyMiddleware(...middleware))(createStore)

const store = finalCreateStore(combineReducers({
  ...reducers,
  router: routerReducer
}))

if (module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(combineReducers({
      ...reducers,
      router: routerReducer
    }))
  })
}

export default store
