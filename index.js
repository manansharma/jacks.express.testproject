var express = require('express');
var session = require('express-session');
var csrf = require('csurf');

var app = express();

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

// express-x-powered-by
  console.log('Example app listening at http://%s:%s', host, port);
});

app.get('/', function (req, res) {
  res.send('Hello World!');
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

app.use(csrf());

app.use(function(req, res, next) {
  res.locals._csrf = req.csrfToken();
  next();
});

//function customHeaders( req, res, next ){
//  // Switch off the default 'X-Powered-By: Express' header
//  app.disable( 'x-powered-by' );
//
//  // OR set your own header here
//  res.setHeader( 'X-Powered-By', 'Awesome App v0.0.1' );
//
//  // .. other headers here
//
//  next()
//}
//
//app.use( customHeaders );