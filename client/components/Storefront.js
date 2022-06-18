import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import AllHues from './AllHues'

class Storefront extends React.Component {
  render() {
    return (
      <div>
        <AllHues />
      </div>
    )
  }
}

export default Storefront
