var code = require('code'),
    Lab = require('lab'),
    lab = exports.lab = Lab.script();

var index = require('../js/index.js');

lab.test('test', function (done) {
  code.expect(1).to.equal(1);

  done();
});