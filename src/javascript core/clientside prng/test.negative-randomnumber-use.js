module.exports = function(app, session) {
    
  app.use(session({
      secret: 'session secret',
      cookie: {
//        httpOnly: true,
//        secure: true
      }
    }));
  
  app.get('/explicitly_using_randomnumber', function(req, res) {
    var mySess = req.session;
      var rnd = Math.random();
    res.send('Please check your cookie' + rnd);
  });
};