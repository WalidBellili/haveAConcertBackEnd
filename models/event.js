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
    venueId: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.STRING,
    },
    availableSeats: {
      type: DataTypes.INTEGER,
    },
    isValidate: {
      type: DataTypes.BOOLEAN,
    },
  });

  return Event;
};
