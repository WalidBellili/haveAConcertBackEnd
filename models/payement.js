const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Payement = sequelize.define("Payement", {
    orderId: {
      type: DataTypes.INTEGER,
    },
    stripeId: {
      type: DataTypes.INTEGER,
    },
    isValidate: {
      type: DataTypes.BOOLEAN,
    },
  });

  return Payement;
};
