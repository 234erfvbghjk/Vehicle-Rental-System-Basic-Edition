const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const partCar = require('./partCarModel');

const RentCar = sequelize.define('RentCar', {
  Id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  // 租车用户
  rentUser: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  CID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  // 租车名字
  rentCidName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // 租车颜色
  rentCidColor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // 租车价格
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
});
// // 多个对联（关联的表，{外键的约束}）    foreignKey表示表的公共字段   【一对多】
// partCar.hasMany(RentCar, { foreignKey: 'CID' })
// // 单个对联（关联的表,{外键的约束}） 【一对一】
// RentCar.belongsTo(RentCar, { foreignKey: 'CID' })

module.exports = RentCar;