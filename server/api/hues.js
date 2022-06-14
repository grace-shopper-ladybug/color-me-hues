const router = require('express').Router()
const {Hue} = require('../db/models')

module.exports = router

// GET /api/hues
router.get('/', async (req, res, next) => {
  try {
    const hues = await Hue.findAll()
    res.json(hues)
  } catch (err) {
    next(err)
  }
})

// GET /api/hues/:id
router.get('/:hueId', async (req, res, next) => {
  try {
    const hue = await Hue.findByPk(req.params.hueId)
    // include reviews here later
    res.json(hue)
  } catch (err) {
    next(err)
  }
})
