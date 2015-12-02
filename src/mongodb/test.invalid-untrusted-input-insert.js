  'use strict';

var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
  
module.exports = function(app) {

    app.post('/contactlist', function (req, res) {
    console.log(req.body);
    
    db.contactlist.insert(req.body, function(err, doc) {
      res.json(doc);
    });
  });
    
    
};