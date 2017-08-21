import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import requireAdmin from '../hocs/requireAdmin'

const Wrapper = styled.div`
  color: blue;
`

class MainPage extends React.Component {
  render () {
    return (
      <Wrapper>
        You are in Main page!
        <br />
        <Link to='/login'>
          Go to Login page.
        </Link>
      </Wrapper>
    )
  }
}

export default requireAdmin(MainPage)
