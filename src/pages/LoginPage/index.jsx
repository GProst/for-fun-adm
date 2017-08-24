import React from 'react'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'

import Typography from '../../components/atoms/Typography'

import requireNoAdmin from '../../hocs/requireNoAdmin'

import {Wrapper, Form, Header, MainContent, Inputs} from './bricks'

class LoginPage extends React.Component {
  state = {
    form: {
      email: {
        required: true,
        value: '',
        error: null
      }
    }
  }

  onSubmit = (event) => {
    event.preventDefault()

    // TODO
  }

  onInputChange (fieldName, event) {
    const {form} = this.state
    const {value} = event.target

    this.setState({
      form: {
        ...form,
        [fieldName]: {
          ...form[fieldName],
          value,
          error: null
        }
      }
    })
  }

  onInputBlur (fieldName, event) {
    const {form} = this.state
    const field = form[fieldName]

    if (field.required && !field.value) {
      const error = fieldName === 'email' ? 'Email field is required' : 'Password is required'

      this.setState({
        form: {
          ...form,
          [fieldName]: {
            ...field,
            error
          }
        }
      })
    }
  }

  render () {
    const {form} = this.state
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
                error={Boolean(form.email.error)}
                fullWidth
                value={form.email.value}
                label='Email'
                helperText={form.email.error}
                onChange={this.onInputChange.bind(this, 'email')}
                onBlur={this.onInputBlur.bind(this, 'email')}
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
