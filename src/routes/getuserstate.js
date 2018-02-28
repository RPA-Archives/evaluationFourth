const getFormPayload = require('../utils/helpers/getFormPayload');
const Models = require('../../models');

module.exports = {
  method: 'POST',
  path: '/getuserresponse',
  handler: (req, res) => {
    const reqData = getFormPayload(req);
    Models.answers.findAll({
      where: {
        userId: reqData.userId,
      },
    })
      .then(result =>
        result.map(eachAnswer => ({
          questionId: eachAnswer.questionId,
          answer: eachAnswer.answer,
        })))
      .then(result1 => res(result1));
  },
};
