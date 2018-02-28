const Models = require('../../../models');

const fetchUserDetails = username => Models.users.findAll({
  where: {
    username,
  },
})
  .then(user => user)
  .catch(() => null);

module.exports = fetchUserDetails;
