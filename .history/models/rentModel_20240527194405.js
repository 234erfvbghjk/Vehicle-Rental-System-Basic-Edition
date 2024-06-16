const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const RentCar = sequelize.define('Rent', {
  rentId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  rentDate: {
    type: DataTypes.DATEDLY,
  },
  returnDate: {
    type: DataTypes.DATEDLY,
  }
});

module.exports = Rent;