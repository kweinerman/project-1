const sequelize = require("../config/connection");
const { User, Order, Comment } = require("../models");

const userData = require("./userlogin.json");
const userData = require("./orderdata.json");


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const Order of userData) {
    await Order.create({
      ...Order,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }



  process.exit(0);
};

seedDatabase();