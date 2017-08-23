import {SET_THEME} from './constants'
import {ThemeType} from '../../../theme/constants'

export * from './actions'

export const defaultState = ThemeType.light

export default (previousState = defaultState, action) => {
  switch (action.type) {
    case SET_THEME:
      return action.payload
    default:
      return previousState
  }
}
