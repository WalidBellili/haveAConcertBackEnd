const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Order = sequelize.define("Order", {
    // userId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    // eventId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    // payementId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    amount: {
      type: DataTypes.INTEGER,
    },
  });

  return Order;
};
