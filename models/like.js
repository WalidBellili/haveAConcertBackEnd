const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Like = sequelize.define("Like", {
    userId: {
      type: DataTypes.INTEGER,
    },
    commentId: {
      type: DataTypes.INTEGER,
    },
  });

  return Like;
};
