import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavigationBar = ({handleClick, isLoggedIn, isAdmin}) => (
  <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="/">
        <img
          src="/images/icon.png"
          width="50"
          height="50"
          alt="House of Hues"
        />
      </Navbar.Brand>
      {/* <Navbar.Brand>House of Hues</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{maxHeight: '100px'}}
          navbarScroll
        >
          <Nav.Link href="/">All Products</Nav.Link>

          {isAdmin ? <Nav.Link href="/admin">Admin</Nav.Link> : null}
        </Nav>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <NavDropdown title="Account" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/home">Account</NavDropdown.Item>
              <NavDropdown.Item href="/orders">Orders</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" onClick={handleClick}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        ) : (
          <div className="nav-bar-links">
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
        <Nav.Link href="/cart">
          <i
            className="bi bi-cart"
            style={{fontSize: '30px', color: 'black'}}
          />
        </Nav.Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    isAdmin: state.user.admin
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(NavigationBar)

/**
 * PROP TYPES
 */
NavigationBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
