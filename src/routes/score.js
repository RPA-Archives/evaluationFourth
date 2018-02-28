const Models = require('../../models');
const getFormPayload = require('../utils/helpers/getFormPayload');

module.exports = {
  method: 'POST',
  path: '/score',
  handler: (req, res) => {
    const data = getFormPayload(req);
    Models.questions.findAll()
      .then((allQuestions) => {
        Models.answers.findAll({
          where: {
            userId: data,
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
                userId: data,
              },
            },
          )
            .then(() => {
              Models.users.findAll({
                order: [
                  ['score', 'DESC'],
                ],
                limit: 10,
              })
                .then(result => result.map(user => ({
                  username: user.dataValues.username,
                  score: user.dataValues.score,
                })))
                .then(sorted => res(sorted).code(200));
            });
        });
      });
  },
};
