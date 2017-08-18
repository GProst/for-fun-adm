import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  color: blue;
`

export default class Root extends React.Component {
  render () {
    return (
      <Wrapper>
        Hello, Admin ;)
      </Wrapper>
    )
  }
}
