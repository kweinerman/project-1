const router = require("express").Router();
const orderRoutes = require("./orderRoutes");
const cartRoutes = require("./cartRoutes");

router.use("/orders", orderRoutes);
router.use("/carts", cartRoutes);

module.exports = router;
