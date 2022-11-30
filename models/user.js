const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define("User", {
    pseudo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    adress: {
      type: DataTypes.STRING,
    },
    isSuspended: {
      type: DataTypes.BOOLEAN,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
    },
  });

  return User;
};
