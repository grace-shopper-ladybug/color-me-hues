// store all of our functions that will act as middleware between our request and our response and we will use it as we see fit

const {User} = require('../db/models')

const isAdmin = (req, res, next) => {
  console.log(req.user.admin, 'should be a boolean for admin')
  // ------ check to see if user is true for admin --------
  // const user = await User.verifyAdmin(req.user.admin)
  if (!req.user.admin) {
    return res.status(403).send("You ain't admin")
  } else {
    // ------------ if user IS an admin ---------------
    next()
  }
}

module.exports = {
  isAdmin
}
