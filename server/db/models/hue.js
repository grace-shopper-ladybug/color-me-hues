const Sequelize = require('sequelize')
const db = require('../db')
const User = require('./user')

// --------------- hue model --------------->

const Hue = db.define('hue', {
  emotionName: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  emotionHue: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: '/images/colors.png'
  },
  description: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  shortDescription: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  hueColorFamily: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['warm', 'cool', 'neutral']]
      // this can be changed, only assigned for general testing
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    max: 10
  },
  price: {
    type: Sequelize.INTEGER, // avoid issues with math with decimal and floats, use pennies and divide by 100 on front-end
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Hue
