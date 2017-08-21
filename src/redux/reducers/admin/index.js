import {CLEAR_ADMIN} from './constants'

export * from './actions'

export const defaultState = null

export default (previousState = defaultState, action) => {
  switch (action.type) {
    case CLEAR_ADMIN:
      return defaultState
    default:
      return previousState
  }
}
