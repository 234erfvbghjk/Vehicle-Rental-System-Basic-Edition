const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const partCar = require('./partCarModel');

const Car = sequelize.define("Car", {
  Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  CID: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  CarName: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  CarPrice: {
    type: DataTypes.STRING,
    allowNull: false
  },
  CarCOlor: {
    type: DataTypes.STRING(10),
    allowNull: false
  }
})
// 多个对联（关联的表，{外键的约束}）    foreignKey表示表的公共字段   【一对多】
// partCar.hasMany(Car, { foreignKey: 'CID' })
// // 单个对联（关联的表,{外键的约束}） 【一对一】
// Car.belongsTo(Car, { foreignKey: 'CID' })


module.exports = Car

