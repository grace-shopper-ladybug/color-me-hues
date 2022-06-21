const User = require('./user')
const Hue = require('./hue')
const Order = require('./order')
const HueOrder = require('./hueOrder')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

// User
// Hue (product)
// Order

Order.belongsTo(User)
User.hasMany(Order)

Order.belongsToMany(Hue, {through: 'hueOrder'})
Hue.belongsToMany(Order, {through: 'hueOrder'})

// For later: handling favorites and admin control
// User.HasMany(Hue);
// Hue.BelongsToMany(User);

module.exports = {
  User,
  Hue,
  Order,
  HueOrder
}
