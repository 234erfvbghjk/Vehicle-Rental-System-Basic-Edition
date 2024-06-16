const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const designCar = sequelize.define("designCar", {
  partId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: true
  },
  model: {
    type: DataTypes.STRING,
    allowNull: true
  },
})

module.exports = PartCar;