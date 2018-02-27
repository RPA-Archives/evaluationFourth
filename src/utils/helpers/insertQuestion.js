const Model = require('../../../models');

module.exports = data => Model.questions.create(data)
  .then(result => result);

