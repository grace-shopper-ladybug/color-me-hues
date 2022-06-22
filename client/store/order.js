import axios from 'axios'

// action type constants

const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const CHECKOUT_ORDER = 'CHECKOUT_ORDER'

// action creators

export const _getCart = cart => ({
  type: GET_CART,
  cart
})

export const _addToCart = cart => ({
  type: ADD_TO_CART,
  cart
})

export const _checkoutOrder = order => ({
  type: CHECKOUT_ORDER,
  order
})

// thunk creators

// export const getCart = orderId => {
//   return async dispatch => {
//     try {
//       const {data: order} = await Axios.get(`/api/orders/${orderId}`)
//       dispatch(_getCart(order))
//     } catch (err) {
//       console.log(err)
//     }
//   }
// }

export const getCart = () => {
  return async dispatch => {
    const {data: order} = await axios.get('/api/orders/cart')
    dispatch(_getCart(order))
  }
}

export const addToCart = hue => {
  return async dispatch => {
    const {data: order} = await axios.post(`/api/orders/${hue.id}`)
    dispatch(_addToCart(order))
  }
}

export const checkoutOrder = order => {
  return async dispatch => {
    const {data: ordered} = await axios.post('/api/orders', order)
    dispatch(_checkoutOrder(ordered))
  }
}

// reducers
export default function orderReducer(state = [], action) {
  switch (action.type) {
    case GET_CART:
      return action.cart
    case ADD_TO_CART:
      return action.cart
    case CHECKOUT_ORDER:
      return [...state, action.order]
    default:
      return state
  }
}
