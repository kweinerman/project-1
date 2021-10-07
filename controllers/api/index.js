const router = require("express").Router();
// const orderRoutes = require("./orderRoutes");
const productRoutes = require("./productRoutes");
const userRoutes = require("./userRoutes");

// router.use("/orders", orderRoutes);
router.use("/product", productRoutes);
router.use("/users", userRoutes);

module.exports = router;
