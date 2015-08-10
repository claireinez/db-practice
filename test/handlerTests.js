var Code = require('code');
var Lab = require('lab');
var lab = exports.lab = Lab.script();
var handlers = require('../js/handlers.js');
var Shot = require('shot');

// some niceties
var describe = lab.describe;
var it = lab.it;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;

function decorate (reqDecorations, repDecorations, callback){
  return function(request, reply){
    for (var reqDec in reqDecorations){
      request[reqDec] = reqDecorations[reqDec];
    }

    for (var repDec in repDecorations){
      reply[repDec] = repDecorations[repDec];
    }

    callback(request, reply);
  };
}

var homeDispatch = decorate(
  // {
  //   auth: {
  //     session: {set: function(credentials){expect(credentials).to.exist();}},
  //     credentials: {profile: {displayName: 'string'}}
  //   },
  // },
  {
    view: function(location){expect(location).to.equal('index');},
  },
  handlers.homeHandler
);

Shot.inject(homeDispatch, {method: 'GET', url: '/'});