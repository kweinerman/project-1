//Need to seed data with Name, Email, password and id 

const { Users } = require('../models/User');

const userData = [
  {
    name: 'Kurt Weinerman',
    email: 'kurt.weinerman@gmail.com',
    password: 'rootroot',
    user_id: 1,
  },
  {
    name: 'John Lundy',
    email: 'johnlundy94@gmail.com',
    password: 'rootroot1',
    user_id: 2,
  },
  {
    name: 'Dan Losh',
    email: 'dan.loshkarev@gmail.com ',
    password: 'root',
    user_id: 3,
  },

];

const seedUsers = () => Users.bulkCreate(userData);

module.exports = seedUsers;