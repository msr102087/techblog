
const { User } = require('../models');

const userData = [{
        username: 'lola',
        password: 'lola1'

    },
    {
        username: 'pickle',
        password: 'pickle2'
    },
    {
        username: 'june',
        password: 'june3'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;