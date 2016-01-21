var path = require('path');


// Start the app and visit the following URLs
// Path Injection - http://localhost:3000/..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2Fetc

module.exports = function(app, Session) {

  /*app.get('/', function(req, res) {
    //var escaped = htmlEscape('"><script>alert(\'pwn\')</script>');
    var username = req.params.username;
    var not_escaped = username;
    var escaped = htmlEscape(username);
    console.log(escaped);
    console.log(not_escaped);
    //response.send("Not Escaped:" + not_escaped + ", Escaped:" + escaped);
  });*/


  

  app.get('/', function(req, res) {
    response.render("index");
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
