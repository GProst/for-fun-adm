import React from 'react'
import _capitalize from 'lodash-es/capitalize'

import requireNoAdmin from '../../hocs/requireNoAdmin'

import {FieldTypes, isValidField, ErrorTypes} from '../../form'
import api from '../../api'

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
    },
    loading: false
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
    if (this.state.loading) return

    if (this.formIsValid(this.state.form)) {
      this.setState({
        loading: true
      })

      api.login()
        .then(profile => {
          // TODO: set profile and token & redirect
          this.setState({
            loading: false // TODO: I don't think we need it here
          })
        })
        .catch(() => {
          // TODO: handle error => show in popup
          this.setState({
            loading: false
          })
        })
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
    const {form, loading} = this.state

    return (
      <LoginPageTemplate
        form={form}
        onSubmit={this.onSubmit}
        onInputChange={this.onInputChange}
        onInputBlur={this.onInputBlur}
        loading={loading}
      />
    )
  }
}

export default requireNoAdmin(LoginPage)
