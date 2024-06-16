const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Rent = sequelize.define('Rent', {
  rentId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  carId: {
    type: DataTypes.INTEGER,
  },
  userId: {
    type: DataTypes.INTEGER,
  },
  rentDate: {
    type: DataTypes.DATEDLY,
  },
  returnDate: {
    type: DataTypes.DATEDLY,
  }
});

module.exports = Rent;