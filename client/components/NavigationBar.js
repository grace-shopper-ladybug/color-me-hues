import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import FilterDropDown from './FilterDropDown'

const NavigationBar = ({handleClick, isLoggedIn}) => (
  <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="/">
        <img src="/images/icon.png" width="50" height="50" alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{maxHeight: '100px'}}
          navbarScroll
        >
          <Nav.Link href="/">All Products</Nav.Link>
          <Nav.Link href="/admin">Admin</Nav.Link>
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

  // <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //   {/* This vvvvv is the left section in the navbar */}
  //   <div className="container-fluid">
  //     <a className="navbar-brand" href="/">
  //       <img src="/images/icon.png" width="50" height="50" alt="" />
  //     </a>
  //     {/* prob replace that ^^^^ with an icon or logo of some sort */}
  //     <button
  //       className="navbar-toggler"
  //       type="button"
  //       data-bs-toggle="collapse"
  //       data-bs-target="#navbarSupportedContent"
  //       aria-controls="navbarSupportedContent"
  //       aria-expanded="false"
  //       aria-label="Toggle navigation"
  //     >
  //       <span className="navbar-toggler-icon" />
  //     </button>

  //     <div
  //       className="d-flex collapse navbar-collapse"
  //       id="navbarSupportedContent"
  //     >
  //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  //         <li className="nav-item">
  //           {/* This is the HOME button in the navbar */}
  //           <a className="nav-link active" aria-current="page" href="/">
  //             Home
  //           </a>
  //         </li>
  //         <li className="nav-item">
  //           {/* This is the LINK button in the navbar, we can customize it later */}
  //           <a className="nav-link" href="#">
  //             Link
  //           </a>
  //         </li>
  //       </ul>

  //       {/* This is the right section of the navbar --- this specific section is for the search form */}
  //       <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
  //         <ul className="navbar-nav">
  //           <li className="nav-item dropdown">
  //             <a
  //               className="nav-link dropdown-toggle"
  //               href="#"
  //               id="navbarDarkDropdownMenuLink"
  //               role="button"
  //               data-bs-toggle="dropdown"
  //               aria-expanded="false"
  //             >
  //               Filter By
  //             </a>
  //             <ul
  //               className="dropdown-menu dropdown-menu-dark"
  //               aria-labelledby="navbarDarkDropdownMenuLink"
  //             >
  //               <li>
  //                 <a className="dropdown-item" href="#">
  //                   Action
  //                 </a>
  //               </li>
  //               <li>
  //                 <a className="dropdown-item" href="#">
  //                   Another action
  //                 </a>
  //               </li>
  //               <li>
  //                 <a className="dropdown-item" href="#">
  //                   Something else here
  //                 </a>
  //               </li>
  //             </ul>
  //           </li>
  //         </ul>
  //       </div>

  //       {/* Depending on whether the user is logged in or not, different links will show. ie here, I have it so that when the user is logged in, they can see a dropdown menu and access their account home page, the logout button, their orders, reviews, etc */}
  //       {isLoggedIn ? (
  //         <div>
  //           {/* The navbar will show these links after you log in */}
  //           <li className="nav-item dropdown">
  //             <a
  //               className="nav-link dropdown-toggle"
  //               href="#"
  //               id="navbarDropdown"
  //               role="button"
  //               data-bs-toggle="dropdown"
  //               aria-expanded="false"
  //             >
  //               Dropdown
  //             </a>
  //             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
  //               {/* We don't have a state yet, but I would hope that when we get that down we can implement this so that when users are logged in and they press the dropdown, it would greet them by the name that is on state */}
  //               <li>Hi, USERNAMEHERE</li>
  //               <li>
  //                 <a className="dropdown-item" href="/home">
  //                   Account
  //                 </a>
  //               </li>
  //               <li>
  //                 <a className="dropdown-item" href="#">
  //                   Orders
  //                 </a>
  //               </li>
  //               <li>
  //                 <a className="dropdown-item" href="#">
  //                   Reviews
  //                 </a>
  //               </li>
  //               <li>
  //                 <hr className="dropdown-divider" />
  //               </li>
  //               <li>
  //                 <a className="dropdown-item" href="#" onClick={handleClick}>
  //                   Logout
  //                 </a>
  //               </li>
  //             </ul>
  //           </li>
  //         </div>
  //       ) : (
  //         <div>
  //           {/* The navbar will show these links before you log in */}
  //           <Link to="/login">Login</Link>
  //           <Link to="/signup">Sign Up</Link>
  //         </div>
  //       )}
  //       <a className="nav-link active" aria-current="page" href="/cart">
  //         <i className="bi bi-cart" style={{fontSize: '1.5rem'}} />
  //       </a>
  //     </div>
  //   </div>
  // </nav>
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

export default connect(mapState, mapDispatch)(NavigationBar)

/**
 * PROP TYPES
 */
NavigationBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
