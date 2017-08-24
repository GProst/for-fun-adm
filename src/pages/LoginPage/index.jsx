import React from 'react'
import _capitalize from 'lodash-es/capitalize'

import requireNoAdmin from '../../hocs/requireNoAdmin'

import {FieldTypes, isValidField, ErrorTypes} from '../../form'

import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Typography from '../../components/atoms/Typography'
import {Wrapper, Form, Header, MainContent, Inputs} from './bricks'

// TODO: create separate template for the page
class LoginPage extends React.Component {
  state = {
    form: {
      email: {
        required: true,
        value: '',
        type: FieldTypes.email,
        error: null
      }
    }
  }

  checkFieldIsValid (fieldName) {
    const {form} = this.state
    const field = form[fieldName]

    let errorText = null
    const isValid = isValidField(field)

    if (!isValid.status) {
      const {error} = isValid

      switch (error) {
        case ErrorTypes.generic.required:
          errorText = `${_capitalize(fieldName)} field is required`
          break
        case ErrorTypes[FieldTypes.email].format:
          errorText = 'Please enter a valid email'
      }
    }

    this.setState({
      form: {
        ...form,
        [fieldName]: {
          ...field,
          error: errorText
        }
      }
    })
  }

  formIsValid (form) {
    return Object.values(form).reduce((isValid, field) => {
      return isValid && isValidField(field).status
    }, true)
  }

  formShowsErrors (form) {
    return Object.values(form).reduce((hasErrors, field) => {
      return hasErrors || Boolean(field.error)
    }, false)
  }

  onSubmit = (event) => {
    event.preventDefault()

    if (this.formIsValid(this.state.form)) {
      // TODO
      console.log('submitting')
    }
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
    this.checkFieldIsValid(fieldName)
  }

  render () {
    const {form} = this.state
    const disabled = this.formShowsErrors(form)

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
            <Button raised color='primary' type='submit' disabled={disabled}>
              Login
            </Button>
          </MainContent>
        </Form>
      </Wrapper>
    )
  }
}

export default requireNoAdmin(LoginPage)
