import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

const connector = connect(
  state => ({
    admin: state.profile
  })
)

export default (WrappedComponent) => {
  const displayName = WrappedComponent.displayName || WrappedComponent.prototype.constructor.name

  return (
    connector(
      class extends Component {
        static displayName = `requireAdmin(${displayName})`

        static propTypes = {
          admin: PropTypes.object
        }

        render () {
          const {admin, ...clearedProps} = this.props
          if (admin === null) {
            return <WrappedComponent {...clearedProps} />
          } else {
            return <Redirect to={{pathname: '/'}} />
          }
        }
      }
    )
  )
}
