// store all of our functions that will act as middleware between our request and our response and we will use it as we see fit

const {User} = require('../db/models')

const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    console.log(User)
    console.log(User.findByToken)
    const user = await User.findByToken(token)
    req.user = user
    next()
  } catch (err) {
    next(err)
  }
}

module.exports = {
  requireToken
}
