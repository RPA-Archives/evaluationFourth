const Hapi = require('hapi');
const routes = require('./routes');

const Server = new Hapi.Server();

Server.connection({
  port: 8080,
  host: 'localhost',
});

Server.route(routes);

if (!module.parent) {
  Server.start();
}

module.exports = Server;
