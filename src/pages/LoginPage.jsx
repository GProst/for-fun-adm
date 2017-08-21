import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Wrapper = styled.div`
  color: green;
`

export default class LoginPage extends React.Component {
  render () {
    return (
      <Wrapper>
        You are in Login page!
        <br />
        <Link to='/'>
          Go to Main page.
        </Link>
      </Wrapper>
    )
  }
}
