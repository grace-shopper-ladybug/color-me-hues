import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome} from './components'
import Storefront from './components/Storefront'
import SingleHue from './components/SingleHue'
import {me} from './store'
import Homepage from './components/Homepage'
import Admin from './components/Admin'
import EditHue from './components/EditHue'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn, isAdmin} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={Storefront} />
        <Route exact path="/products" component={Storefront} />
        <Route exact path="/hues/:hueId" component={SingleHue} />
        <Route path="/hues/:hueId/edit" component={EditHue} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/admin" component={Admin} />

        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
          </Switch>
        )}

        {/* {isAdmin && (
          <Switch>
            Routes placed here are only available for admins
            <Route exact path="/admin" component={Admin} />
          </Switch>
        )} */}

        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    isAdmin: state.user.admin
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
