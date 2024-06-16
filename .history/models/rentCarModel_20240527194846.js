const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const RentCar = sequelize.define('RentCar', {
  rentId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  // 租车时间
  rentTime: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // 租车车型
  carType: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  // 租车价格
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false
  }
  归还时间
  returnTime: {
    type: DataTypes.STRING,
    allowNull: false
  }

});

module.exports = RentCar;