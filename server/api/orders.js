const router = require('express').Router()
const {Order, User, Hue, HueOrder} = require('../db/models')

module.exports = router

// GET /api/orders
router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll()
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

// POST /api/orders
router.post('/', async (req, res, next) => {
  try {
    const newOrder = await Order.create(req.body)
    console.log(req.body)
    res.json(newOrder)
  } catch (err) {
    next(err)
  }
})

// GET /api/orders/:userId
router.get('/:userId', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      where: {userId: req.user.id}
    })
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

// POST /api/orders/:userId/:hueId
// add to cart button for logged-in users
router.post('/:hueId', async (req, res, next) => {
  try {
    let hue = await Hue.findByPk(req.params.hueId)

    let [order] = await Order.findOrCreate({
      where: {userId: req.user.id, isOrder: false},
      include: Hue
    })

    if (await order.hasHue(hue.id)) {
      const hueOrder = await HueOrder.findOne({
        where: {orderId: order.id, hueId: hue.id}
      })
      let newQty = hueOrder.quantity + 1
      await hueOrder.update({quantity: newQty, subTotal: hue.price * newQty})
      await hueOrder.save()
    } else {
      await order.addHue(hue.id, {through: {quantity: 1, subTotal: hue.price}})
    }
    await order.calculateTotal()
    res.json(order)
  } catch (err) {
    next(err)
  }
})

// POST /api/orders for guest checkout
router.post('/:hueId', async (req, res, next) => {
  try {
    // create an order instance with the customer name and email from the checkout page
    let order = await Order.create({})

    order.addHue()
  } catch (err) {
    next(err)
  }
})
