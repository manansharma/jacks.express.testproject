var path = require('path');


// Start the app and visit the following URLs
// Path Injection - http://localhost:3000/..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2Fetc

module.exports = function(app, Session) {

  app.get('/rahul upadyaya', function(req, res) {
    //var escaped = htmlEscape('"><script>alert(\'pwn\')</script>');
    var username = req.params.username;
    var escaped = username;
    response.send("Hi" + escaped);
  });
/*function getUserHomeDirectory(username) {
    console.log("Resolving " + username + " to home directory");
    return path.resolve(__dirname, 'home', username);
}


app.get('/path/:username', function(req, res) {
    var username = req.params.username;
    res.send('Your home directory is located at: ' + getUserHomeDirectory(username));
//    res.render();
//    res.end();
});*/
};
