const router = require("express").Router();
const { User, Product } = require("../models");
const withAuth = require("../utils/auth");

//res.render for homepage
router.get("/", async (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//res.render for product
router.get("/product", async (req, res) => {
  try {
    const productData = await Product.findAll();
    const products = productData.map((product) => product.get({ plain: true }));
    res.render("product", {
      products,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Old code

//   try {
//     // Get all products and JOIN with user data
//     const productData = await Product.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ["name"],
//         },
//       ],
//     });

//     // Serialize data so the template can read it
//     const products = productData.map((product) => product.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render("product", {
//       products,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

//res.render for cart
router.get("/cart", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });

    const user = userData.get({ plain: true });

    res.render("cart", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Old Code
// router.get("/cart", function (req, res, next) {
//   if (!req.session.cart) {
//     return res.render("cart", {
//       products: null,
//     });
//   }
//   var cart = req.session.cart;
//   res.render("cart", {
//     title: "Fresh State Kombucha",
//     products: cart,
//     totalPrice: cart.reduce((previousValue, currentValue) => {
//       return previousValue.price + currentValue.price;
//     }),
//   });
// });

//res.render for login
router.get("/login", async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
