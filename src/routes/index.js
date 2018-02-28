const login = require('./login');
const fetch = require('./fetch');
const answer = require('./answer');
const score = require('./score');
const getuserstate = require('./getuserstate');

module.exports = [{
  method: 'GET',
  path: '/',
  handler: (req, res) => res('Server Running'),
}].concat(login, fetch, answer, score, getuserstate);
