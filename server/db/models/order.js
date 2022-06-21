const Sequelize = require('sequelize')
const db = require('../db')
const HueOrder = require('./hueOrder')

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

Order.prototype.calculateTotal = async function() {
  const hueOrders = await HueOrder.findAll({
    where: {
      orderId: this.id
    }
  })

  this.total = hueOrders.reduce((acc, hue) => {
    return acc + hue.subTotal
  }, 0)

  this.save()
}

module.exports = Order
