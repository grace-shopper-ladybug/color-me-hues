const Sequelize = require('sequelize')
const db = require('../db')

const HueOrder = db.define('hueOrder', {
  quantity: {
    type: Sequelize.INTEGER
  },
  subTotal: {
    type: Sequelize.INTEGER
  }
})
module.exports = HueOrder
