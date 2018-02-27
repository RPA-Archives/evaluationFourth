'use strict';
module.exports = (sequelize, DataTypes) => {
  var options = sequelize.define('options', {
    questionId: DataTypes.INTEGER,
    option: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return options;
};