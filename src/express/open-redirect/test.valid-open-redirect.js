  'use strict';
  
module.exports = function(app) {

    app.get('/', function (req, res) {
  res.send('Hello World!');
    
    // Verify URL before redirecting
  res.redirect('redirecting to http://www.codiscope.com');
});
    
    
};