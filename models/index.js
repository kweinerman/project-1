const User = require("./User");
const Order = require("./Order");
const Product = require("./Product");

User.hasMany(Order, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Order.belongsTo(User, {
  foreignKey: "user_id",
});

Order.hasMany(Product, {
  foreignKey: "order_id",
  onDelete: "CASCADE",
});

Product.belongsTo(Order, {
  foreignKey: "order_id",
});

Product.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Order, Product };
