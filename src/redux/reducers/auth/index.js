import {CLEAR_TOKEN} from './constants'

export * from './actions'

export const defaultState = {
  token: null
}

export default (previousState = defaultState, action) => {
  switch (action.type) {
    case CLEAR_TOKEN:
      return defaultState
    default:
      return previousState
  }
}
