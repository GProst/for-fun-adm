import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

import requireNoAdmin from '../../hocs/requireNoAdmin'

import {Wrapper, Form, Header, MainContent} from './bricks'

class LoginPage extends React.Component {
  render () {
    return (
      <Wrapper>
        <Form>
          <Header>
            <Typography type='display1'>
              You are in Login page!
            </Typography>
          </Header>
          <MainContent>
            <Button component={Link} to='/'>
              Go to Main page.
            </Button>
          </MainContent>
        </Form>
      </Wrapper>
    )
  }
}

export default requireNoAdmin(LoginPage)
