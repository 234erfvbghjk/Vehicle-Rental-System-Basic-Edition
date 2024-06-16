const db = require("../config/database");
const { DataTypes } = require("sequelize");
const Car = require("./CarModel");
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
        references: {
            model: Car,
            key: "id",
        },
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: "id",
        },
    },
    status: {
        // 租赁信息的状态
        // 0 被租赁
        // 1 续借
        // 2 归还
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
});

Car.belongsToMany(User, { through: Borrow, foreignKey: "CarId" });
User.belongsToMany(Car, { through: Borrow, foreignKey: "userId" });

module.exports = Borrow;
