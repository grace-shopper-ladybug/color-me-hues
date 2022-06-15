import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    {/* This vvvvv is the left section in the navbar */}
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        Something You Could Hues
      </a>
      {/* prob replace that ^^^^ with an icon or logo of some sort */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* This is the HOME button in the navbar */}
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            {/* This is the LINK button in the navbar, we can customize it later */}
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
        </ul>

        {/* This is the right section of the navbar --- this specific section is for the search form */}
        <div className="d-flex flex-row justify-content-end">
          <form className="d-flex ">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          {/* Depending on whether the user is logged in or not, different links will show. ie here, I have it so that when the user is logged in, they can see a dropdown menu and access their account home page, the logout button, their orders, reviews, etc */}
          {isLoggedIn ? (
            <div>
              {/* The navbar will show these links after you log in */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {/* We don't have a state yet, but I would hope that when we get that down we can implement this so that when users are logged in and they press the dropdown, it would greet them by the name that is on state */}
                  <li>Hi, USERNAMEHERE</li>
                  <li>
                    <a className="dropdown-item" href="/home">
                      Account
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Orders
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Reviews
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" onClick={handleClick}>
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </div>
          ) : (
            <div>
              {/* The navbar will show these links before you log in */}
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  </nav>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
