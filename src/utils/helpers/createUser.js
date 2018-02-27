const Models = require('../../../models');

const createUser = username => Models.users.create({
  username,
  score: 0,
})
  .then(user => user)
  .catch(err => null);

module.exports = createUser;
