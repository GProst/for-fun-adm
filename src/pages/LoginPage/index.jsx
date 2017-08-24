import React from 'react'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'

import Typography from '../../components/atoms/Typography'

import requireNoAdmin from '../../hocs/requireNoAdmin'

import {Wrapper, Form, Header, MainContent, Inputs} from './bricks'

class LoginPage extends React.Component {
  state = {
    form: {
      email: ''
    }
  }

  onSubmit = (event) => {
    event.preventDefault()

    // TODO
  }

  onInputChange (field, event) {
    const {form} = this.state
    const {value} = event.target

    this.setState({
      form: {
        ...form,
        [field]: value
      }
    })
  }

  render () {
    return (
      <Wrapper>
        <Form onSubmit={this.onSubmit} component='form'>
          <Header>
            <Typography color={{type: 'common', payload: 'white'}} type='display1'>
              Login to proceed
            </Typography>
          </Header>
          <MainContent>
            <Inputs>
              <TextField
                fullWidth
                value={this.state.form.email}
                label='Email'
                onChange={this.onInputChange.bind(this, 'email')}
              />
            </Inputs>
            <Button raised color='primary' type='submit'>
              Login
            </Button>
          </MainContent>
        </Form>
      </Wrapper>
    )
  }
}

export default requireNoAdmin(LoginPage)
