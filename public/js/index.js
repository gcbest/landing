$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();

    $(".candidateJoin").on("click", function() {

    	
		//Capture user inputs and store into variables
		var firstName = "";
		var lastName = "";
		var email = "";

		firstName = $('#first_name').val().trim(); 
		lastName = $('#last_name').val().trim(); 
		email = $('#email').val().trim(); 

		var newCandidate = {
			firstName: firstName,
			lastName: lastName,
			email: email
		};

		var currentURL = window.location.origin;

		$.post(currentURL + "/saveCandidate", newCandidate, function(data){
            console.log("saved to db");
          });		
	});


    $(".employerJoin").on("click", function() {

    	
		//Capture user inputs and store into variables
		var firstName = "";
		var lastName = "";
		var email = "";
		var company = "";
		var position = "";

		firstName = $('#first_name_emp').val().trim(); 
		lastName = $('#last_name_emp').val().trim(); 
		email = $('#email_emp').val().trim(); 
		company = $('#company').val().trim(); 
		position = $('#position').val().trim();

		var newEmployer = {
			firstName: firstName,
			lastName: lastName,
			email: email,
			company: company,
			position: position
		};

		var currentURL = window.location.origin;

		$.post(currentURL + "/saveEmployer", newEmployer, function(data){
            console.log("saved to db");
          });		
	});
	
});

 $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });



// database.ref().push({
	// 			firstName: firstName,
	// 			lastName: lastName,
	// 			password: password,
	// 			email: email,
	// 			dob: dob
	// 		});

	// database.ref().on('child_added', function(childsnapshot) {
	// 	console.log(childsnapshot.val().firstName);
	// });

// var config = {
//     apiKey: "AIzaSyDGG3MAFBRUusldVQxLxwJC-n8ysXfz2Jg",
//     authDomain: "interviewiq-landing-page.firebaseapp.com",
//     databaseURL: "https://interviewiq-landing-page.firebaseio.com",
//     storageBucket: "interviewiq-landing-page.appspot.com",
//     messagingSenderId: "567023610328"
//   };
//   firebase.initializeApp(config);

// var database = firebase.database();





