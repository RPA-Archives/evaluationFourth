

module.exports = (sequelize, DataTypes) => {
  const questions = sequelize.define('questions', {
    questionId: DataTypes.INTEGER,
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      },
    },
  });
  return questions;
};
