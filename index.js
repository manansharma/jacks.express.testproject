var express = require('express');
var session = require('express-session');
var csrf = require('csurf');
var helmet = require('helmet');

var app = express();


// ************** for Express x-powered-by test ********
app.disable( 'X-Powered-By' );
app.use(helmet());
//require('./src/express/express-xpoweredby/express-xpoweredby')(app, session);

// ************** for Express - enable http only session tests ********
//require('./src/express/Enable HttpOnly Session/test.valid-enableHttpOnlySession')(app, session);
//require('./src/express/Enable HttpOnly Session/test.httponlyfalse')(app, session);
//require('./src/express/Enable HttpOnly Session/test.missing-httponly')(app, session);
//require('./src/express/Enable HttpOnly Session/test.setting-httponly-outside')(app, session);
//
// ************** for Express - enable secure session tests ********
//require('./src/express/EnableSecureSession/test.missing-secure')(app, session);
//require('./src/express/EnableSecureSession/test.securesessionfalse')(app, session);
//require('./src/express/EnableSecureSession/test.setting-secure-outside')(app, session);
//require('./src/express/EnableSecureSession/test.valid-enable-secure-session')(app, session);
//
//// ************** for Express - open redirect tests ********
//require('./src/express/open-redirect/test.valid-open-redirect')(app, session);
//
//// ************** for random number tests ********
//require('./src/javascript core/clientside prng/test.negative-randomnumber-use')(app, session);
//
//// ************** for mongodb insert tests ********
//require('./src/mongodb/test.invalid-untrusted-input-insert')(app, session);
//
//// ************** for mongoDB find tests ********
//require('./src/mongodb/find/test.find-with-untrusted-input')(app, session);
//
//// ************** for serverside injection tests ********
//require('./src/javascript core/server-side-injection/test.invalid-serverside-injection')(app, session);
//
//// ************** for node and node modules - https module injection tests ********
//require('./src/node-and-node-modules/https-module/test.invalid-insecure-ssl-protocol-globalagent')(app, session);
//require('./src/node-and-node-modules/https-module/test.invalid-insecure-ssl-protocol-httpsoption')(app, session);
//require('./src/node-and-node-modules/https-module/test.invalid-insecure-ssl-protocol-requestagentoptions')(app, session);
//
//// ************** for node and node modules - path module injection tests ********
require('./src/node-and-node-modules/path-module/test.invalid-untrusted-input-path-traversal')(app, session);




var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

// enable secure session
// enable httponly session
//app.use(session({
//  secret: 'My super session secret',
//  cookie: {
////    httpOnly: true,
////    secure: true
//  }
//}));