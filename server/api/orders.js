const router = require('express').Router()
const {Order} = require('../db/models')

module.exports = router

// GET /api/orders
router.get('/', async (req, res, next) => {
  try {
    const hues = await Order.findAll()
    res.json(hues)
  } catch (err) {
    next(err)
  }
})

// POST /api/orders
router.post('/', async (req, res, next) => {
  try {
    const newOrder = await Order.create(req.body)
    res.send(newOrder)
  } catch (err) {
    next(err)
  }
})
