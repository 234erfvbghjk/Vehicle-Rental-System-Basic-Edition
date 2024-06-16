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
  designColor: {
    type: DataTypes.STRING,
    allowNull: true
  },
  des
})

module.exports = designCar;