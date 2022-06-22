const Sequelize = require('sequelize')
const db = require('../db')
const HueOrder = require('./hueOrder')

// --------------- order model --------------->

const Order = db.define('order', {
  total: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  isOrder: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  customerName: {
    type: Sequelize.STRING
  },
  customerEmail: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    },
    allowNull: false
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
}

module.exports = Order
