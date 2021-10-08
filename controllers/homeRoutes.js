const router = require("express").Router();
const { Product } = require("../models");
const { User, Order } = require("../models/User");

router.get("/", async (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/products", async function (req, res, next) {
  try {
    const productData = await Product.findAll({});
    const products = productData.map((product) => product.get({ plain: true }));
    res.render("products", {
      title: "Fresh State Kombucha",
      products,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
