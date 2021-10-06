var express = require("express");
var router = express.Router();

router.put("/", function (req, res, next) {
  var cart = req.session.cart ? req.session.cart : [];
  cart.push(req.body);
  req.session.cart = cart;
});

router.get("/cart", function (req, res, next) {
  if (!req.session.cart) {
    return res.render("cart", {
      products: null,
    });
  }
  var cart = req.session.cart;
  res.render("cart", {
    title: "Fresh State Kombucha",
    products: cart,
    totalPrice: cart.reduce((previousValue, currentValue) => {
      return previousValue.price + currentValue.price;
    }),
  });
});

router.delete("/:id", function (req, res, next) {
  var productId = req.params.id;
  var cart = req.session.cart ? req.session.cart : [];

  var newCart = cart.filter((product) => product.id !== productId);
  req.session.cart = newCart;
  res.redirect("/cart");
});

module.exports = router;
