var path = require('path');


// Start the app and visit the following URLs
// Path Injection - http://localhost:3000/..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2Fetc

//function getUserHomeDirectory(username) {
//    console.log("Resolving " + username + " to home directory");
//    return path.resolve(__dirname, 'home', username);
//}
//
//app.get('/path/:username', function(req, res) {
//    var username = req.params.username;
//    res.send('Your home directory is located at: ' + getUserHomeDirectory(username));
//});
//
//app.get('/path/:username', function(req, res) {
//    var username = req.params.username;
//	
//	//Valid username contains Alpha-Numeric characters, is at least 3 characters long but less than 16
//    res.send('Your home directory is located at: ' + getUserHomeDirectory(username));
//});

var options = [ "jack", "chris", "john" ]
  
function getUsernameForID(id) {
    var num = parseInt(id);
    return options[num];
}
  
app.get('/home/:id', function(req, res) {
    // If the ID is invalid, the error response will be triggered by getUsernameForID throwing an error
    var userhome = path.join(__dirname, Constants.HOME_DIR, getUsernameForID(req.params.id));
    // ... Continue processing the request, assured the path is valid
});