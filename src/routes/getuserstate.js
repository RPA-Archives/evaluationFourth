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
      .then((result) => {
        const array = {};
        for (let i = 0; i < result.length; i += 1) {
          array[result[i].dataValues.questionId] = result[i].dataValues.answer;
        }
        return array;
      })
      .then(result1 => res(result1));
  },
};
