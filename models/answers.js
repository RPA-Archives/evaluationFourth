'use strict';
module.exports = (sequelize, DataTypes) => {
  var answers = sequelize.define('answers', {
    questionId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    answer: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return answers;
};