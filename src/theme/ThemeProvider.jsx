import React from 'react'
import PropTypes from 'prop-types'
import {ThemeProvider as CSThemeProvider} from 'styled-components'
import {connect} from 'react-redux'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import createPalette from 'material-ui/styles/palette'

import {ThemeType, themes, mediaQuery, breakpoints} from './constants'

const connector = connect(state => ({
  theme: state.theme
}))

class ThemeProvider extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    theme: PropTypes.oneOf(Object.values(ThemeType)).isRequired
  }

  state = {}

  setTheme (themeType) {
    const theme = themes.get(themeType)

    const muiTheme = createMuiTheme({
      ...theme,
      palette: createPalette({
        ...theme.palette,
        type: themeType
      }),
      mediaQuery,
      breakpoints
    })

    console.log('muiTheme', muiTheme)

    this.setState({
      theme: muiTheme
    })
  }

  componentWillMount () {
    this.setTheme(this.props.theme)
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.theme !== nextProps.theme) {
      this.setTheme(nextProps.theme)
    }
  }

  render () {
    const {theme} = this.state

    return (
      <CSThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          {this.props.children}
        </MuiThemeProvider>
      </CSThemeProvider>
    )
  }
}

export default connector(ThemeProvider)
