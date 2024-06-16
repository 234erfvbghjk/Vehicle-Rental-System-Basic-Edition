const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

sequelize.define("disCar", {
  disId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  carId: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  disDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
})