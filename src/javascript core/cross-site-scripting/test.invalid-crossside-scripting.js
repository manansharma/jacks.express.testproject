var path = require('path');


// Start the app and visit the following URLs
// Path Injection - http://localhost:3000/..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2Fetc

module.exports = function(app, Session) {

function getUserHomeDirectory(username) {
    console.log("Resolving " + username + " to home directory");
    return path.resolve(__dirname, 'home', username);
}

app.get('/path/:username', function(req, res) {
    var username = req.params.username;
    res.send('Your home directory is located at: ' + getUserHomeDirectory(username));
//    res.render();
//    res.end();
});
)};