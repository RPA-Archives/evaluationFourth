const Models = require('../../models');
const getFormPayload = require('../utils/helpers/getFormPayload');

module.exports = {
  method: 'POST',
  path: '/answer',
  handler: (req, res) => {
    const data = getFormPayload(req);
    Models.answers.findAll({
      where: {
        questionId: data.questionId,
        userId: data.userId,
      },
    })
      .then((result) => {
        if (result.length === 0) {
          Models.answers.create(data)
            .then(() => {
              res('done').code(201);
            });
        } else {
          Models.answers.update({
            answer: data.answer,
          }, {
            where: {
              questionId: data.questionId,
              userId: data.userId,
            },
          })
            .then(() => {
              res('done').code(201);
            });
        }
      });
  },
};
