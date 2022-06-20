const router = require('express').Router()
const {Order, User, Hue} = require('../db/models')

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
    res.json(newOrder)
  } catch (err) {
    next(err)
  }
})

// GET /api/orders/:userId
router.get('/:userId/:hueId', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      where: {userId: req.params.userId}
    })
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

// POST /api/orders/:userId/:productId
// add to cart button for logged-in users
router.post('/:userId/:hueId', async (req, res, next) => {
  try {
    // Check that there's an open order (cart) associated with the user
    const [order] = await Order.findOrCreate({
      where: {userId: req.params.userId, isOrder: false},
      include: User
    })

    // create relationship between open order (cart) and hue
    const hue = await Hue.findByPk(req.params.hueId)
    await order.addHue(hue)
    res.json(order)
  } catch (err) {
    next(err)
  }
})

//   if (isLoggedIn)
// clicking add to cart button will call thunk that calls post route.
// post route uses magic method to set up relationship between Hue and Cart
// relationship should be between order = Order.FindOrCreate(...) and hue = Hue.findByPk(hueId)
// order.setHue(hue) or order.addHue(hue)
