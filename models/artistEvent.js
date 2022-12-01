const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const ArtistEvent = sequelize.define("ArtistEvent", {
    eventId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artistId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return ArtistEvent;
};
