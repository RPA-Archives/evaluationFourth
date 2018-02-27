

module.exports = (sequelize, DataTypes) => {
  const questions = sequelize.define('questions', {
    questionId: DataTypes.NUMBER,
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
