const { Sequelize } = require('sequelize');

// 第一个值跟的是数据库名，第二个值跟的是用户名，第三个值跟的是密码，第四个值是连接的配置
const sequelize = new Sequelize('ccffsk_car_rental_system', 'root', 'Chong0114', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;