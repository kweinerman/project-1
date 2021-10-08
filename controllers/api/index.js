const router = require("express").Router();
const cartRoutes = require("./cartRoutes");
const userRoutes = require("./userRoutes");

router.use("/carts", cartRoutes);
router.use("/users", userRoutes);

module.exports = router;
