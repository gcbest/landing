var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var path = require("path");
var db = require("./public/js/db.js");

// Set up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Connect to MongoDB
mongoose.connect(db.uriString, function (err, res) {
      if (err) {
      console.log ('ERROR connecting to: ' + db.uriString + '. ' + err);
      } else {
      console.log ('Succeeded connected to: ' + db.uriString);
      }
});

// Static file support with public folder
app.use(express.static("public"));

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// ROUTES
// ==========================================================

// Find all books marked as unread
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.post("/saveCandidate", function(req,res) {
	var newCandidate = req.body;

	newCand = new db.candidate({
		firstName: newCandidate.firstName,
		lastName: newCandidate.lastName,
		email: newCandidate.email
	});

	newCand.save(function (err) {if (err) console.log ('Error on save!')});
	res.send(newCand);

});

app.post("/saveEmployer", function(req,res) {
	var newEmployer = req.body;

	console.log(newEmployer);
	newEmp = new db.employer({
		firstName: newEmployer.firstName,
		lastName: newEmployer.lastName,
		email: newEmployer.email,
		company: newEmployer.company,
		position: newEmployer.position
	});

	newEmp.save(function (err) {if (err) console.log ('Error on save!')});
	
	res.send(newEmp);
});

// Start the server to begin listening 
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})
