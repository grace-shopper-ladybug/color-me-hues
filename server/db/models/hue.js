const Sequelize = require('sequelize')
const db = require('../db')

// --------------- hue model --------------->

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    // Making `.password` act like a func hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('password')
    }
  },
  salt: {
    type: Sequelize.STRING,
    // Making `.salt` act like a function hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('salt')
    }
  },
  googleId: {
    type: Sequelize.STRING
  }
})

module.exports = User
// const Hue = db.define('hue', {
//     emotionName: {
//       type: Sequelize.STRING,
//       validate: {
//         notEmpty: true,
//       }
//     },
//     emotionHue: {
//       type: Sequelize.STRING,
//       defaultValue: '/images/colors.png'
//     },
//     description: {
//       type: Sequelize.STRING,
//       validate: {
//         notEmpty: true,
//     }},
//     hueColorFamily: {
//       type: Sequelize.STRING,
//       validate: {
//         isIn: [['orange', 'red', 'blue', 'green', "yellow", "purple"]]
//         // this can be changed, only assigned for general testing
//       }
//     },
//     quantity: {
//       type: Sequelize.INTEGER,
//       max: 10
//     },
//     price: {
//       type: Sequelize.FLOAT,
//       validate: {
//         notEmpty: true,
//       }
//     }
//   })

//   module.exports = Hue
