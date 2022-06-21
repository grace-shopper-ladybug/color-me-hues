import React from 'react'
import {connect} from 'react-redux'
import {checkoutOrder} from '../store/order'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class Checkout extends React.Component {
  constructor() {
    super()

    // I wanna change it so that if the user is logged in, their info will already be in here once the component mounts
    this.state = {
      customerName: '',
      customerEmail: '',
      customerNumber: '',
      customerAddress: ''
    }
  }

  render() {
    return (
      <div>
        <h1> hi!</h1>
      </div>
    )
  }
}

export default Checkout
