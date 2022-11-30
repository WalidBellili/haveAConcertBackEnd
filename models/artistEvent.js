const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const artistEvent = sequelize.define("artistEvent", {
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // artistId: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // venueId: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // eventId: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
  });

  return artistEvent;
};
