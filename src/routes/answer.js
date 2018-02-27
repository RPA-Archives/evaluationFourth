const Models = require('../../models');

module.exports = {
  method: 'POST',
  path: '/answer',
  handler: (req, res) => {
    const data = req.payload;
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
