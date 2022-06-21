import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {me} from './store'
import {
  Login,
  Signup,
  UserHome,
  Storefront,
  SingleHue,
  Admin,
  EditHue,
  Order,
  Checkout
} from './components'

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
        {/* <Route exact path="/admin" component={Admin} /> */}
        <Route exact path="/cart" component={Order} />
        <Route exact path="/checkout" component={Checkout} />

        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route exact path="/home" component={UserHome} />
            {/*
            {isAdmin ? <Nav.Link href="/admin">Admin</Nav.Link> : null} */}

            {isAdmin ? (
              <Switch>
                {/* Routes placed here are only available for admins */}

                <Route exact path="/admin" component={Admin} />
              </Switch>
            ) : (
              <Switch>
                <Route
                  exact
                  path="/admin"
                  render={() => <div>Error: Not an admin</div>}
                />
              </Switch>
            )}
          </Switch>
        )}

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
