import React from 'react';
import { connect } from 'react-redux';
import { getHues } from '../store/allHues';
import { getCart } from '../store/order';
import Table from 'react-bootstrap/Table';
import { Button, Col, Container, InputGroup } from 'react-bootstrap';
import Checkout from './Checkout';
import { me } from '../store';
import { Plus, Dash } from 'react-bootstrap-icons';

class Order extends React.Component {
  constructor() {
    super();
    this.filterHues = this.filterHues.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  componentDidMount() {
    this.props.getHues();
    this.props.loadUser();
    this.props.getCart();
  }

  addToCart(hueId, hue) {
    // json.stringify method takes in an array/object, and setItem takes in two parameters - a key and a value. the value will be an array.
    let localOrder = localStorage.getItem('order');
    let localOrderItems = localStorage.getItem('orderItems');
    let order = [];
    let orderItems = [];

    // check to see if there are already items in the cart, or if this is a fresh cart.
    if (localOrder) {
      // if there are items in the cart already, move the items from the existing order into the order that we are going to push into our local storage
      order = [...JSON.parse(localOrder)];
      orderItems = [...JSON.parse(localOrderItems)];
    }
    order.push(hueId);
    orderItems.push(hue);

    window.localStorage.setItem('order', JSON.stringify(order));
    window.localStorage.setItem('orderItems', JSON.stringify(orderItems));
  }

  removeFromCart(hueId, hue) {
    let order = JSON.parse(localStorage.getItem('order'));
    let orderItems = JSON.parse(localStorage.getItem('orderItems'));

    for (let i = 0; i < order.length; i++) {
      if (order[i] === hueId) {
        order.splice(i, 1);
        break;
      }
    }

    for (let i = 0; i < orderItems.length; i++) {
      if (orderItems[i].emotionName === hue.emotionName) {
        orderItems.splice(i, 1);
        break;
      }
    }

    window.localStorage.setItem('order', JSON.stringify(order));
    window.localStorage.setItem('orderItems', JSON.stringify(orderItems));
  }

  // map through localStorage for all ids of hues, store ids in array
  // filter through all hues for items with ids included in array
  // use reduce on filtered hues

  filterHues() {
    // if logged in, huesInCart will equal something on the state, and if not logged in, we will take localstorage and set that equal to huesInCart
    const huesInCart = JSON.parse(window.localStorage.getItem('order')); // array of ids of hues stored in localStorage for guest checkout

    // if there are hues in the cart, return them. else, return an empty array or else the cart component will break due to "includes" not working on null.
    if (huesInCart)
      return this.props.hues.filter((hue) => huesInCart.includes(hue.id));
    return [];
  }

  calculateTotal(huesArray) {
    const totalInPennies = huesArray.reduce((acc, hue) => {
      return acc + hue.price;
    }, 0);
    return totalInPennies / 100;
  }

  render() {
    const { isLoggedIn } = this.props;
    const cart = this.props.cart || {};
    // if cart has not rendered yet, set cart.hues array to empty array to avoid mapping issues

    if (!cart.id) {
      cart.hues = [];
    }
    const filteredHues = this.filterHues();

    // if logged in, huesInCart will equal something on the state, and if not logged in, we will take localstorage and set that equal to huesInCart
    const huesInCart = JSON.parse(window.localStorage.getItem('order')) || [];

    const huesObjInCart =
      JSON.parse(window.localStorage.getItem('orderItems')) || [];

    const total = this.calculateTotal(huesObjInCart);

    // use this hash table in order to see quantity
    let huesHash = {};

    for (let i = 0; i < huesInCart.length; i++) {
      if (huesHash[huesInCart[i]]) {
        huesHash[huesInCart[i]]++;
      } else {
        huesHash[huesInCart[i]] = 1;
      }
    }

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
            {isLoggedIn
              ? cart.hues.map((hue) => (
                  <tr key={hue.id}>
                    <td>{hue.id}</td>
                    <td>
                      <img src={hue.image} />
                    </td>
                    <td>{hue.emotionName}</td>
                    <td>${hue.price / 100}</td>
                    <td></td>
                  </tr>
                ))
              : filteredHues.map((hue) => (
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
                              className="quantity-left-minus btn btn-danger btn-number"
                              data-type="minus"
                              data-field=""
                              onClick={() => {
                                this.removeFromCart(hue.id, hue);
                                this.forceUpdate();
                              }}
                            >
                              <Dash />
                            </Button>
                          </span>
                          <input
                            type="text"
                            id="quantity"
                            name="quantity"
                            className="form-control input-number"
                            value={huesHash[hue.id]}
                            min="1"
                            max={hue.quantity}
                          />
                          <span className="input-group-btn">
                            <Button
                              type="button"
                              className="quantity-right-plus btn btn-success btn-number"
                              data-type="plus"
                              data-field=""
                              onClick={() => {
                                this.addToCart(hue.id, hue);
                                this.forceUpdate();
                              }}
                            >
                              <Plus />
                            </Button>
                          </span>
                        </InputGroup>
                      </Col>
                    </td>
                  </tr>
                ))}
          </tbody>
        </Table>
        <Container>
          {isLoggedIn ? (
            <h3 className="pr-5">Total: ${cart.total / 100 || 0}</h3>
          ) : (
            <h3 className="pr-5">
              Total ({huesInCart.length} items): ${total}
            </h3>
          )}

          <Checkout total={total} huesInCart={huesInCart} />
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hues: state.hues,
    cart: state.order,
    isLoggedIn: !!state.user.id,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getHues: () => dispatch(getHues()),
  getCart: () => dispatch(getCart()),
  loadUser: () => dispatch(me()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
