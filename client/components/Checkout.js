import React from 'react'
import {connect} from 'react-redux'
import {checkoutOrder} from '../store/order'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CheckoutSuccess from './Checkout-Success'

class Checkout extends React.Component {
  constructor(props) {
    super(props)

    // I wanna change it so that if the user is logged in, their info will already be in here once the component mounts
    this.state = {
      customerName: '',
      customerEmail: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  render() {
    const customerName = this.state.customerName
    const customerEmail = this.state.customerEmail

    return (
      <Container className="mt-5">
        <Card>
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="customerName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  name="customerName"
                  value={customerName}
                  onChange={this.handleChange}
                  placeHolder="Full Name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="customerEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="customerEmail"
                  placeholder="Enter email"
                  value={customerEmail}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <CheckoutSuccess
                customerName={customerName}
                customerEmail={customerEmail}
                total={this.props.total}
              />
            </Form>
          </Col>
        </Card>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkoutOrder: order => {
      dispatch(checkoutOrder(order))
    }
  }
}

export default connect(null, mapDispatchToProps)(Checkout)
