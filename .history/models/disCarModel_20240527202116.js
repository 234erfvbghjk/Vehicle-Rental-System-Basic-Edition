const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DisCar = sequelize.define("DisCar", {
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
    type: DataTypes.STRING,
    allowNull: false
  },
  disCOlor: {
    type: DataTypes.STRING(10),
    allowNull: false
  }
})

module.exports = DisCar

