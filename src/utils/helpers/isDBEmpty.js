const Models = require('../../../models');

const isDBEmpty = () => Models.questions.findAll()
  .then((allQuestions) => {
    if (allQuestions.length === 0) return true;
    return false;
  });

module.exports = isDBEmpty;
