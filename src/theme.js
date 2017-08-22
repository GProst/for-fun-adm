export const breakpointValues = { // TODO
  lgStart: 1366, // large
  mdStart: 1024 // middle
}

const theme = {
  colors: { // TODO: palette
    grey: '#eee'
  },
  breakpoints: {
    lg: `(min-width: ${breakpointValues.lgStart}px)`,
    ltLg: `(max-width: ${breakpointValues.lgStart - 1}px)`,
    md: `(min-width: ${breakpointValues.mdStart}px) and (max-width: ${breakpointValues.lgStart - 1}px)`,
    ltMd: `(max-width: ${breakpointValues.mdStart - 1}px)`,
    gtMd: `(min-width: ${breakpointValues.mdStart}px)`
  }
}

export default theme
