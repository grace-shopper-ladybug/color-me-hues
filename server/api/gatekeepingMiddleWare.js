// store all of our functions that will act as middleware between our request and our response and we will use it as we see fit

const {User} = require('../db/models')

const requireAdminAccess = async (req, res, next) => {
  try {
    // const token = req.headers.authorization
    // console.log(User, "User")
    console.log(req.user.admin, 'should be a boolean for admin')
    // ------ check to see if user is true for admin --------
    // const user = await User.verifyAdmin(req.user.admin)
    if (req.user.admin === true) {
      res.next()
    } else {
      console.log('error')
    }
  } catch (err) {
    next(err)
  }
}

module.exports = {
  requireAdminAccess
}
