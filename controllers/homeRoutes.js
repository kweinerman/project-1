const router = require("express").Router();
const { Product, User, Cart } = require("../models");
const withAuth = require("../utils/auth");

//res.render for home page
router.get("/", async (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//res.render for login page
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/product");
    return;
  }

  res.render("login");
});

//res.render for product page
router.get("/product", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });

    const user = userData.get({ plain: true });

    res.render("product", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
