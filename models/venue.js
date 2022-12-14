const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Venue = sequelize.define("Venue", {
    description: {
      type: DataTypes.STRING,
    },
    contact: {
      type: DataTypes.STRING,
    },
    // eventId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    vente: {
      type: DataTypes.INTEGER,
    },
  });

  return Venue;
};
