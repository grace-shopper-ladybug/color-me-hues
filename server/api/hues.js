const router = require('express').Router()
const {Hue} = require('../db/models')

module.exports = router

// GET /api/hues
router.get('/', async (req, res, next) => {
  try {
    const hues = await Hue.findAll()
    res.send(hues)
  } catch (err) {
    next(err)
  }
})
