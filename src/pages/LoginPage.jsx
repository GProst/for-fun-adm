import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Button from 'material-ui/Button'

import requireNoAdmin from '../hocs/requireNoAdmin'

const Wrapper = styled.div`
  color: green;
`

class LoginPage extends React.Component {
  render () {
    return (
      <Wrapper>
        You are in Login page!
        <br />
        <Button component={Link} to='/'>
          Go to Main page.
        </Button>
      </Wrapper>
    )
  }
}

export default requireNoAdmin(LoginPage)
