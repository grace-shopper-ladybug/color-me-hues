const Sequelize = require('sequelize')
const db = require('../db')
const User = require('./user')
const Hue = require('./hue')

// --------------- cart model --------------->

// only for logged in users - guests use Local Storage

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
