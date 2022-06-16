const User = require('./user')
const Hue = require('./hue')

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

// Cart isn't needed — Orders can have isOrder column (true/false) to handle that

// Order.BelongsTo(User);
// User.HasMany(Order);

// Order.HasMany(Hue);
// Hue.BelongsToMany(Order, { through: 'order-hues' });

// For later: handling favorites and admin control
// User.HasMany(Hue);
// Hue.BelongsToMany(User);

module.exports = {
  User,
  Hue
}
