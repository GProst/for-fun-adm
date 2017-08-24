import React from 'react'
import _capitalize from 'lodash-es/capitalize'

import requireNoAdmin from '../../hocs/requireNoAdmin'

import {FieldTypes, isValidField, ErrorTypes} from '../../form'

import LoginPageTemplate from '../../templates/LoginPage'

class LoginPage extends React.Component {
  state = {
    form: {
      email: {
        required: true,
        value: '',
        type: FieldTypes.email,
        error: null,
        id: 'login-form-email'
      },
      password: {
        required: true,
        value: '',
        type: FieldTypes.password,
        error: null,
        id: 'login-form-password'
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

  onSubmit = (event) => {
    event.preventDefault()

    if (this.formIsValid(this.state.form)) {
      // TODO
      console.log('submitting')
    }
  }

  onInputChange = (fieldName, event) => {
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

  onInputBlur = (fieldName, event) => {
    this.checkFieldIsValid(fieldName)
  }

  render () {
    const {form} = this.state

    return (
      <LoginPageTemplate
        form={form}
        onSubmit={this.onSubmit}
        onInputChange={this.onInputChange}
        onInputBlur={this.onInputBlur}
      />
    )
  }
}

export default requireNoAdmin(LoginPage)
