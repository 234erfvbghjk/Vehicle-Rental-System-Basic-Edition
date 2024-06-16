const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const RentCar = sequelize.define('RentCar', {
  rentId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

});

module.exports = RentCar;