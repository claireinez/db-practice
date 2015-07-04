var redis = require('./redis.js');

module.exports = {
	homeHandler: function (request, reply) {
		reply.view('index.html');
	},

	addData: function (request, reply) {

	}
};