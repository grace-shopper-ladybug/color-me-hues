const router = require('express').Router()
const {Hue} = require('../db/models')

module.exports = router

// GET /api/hues
router.get('/', async (req, res, next) => {
  try {
    const hues = await Hue.findAll()
    console.log(hues)
    res.json(hues)
  } catch (err) {
    next(err)
  }
})
