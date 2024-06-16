const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Rent = sequelize.define('Rent', {
  userId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
});

module.exports = Rent;