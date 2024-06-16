const { Sequelize } = require('sequelize');

// 第一个值跟的是数据库名，第二个值跟的是用户名，第三个值跟的是密码，第四个值是连接的配置
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;