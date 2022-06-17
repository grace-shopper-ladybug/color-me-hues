const Sequelize = require('sequelize')
const db = require('../db')
const User = require('./user')
const Hue = require('./hue')

// --------------- hue model --------------->

const Cart = db.define('cart', {
  items: {
    type: Sequelize.ARRAY
  },
  subTotal: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  isOrder: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Cart
