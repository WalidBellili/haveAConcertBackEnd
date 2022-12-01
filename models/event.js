const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Event = sequelize.define("Event", {
    audience: {
      type: DataTypes.STRING,
    },
    style: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
    },
    // venueId: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // userId: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    availableSeats: {
      type: DataTypes.INTEGER,
    },
    isValidate: {
      type: DataTypes.BOOLEAN,
    },
  });

  return Event;
};
