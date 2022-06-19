import React from 'react'
import {connect} from 'react-redux'
import {getHues} from '../store/allHues'
import Table from 'react-bootstrap/Table'
import {Button, Col, Container, InputGroup} from 'react-bootstrap'

class Order extends React.Component {
  constructor() {
    super()
    this.filterHues = this.filterHues.bind(this)
    this.calculateTotal = this.calculateTotal.bind(this)
  }

  componentDidMount() {
    this.props.getHues()
  }

  // map through localStorage for all ids of hues, store ids in array
  // filter through all hues for items with ids included in array
  // use reduce on filtered hues

  filterHues() {
    const huesInCart = [1, 10, 12] // this will have to be replaced with array of ids of hues stored in localStorage for guests
    return this.props.hues.filter(hue => huesInCart.includes(hue.id))
  }

  calculateTotal(huesArray) {
    const totalInPennies = huesArray.reduce((acc, hue) => {
      return acc + hue.price
    }, 0)
    return totalInPennies / 100
  }

  render() {
    const hues = this.props.hues
    const filteredHues = this.filterHues()
    const total = this.calculateTotal(filteredHues)

    // this is the link I used for the quantity buttons, haven't actually added functionality yet: https://bootsnipp.com/snippets/e3q3a
    return (
      <Container>
        <h1>Shopping Cart</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Hue</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {filteredHues.map(hue => (
              <tr key={hue.id}>
                <td>{hue.id}</td>
                <td>
                  <img src={hue.image} />
                </td>
                <td>{hue.emotionName}</td>
                <td>${hue.price / 100}</td>
                <td>
                  <Col className="lg-2">
                    <InputGroup className="input-group">
                      <span className="input-group-btn">
                        <Button
                          type="button"
                          class="quantity-left-minus btn btn-danger btn-number"
                          data-type="minus"
                          data-field=""
                        >
                          <i className="bi bi-dash"></i>
                        </Button>
                      </span>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        className="form-control input-number"
                        value="1"
                        min="1"
                        max={hue.quantity}
                      />
                      <span className="input-group-btn">
                        <Button
                          type="button"
                          className="quantity-right-plus btn btn-success btn-number"
                          data-type="plus"
                          data-field=""
                        >
                          <i className="bi bi-plus"></i>
                        </Button>
                      </span>
                    </InputGroup>
                  </Col>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <p>Total: ${total}</p>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    hues: state.hues
  }
}

const mapDispatchToProps = dispatch => ({
  getHues: () => dispatch(getHues())
})

export default connect(mapStateToProps, mapDispatchToProps)(Order)
