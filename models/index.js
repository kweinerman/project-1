const User = require("./User");
const Product = require("./Product");
const Checkout = require("./Checkout");

User.hasMany(Product, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Product.belongsTo(User, {
  foreignKey: "user_id",
});

Product.hasMany(Checkout, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
});

Checkout.belongsTo(Product, {
  foreignKey: "product_id",
});

Checkout.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Product, Checkout };
