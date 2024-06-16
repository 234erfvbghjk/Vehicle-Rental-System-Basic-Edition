const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

sequelize.define("partCat", {
   partId:{
    type:DataTypes.INTEGER,
    
   }

})

module.exports = User;