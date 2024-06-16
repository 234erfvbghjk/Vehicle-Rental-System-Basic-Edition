const { Sequelize } = require('sequelize');

// 第一个值跟的是
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;