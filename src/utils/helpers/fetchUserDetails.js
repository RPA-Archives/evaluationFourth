const Models = require('../../../models');

const fetchUserDetails = username => Models.users.findAll({
  where: {
    username,
  },
})
  .then(user => user)
  .catch(err => err);

module.exports = fetchUserDetails;
