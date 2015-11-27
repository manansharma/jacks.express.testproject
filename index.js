var express = require('express');
var session = require('express-session');
var csrf = require('csurf');

var app = express();
app.disable('X-Powered-By'); // comment this line to trigger X-Powered-By issue

// ************** for random number test ********
require('./src/javascript core/clientside prng/test.negative-randomnumber-use')(app, session);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});