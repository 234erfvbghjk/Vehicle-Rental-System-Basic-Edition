const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PartCar = sequelize.define("partCar", {
  partId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  CID:{
    type: DataTypes.INTEGER,
    allowNull: true
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: true
  },
})

module.exports = PartCar;