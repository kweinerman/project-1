const User = require("./User");
const Product = require("./Product");
const Cart = require("./Cart");

User.hasMany(Product, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Product.belongsTo(User, {
  foreignKey: "user_id",
});

Product.hasMany(Cart, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
});

Cart.belongsTo(Product, {
  foreignKey: "product_id",
});

Cart.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Product, Cart };
