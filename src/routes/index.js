const login = require('./login');
const fetch = require('./fetch');

module.exports = [{
  method: 'GET',
  path: '/',
  handler: (req, res) => res('Server Running'),
}].concat(login, fetch);
