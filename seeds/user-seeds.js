const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'cuteEevee123',
        email: 'eeveeiscute@gmail.com',
        password: 'pawsword123'
    },
    {
        username: 'jfritsch04',
        email: 'juliafritsch04.com',
        password: 'passw0rd123'
    },
    {
        username: 'BoringUser',
        email: 'borninguser@gmail.com',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;