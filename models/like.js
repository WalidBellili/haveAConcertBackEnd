const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Like = sequelize.define("Like", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    commentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Like;
};
