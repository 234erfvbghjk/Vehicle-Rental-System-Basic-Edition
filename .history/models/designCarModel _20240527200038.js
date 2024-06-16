const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const designCar = sequelize.define("designCar", {
  designId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  designName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  des: {
    type: DataTypes.STRING,
    allowNull: true
  },
})

module.exports = designCar;