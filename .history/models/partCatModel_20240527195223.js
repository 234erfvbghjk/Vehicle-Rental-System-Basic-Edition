const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

sequelize.define("partCat", {
   partId:{
    type:DataTypes.INTEGER,
    allowNull:false,
    primaryKey:true,
    
   }

})

module.exports = User;