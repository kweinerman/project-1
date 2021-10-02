//Need ID, address (line 1,2) zip state, quantity, and product this should give an order id as well

const { Users } = require('../models/Order');

const orderData = [
  {
    quantity: 1,
    address_line_1: '1150 Vine St',
    address_line_2: 'Apartment 701',
    city: 'Denver',
    state: 'Colorado',
    zip_code: 80206,
    product: 'Citrus Lime',
    order_id: 1
  },
  
  {
    quantity: 4,
    address_line_1: '5805 W 6th Ave',
    city: 'Lakewood',
    state: 'Colorado',
    zip_code: 80214,
    product: 'Orange Basil',
    order_id: 2
  },

  {
    quantity: 3,
    address_line_1: '1100 Steele St',
    city: 'Denver',
    state: 'Colorado',
    zip_code: 80206,
    product: 'Cranberry LAvender',
    order_id: 3
  },
];

const seedOrders = () => Orders.bulkCreate(orderData);

module.exports = seedOrders;