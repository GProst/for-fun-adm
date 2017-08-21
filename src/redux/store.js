import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import {routerMiddleware, routerReducer} from 'react-router-redux'

import history from './history'

const middleware = [routerMiddleware(history)]

if (process.env.NODE_ENV !== 'production') {
  middleware.push(require('redux-logger').createLogger())
}

let finalCreateStore = compose(applyMiddleware(...middleware))(createStore)

const store = finalCreateStore(combineReducers({
  router: routerReducer
}))

if (module.hot) {
  // module.hot.accept('./reducers', () => { TODO
  //   store.replaceReducer(combineReducers({
  //     router: routerReducer
  //   }))
  // })
}

export default store
