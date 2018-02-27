'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    userId: DataTypes.INTEGER,
    username: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return users;
};