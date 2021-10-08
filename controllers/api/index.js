const router = require("express").Router();
const orderRoutes = require("./orderRoutes");
const cartRoutes = require("./cartRoutes");
const userRoutes = require("./userRoutes");

router.use("/orders", orderRoutes);
router.use("/carts", cartRoutes);
router.use("/users", userRoutes);

module.exports = router;
