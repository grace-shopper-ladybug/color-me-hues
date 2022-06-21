import React from 'react'
import {connect} from 'react-redux'
import {checkoutOrder} from '../store/order'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

class Checkout extends React.Component {
  constructor() {
    super()

    // I wanna change it so that if the user is logged in, their info will already be in here once the component mounts
    this.state = {
      customerName: '',
      customerEmail: ''
    }
  }

  render() {
    return (
      <Container className="mt-5">
        <Card>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="FullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="FullName" placeholder="Full Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              {/* <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group> */}
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Card>
      </Container>
    )
  }
}

export default Checkout
