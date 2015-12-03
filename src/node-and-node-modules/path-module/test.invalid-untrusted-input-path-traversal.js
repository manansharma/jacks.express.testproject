var path = require('path');
var app = require('express')();

// Start the app and visit the following URLs
// Path Injection - http://localhost:3000/..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2Fetc

function getUserHomeDirectory(username) {
    console.log("Resolving " + username + " to home directory");
    return path.resolve(__dirname, 'home', username);
}

app.get('/path/:username', function(req, res) {
    var username = req.params.username;
    res.send('Your home directory is located at: ' + getUserHomeDirectory(username));
});

app.get('/safepath/:username', function(req, res) {
    var username = req.params.username;

    // Valid username contains Alpha-Numeric characters, is at least 3 characters long but less than 16
    // var re = /^[A-Za-z0-9]{3,16}$/g;

    //if (re.test(username)) {
    //    res.send('Your home directory is located at: ' + getUserHomeDirectory(username));
    //} else {
    //    res.send('Invalid username');
    //}
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Path Injection listening at http://%s:%s', host, port);
});