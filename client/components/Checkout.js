import React from 'react'
import {connect} from 'react-redux'
import {checkoutOrder} from '../store/order'

class Checkout extends React.Component {
  constructor() {
    super()

    this.state = {
      customerName: '',
      customerEmail: '',
      customerNumber: '',
      customerAddress: ''
    }
  }

  render() {}
}
