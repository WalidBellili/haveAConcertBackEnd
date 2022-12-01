const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Comment = sequelize.define("Comment", {
    userId: {
      type: DataTypes.INTEGER,
    },
    like: {
      type: DataTypes.BOOLEAN,
    },
    venueId: {
      type: DataTypes.STRING,
    },
    eventId: {
      type: DataTypes.INTEGER,
    },
    content: {
      type: DataTypes.STRING,
    },
  });

  return Comment;
};
