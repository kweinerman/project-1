//Need to decide what we need required for orders 

const { Users } = require('../models/Order');

// const orderData = [
//   {
//     name: 'Kurt Weinerman',
//     email: 'kurt.weinerman@gmail.com',
//     password: 'rootroot',
//     user_id: 1,
//   },
//   {
//     name: 'John Lundy',
//     email: 'johnlundy94@gmail.com',
//     password: 'rootroot1',
//     user_id: 2,
//   },
//   {
//     name: 'Dan Losh',
//     email: 'dan.loshkarev@gmail.com ',
//     password: 'root',
//     user_id: 3,
//   },

// ];

const seedOrders = () => Orders.bulkCreate(orderData);

module.exports = seedOrders;