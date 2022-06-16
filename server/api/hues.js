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

// GET /api/hues/:hueId
router.get('/:hueId', async (req, res, next) => {
  try {
    const hue = await Hue.findByPk(req.params.hueId)
    // include reviews here later
    res.json(hue)
  } catch (err) {
    next(err)
  }
})

// ADMIN ONLY ROUTES
// POST /api/hues/
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Hue.create(req.body))
  } catch (err) {
    next(err)
  }
})

// DELETE /api/hues/:hueId
router.delete('/:hueId', async (req, res, next) => {
  try {
    const hue = await Hue.findByPk(req.params.hueId)
    await hue.destroy()
    res.json(hue)
  } catch (err) {
    next(err)
  }
})

// PUT /api/hues/:id
