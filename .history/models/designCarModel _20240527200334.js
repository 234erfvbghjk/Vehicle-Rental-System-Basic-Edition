const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DesignCar = sequelize.define("designCar", {
  designId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  designName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  designColor: {
    type: DataTypes.STRING,
    allowNull: true
  },
  designPrice: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
})

module.exports = designCar;