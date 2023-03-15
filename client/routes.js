import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { me } from './store';
import { Login, Signup } from './components/auth-form';
import AllHues from './components/AllHues';
import SingleHue from './components/SingleHue';
import Admin from './components/Admin';
import EditHue from './components/EditHue';
import Order from './components/Order';
import Checkout from './components/Checkout';
import Orders from './components/Orders';
import UserHome from './components/UserHome';

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn, isAdmin } = this.props;

    return (
      <Switch>
        {/* available to all visitors */}
        <Route exact path="/" component={AllHues} />
        <Route path="/hues/:hueId" component={SingleHue} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/cart" component={Order} />
        <Route path="/checkout" component={Checkout} />

        {isLoggedIn && (
          <Switch>
            {/* available to users */}
            <Route path="/home" component={UserHome} />

            {isAdmin ? (
              <Switch>
                {/* available to admins */}
                <Route path="/admin" component={Admin} />
                <Route path="/orders" component={Orders} />
                <Route path="/hues/:hueId/edit" component={EditHue} />
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

        {/* displays Login component as fallback */}
        <Route component={Login} />
      </Switch>
    );
  }
}

const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    isAdmin: state.user.admin,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));

Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
