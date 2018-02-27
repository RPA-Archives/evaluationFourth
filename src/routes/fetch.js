const getQuestions = require('../utils/helpers/getQuestions');
const isDBEmpty = require('../utils/helpers/isDBEmpty');
const populate = require('../utils/helpers/populate');

module.exports = {
  method: 'GET',
  path: '/fetch',
  handler: (req, res) => {
    isDBEmpty()
      .then((empty) => {
        if (empty) {
          populate()
            .then(() => {
              getQuestions()
                .then((questionObject) => {
                  res(questionObject).code(200);
                });
            });
        } else {
          getQuestions()
            .then((questionObject) => {
              res(questionObject).code(200);
            });
        }
      });
  },
};
