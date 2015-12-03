// Positive Case
var str_1 = "I am an example input for find.";
var cursor = db.collection.find({name : str_1}, function (err, docs)

//Use of untrusted input.
var cursor = db.collection.find({name: req.params.name}, function (err, docs)

//Use of untrusted input in $where
var condition = "this.group == "+req.params.group;
var cursor = db.myCollection.find( { $where: condition}, function (err, docs)