var Code = require('code'),
    Lab = require('lab');
    lab = exports.lab = Lab.script();

// var index = require('../js/index.js');
var server = require('../server.js');

// lab.test('test', function (done) {
//   Code.expect(1).to.equal(1);
//   done();
// });

lab.test('Test the server by getting back a 200 response code', function (done) {
	server.inject({method: 'GET', url: '/'}, function (response) {
		Code.expect(response.statusCode).to.equal(200);
		done();
	});
});