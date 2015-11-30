var express = require('express');
var session = require('express-session');
var csrf = require('csurf');

var app = express();


// ************** for express x-powered-by test ********
//app.disable( 'X-Powered-By' );
//require('./src/express/express-xpoweredby/express-xpoweredby')(app, session);


// ************** for random number test ********
require('./src/javascript core/clientside prng/test.negative-randomnumber-use')(app, session);

// ************** for enable http only session test ********
require('./src/express/Enable HttpOnly Session/test.valid-enableHttpOnlySession')(app, session);
require('./src/express/Enable HttpOnly Session/test.httponlyfalse')(app, session);
require('./src/express/Enable HttpOnly Session/test.missing-httponly')(app, session);
require('./src/express/Enable HttpOnly Session/test.setting-httponly-outside')(app, session);


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});