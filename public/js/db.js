var mongoose = require('mongoose');

var uristring = 'mongodb://gbest:goodlandingpage@ds129050.mlab.com:29050/heroku_0t3tqm9c';

var Schema = mongoose.Schema;

var candidateSchema = new Schema({
	firstName:  String,
	lastName: String,
	email: String
});

var employerSchema = new Schema({
	firstName:  String,
	lastName: String,
	email: String,
	company: String,
	position: String
});

var Candidate = mongoose.model('candidate-info', candidateSchema);
var Employer = mongoose.model('employer-info', employerSchema);

module.exports = {
	candidate: Candidate,
	employer: Employer,
	uriString: uristring
}



