var express = require('express');
var session = require('express-session');
var csrf = require('csurf');

var app = express();


// ************** for Express x-powered-by test ********
//app.disable( 'X-Powered-By' );
//require('./src/express/express-xpoweredby/express-xpoweredby')(app, session);

// ************** for Express - enable http only session tests ********
require('./src/express/Enable HttpOnly Session/test.valid-enableHttpOnlySession')(app, session);
require('./src/express/Enable HttpOnly Session/test.httponlyfalse')(app, session);
require('./src/express/Enable HttpOnly Session/test.missing-httponly')(app, session);
require('./src/express/Enable HttpOnly Session/test.setting-httponly-outside')(app, session);

// ************** for Express - enable secure session tests ********
require('./src/express/EnableSecureSession/test.missing-secure')(app, session);
require('./src/express/EnableSecureSession/test.securesessionfalse')(app, session);
require('./src/express/EnableSecureSession/test.setting-secure-outside')(app, session);
require('./src/express/EnableSecureSession/test.valid-enable-secure-session')(app, session);

// ************** for random number tests ********
require('./src/javascript core/clientside prng/test.negative-randomnumber-use')(app, session);


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

// enable secure session
// enable httponly session
app.use(session({
  secret: 'My super session secret',
  cookie: {
//    httpOnly: true,
//    secure: true
  }
}));