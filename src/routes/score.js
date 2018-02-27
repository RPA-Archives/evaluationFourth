const Models = require('../../models');

module.exports = {
  method: 'POST',
  path: '/score',
  handler: (req, res) => {
    const data = req.payload;
    Models.questions.findAll()
      .then((allQuestions) => {
        Models.answers.findAll({
          where: {
            userId: data.userId,
          },
        }).then((allUserAnswers) => {
          let score = 0;
          for (let i = 0; i < allQuestions.length; i += 1) {
            for (let j = 0; j < allUserAnswers.length; j += 1) {
              if (allQuestions[i].dataValues.questionId === allUserAnswers[j].dataValues.questionId && allQuestions[i].dataValues.answer === allUserAnswers[j].dataValues.answer) {
                score += 1;
              }
            }
          }
          return score;
        }).then((points) => {
          Models.users.update(
            {
              score: points,
            },
            {
              where: {
                userId: data.userId,
              },
            },
          )
            .then(() => {
              res('done').code(200);
            });
        });
      });
  },
};
