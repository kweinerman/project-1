const router = require("express").Router();

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

module.exports = router;
