const router = require('express').Router()
const {Order, User, Hue, HueOrder} = require('../db/models')
const {isAdmin} = require('./gatekeepingMiddleWare')

module.exports = router

// ------- ADMIN ACCESS -------

// GET /api/orders
// Get all orders
router.get('/', isAdmin, async (req, res, next) => {
  try {
    const orders = await Order.findAll()
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

// GET /api/orders/:userId
// Get all orders associated with a user
// router.get('/:userId', isAdmin, async (req, res, next) => {
//   try {
//     const orders = await Order.findAll({
//       where: {userId: req.params.userId}
//     })
//     res.json(orders)
//   } catch (err) {
//     next(err)
//   }
// })

// ------- USER -------
// GET /api/orders/cart
// Get cart for logged-in users
router.get('/cart', async (req, res, next) => {
  try {
    let order = await Order.findOne({
      where: {
        userId: req.user.id,
        isOrder: false
      },
      include: Hue
    })
    res.json(order)
  } catch (err) {
    next(err)
  }
})

// POST /api/orders/:hueId
// Add to cart for logged-in users
router.post('/:hueId', async (req, res, next) => {
  try {
    let hue = await Hue.findByPk(req.params.hueId)

    let [order] = await Order.findOrCreate({
      where: {userId: req.user.id, isOrder: false},
      defaults: {
        customerEmail: req.user.email
      },
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
    await order.save()
    res.json(order)
  } catch (err) {
    next(err)
  }
})

// POST /api/orders/checkout
// Check out for logged-in uers
// router.post('/checkout', async (req, res, next) => {
//   try {
//     const newOrder = await Order.create(req.body)
//     res.json(newOrder)
//   } catch (err) {
//     next(err)
//   }
// })

// ------- GUEST -------
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
