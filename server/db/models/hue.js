const Sequelize = require ('sequelize')

// --------------- hue model --------------->

module.exports = (sequelize) => {
  const Hue = sequelize.define('hue', {
    emotionName: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
    }
    },
    emotionHue: {
      type: Sequelize.STRING,
      defaultValue: '/images/colors.png'
    },
    description: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
    }},
    hueColorFamily: {
      type: Sequelize.STRING,
      validate: {
        isIn: [['orange', 'red', 'blue', 'green', "yellow", "purple"]]
        // this can be changed, only assigned for general testing
      }
    },
    quantity: {
      type: Sequelize.INTEGER,
      max: 10
    },
    price: {
      type: Sequelize.FLOAT,
      validate: {
        notEmpty: true,
    }
    }
  })
  return Hue;
}
