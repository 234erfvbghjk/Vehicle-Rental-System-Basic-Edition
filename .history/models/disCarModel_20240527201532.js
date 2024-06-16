const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

sequelize.define("disCar", {
  disId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  disName: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  disPrice: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  disCOlor: {
    type: DataTypes.STRING(10),
    allowNull: false
  }
})

module.exports = deiCar

