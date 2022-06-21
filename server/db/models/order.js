const Sequelize = require('sequelize')
const db = require('../db')
const User = require('./user')
const Hue = require('./hue')

// --------------- cart model --------------->

// only for logged in users - guests use Local Storage

const Order = db.define('order', {
  total: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  isOrder: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Order
