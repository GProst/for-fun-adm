import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {clearAdmin} from '../redux/reducers/admin'
import {clearToken} from '../redux/reducers/auth'

const connector = connect(
  state => ({
    admin: state.profile,
    authToken: state.auth.token,
    location: state.router.location
  }),
  dispatch => ({
    clearAdmin: () => {
      dispatch(clearAdmin())
    },
    clearToken: () => {
      dispatch(clearToken())
    }
  })
)

export default (WrappedComponent) => {
  const displayName = WrappedComponent.displayName || WrappedComponent.prototype.constructor.name

  return (
    connector(
      class extends Component {
        static displayName = `requireAdmin(${displayName})`

        static propTypes = {
          authToken: PropTypes.string,
          admin: PropTypes.object,
          location: PropTypes.object.isRequired,
          clearAdmin: PropTypes.func.isRequired,
          clearToken: PropTypes.func.isRequired
        }

        render () {
          const {admin, authToken, location, clearAdmin, clearToken, ...clearedProps} = this.props
          if (authToken !== null && admin !== null) {
            return <WrappedComponent {...clearedProps} />
          } else {
            if (admin !== null) clearAdmin()
            if (authToken !== null) clearToken()
            return <Redirect to={{pathname: '/login', state: {redirect: location.pathname}}} />
          }
        }
      }
    )
  )
}
