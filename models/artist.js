const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Artist = sequelize.define("Artist", {
    style: {
      type: DataTypes.STRING,
    },
  });

  return Artist;
};
