const sequelize = require("../config/connection");
const { User, Cart, Product } = require("../models");

const userData = require("./userData.json");
const cartData = require("./cartData.json");
const productData = require("./productData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const cart of cartData) {
    await Cart.create({
      ...cart,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const product of productData) {
    await Product.create({
      ...product,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
