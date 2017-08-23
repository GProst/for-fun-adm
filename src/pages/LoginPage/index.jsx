import React from 'react'
import Button from 'material-ui/Button'

import Typography from '../../components/atoms/Typography'

import requireNoAdmin from '../../hocs/requireNoAdmin'

import {Wrapper, Form, Header, MainContent} from './bricks'

class LoginPage extends React.Component {
  render () {
    return (
      <Wrapper>
        <Form>
          <Header>
            <Typography color={{type: 'common', payload: 'white'}} type='display1'>
              Login to proceed
            </Typography>
          </Header>
          <MainContent>
            <Button color='primary'>
              Login
            </Button>
          </MainContent>
        </Form>
      </Wrapper>
    )
  }
}

export default requireNoAdmin(LoginPage)
