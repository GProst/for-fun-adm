import {SET_THEME} from './constants'

export const setTheme = (themeType) => {
  return {
    type: SET_THEME,
    payload: themeType
  }
}
