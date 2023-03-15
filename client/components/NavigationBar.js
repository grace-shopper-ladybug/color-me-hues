import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavigationBar = ({ handleClick, isLoggedIn, isAdmin }) => (
  <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand as={Link} to="/">
        <img
          src="/images/icon.png"
          width="50"
          height="50"
          alt="Color Me Hues"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link as={Link} to="/shop">
            Shop All
          </Nav.Link>
        </Nav>

        {isLoggedIn ? (
          <NavDropdown title="Account" id="navbarScrollingDropdown">
            {/* shows after you log in */}
            <NavDropdown.Item as={Link} to="/home">
              Account
            </NavDropdown.Item>
            {isAdmin && (
              <NavDropdown.Item as={Link} to="/admin">
                Admin
              </NavDropdown.Item>
            )}
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={handleClick}>Logout</NavDropdown.Item>
          </NavDropdown>
        ) : (
          <Nav>
            {/* shows before you log in */}
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              Sign Up
            </Nav.Link>
          </Nav>
        )}
        <Nav.Link as={Link} to="/cart">
          Cart
        </Nav.Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    isAdmin: state.user.admin,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(NavigationBar);

NavigationBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
