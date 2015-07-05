var Hapi = require('hapi');
var Path = require('path');
var server = new Hapi.Server();
var routes = require('./js/routes.js');

server.connection({
	port: process.env.PORT
});

server.route(routes);

server.views({
	engines: {
		html: require('handlebars')
	},
	path: Path.join(__dirname, 'views')
});

server.start(function () {
	console.log("Server is running at: " + server.info.uri);
});

module.exports = server;