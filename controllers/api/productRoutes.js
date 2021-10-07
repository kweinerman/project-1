var express = require("express");
var router = express.Router();

router.put("/", async function (req, res, next) {
  try {
    var product = (await req.session.product) ? req.session.product : [];
    product.push(req.body);
    req.session.product = product;
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", function (req, res, next) {
  var productId = req.params.id;
  var product = req.session.product ? req.session.product : [];

  var newProduct = product.filter((product) => product.id !== productId);
  req.session.product = newProduct;
  res.redirect("/product");
});

module.exports = router;
