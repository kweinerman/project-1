const router = require("express").Router();
const cartRoutes = require("./cartRoutes");

router.use("/carts", cartRoutes);

module.exports = router;
