const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Payement = sequelize.define("Payement", {
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stripeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isValidate: {
      type: DataTypes.BOOLEAN,
    },
  });

  return Payement;
};
