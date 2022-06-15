import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import AllHues from './AllHues'
import Navbar from './Navbar'

class Storefront extends React.Component {
  render() {
    return (
      <div>
        <h1> hi this is the storefront yay</h1>
        {/* discuss what storefront should look like */}
        <AllHues />
      </div>
    )
  }
}

export default Storefront
