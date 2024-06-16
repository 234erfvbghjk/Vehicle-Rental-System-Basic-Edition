const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  Id: {
    type: DataTypes.STRING,
    autoIncrement: true,
    primaryKey: true
  },
});

module.exports = User;