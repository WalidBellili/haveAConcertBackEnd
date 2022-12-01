const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Order = sequelize.define("Order", {
    userId: {
      type: DataTypes.INTEGER,
    },
    eventId: {
      type: DataTypes.INTEGER,
    },
    payementId: {
      type: DataTypes.INTEGER,
    },
    amount: {
      type: DataTypes.INTEGER,
    },
  });

  return Order;
};
