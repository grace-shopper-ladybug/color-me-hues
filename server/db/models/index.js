const User = require('./user');
const Hue = require('./Hue');
const Order = require('./order');
const HueOrder = require('./hueOrder');

// associations
Order.belongsTo(User);
User.hasMany(Order);

Order.belongsToMany(Hue, { through: 'HueOrder' });
Hue.belongsToMany(Order, { through: 'HueOrder' });

module.exports = {
  User,
  Hue,
  Order,
  HueOrder,
};
