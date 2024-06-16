const db = require("../config/database");
const { DataTypes } = require("sequelize");
const Category = require("./category");

const Car = db.define("Car", {
    CarId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    CarName: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    CarPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    cid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

Car.belongsTo(Category, { foreignKey: "cid" });
Category.hasMany(Car, { foreignKey: "cid" });

module.exports = Car;
