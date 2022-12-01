const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Adress = sequelize.define("Adress", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    venueId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    streetNumber: {
      type: DataTypes.STRING,
    },
    streetName: {
      type: DataTypes.STRING,
    },
    zipCode: {
      type: DataTypes.STRING,
    },
    region: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    additionalInfo: {
      type: DataTypes.STRING,
    },
    latitude: {
      type: DataTypes.FLOAT,
    },
    longitude: {
      type: DataTypes.FLOAT,
    },
  });

  return Adress;
};
