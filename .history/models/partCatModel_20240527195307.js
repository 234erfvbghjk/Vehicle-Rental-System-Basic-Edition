const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

sequelize.define("partCat", {
  partId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  
  brand:{
    type:DataTypes.Str
  }
})

module.exports = User;