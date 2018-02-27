const populate = require('./populate');
const login = require('./login');

module.exports = [{
  method: 'GET',
  path: '/',
  handler: (req, res) => res('Server Running'),
}].concat(populate, login);
