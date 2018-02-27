const Models = require('../../../models');

const fetchUserDetails = username => Models.users.findAll({
  where: {
    username,
  },
})
  .then(user => user)
  .catch(err => null);

module.exports = fetchUserDetails;