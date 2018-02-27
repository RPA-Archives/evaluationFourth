const Model = require('../../../models');

module.exports = data => Model.options.bulkCreate(data)
  .then(result => result);

