const db = require("../config/database");
const { DataTypes } = require("sequelize");
const Car = require("./carModel");
const User = require("./usersModel");

const Borrow = db.define("Borrow", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    CarId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});


Car.belongsToMany(User, { through: Borrow, foreignKey: "bookId" });
User.belongsToMany(Book, { through: Borrow, foreignKey: "userId" });

module.exports = Borrow;
