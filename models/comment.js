const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Comment = sequelize.define("Comment", {
    // userId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    like: {
      type: DataTypes.BOOLEAN,
    },
    // venueId: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // eventId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    content: {
      type: DataTypes.STRING,
    },
  });

  return Comment;
};
