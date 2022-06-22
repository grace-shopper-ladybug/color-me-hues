import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import {checkoutOrder} from '../store/order'
import {connect} from 'react-redux'

function CheckoutSuccess(props) {
  console.log(props)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  console.log(props)

  return (
    <>
      <Button variant="outline-success" onClick={handleShow}>
        Checkout
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Thanks!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thanks for your order, {props.customerName}! Order confirmation has
          been sent to {props.customerEmail}.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Cancel
          </Button>
          <Link to="/">
            <Button
              variant="outline-success"
              onClick={() => {
                props.checkoutOrder(props)

                window.localStorage.clear()
              }}
            >
              Confirm
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    checkoutOrder: order => {
      dispatch(checkoutOrder(order))
    }
  }
}

export default connect(null, mapDispatchToProps)(CheckoutSuccess)
