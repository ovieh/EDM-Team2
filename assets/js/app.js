 // Initialize Firebase	
 var config = {
 	apiKey: "AIzaSyA11elUq2gNmvvDxPouHf1PrRHR87XwaB4",
 	authDomain: "silent-sonics.firebaseapp.com",
 	databaseURL: "https://silent-sonics.firebaseio.com",
 	projectId: "silent-sonics",
 	storageBucket: "",
 	messagingSenderId: "1831096365"
 };
 firebase.initializeApp(config);
 //Initialize var
 var name, role, date, rate;
 var database = firebase.database();
//Function to add a new employee
 function addEmployee() {
 	event.preventDefault();
 	name = $("#name-input").val().trim();
 	role = $("#role-input").val();
 	date = $("#date-input").val();
 	rate = $("#rate-input").val();
 	if (name != "" && role != "" && date != "" && rate > 0) {
 		console.log("WORKS!");
 		//Push to firebase
 		database.ref().push({
 			name: name,
 			role: role,
 			date: date,
 			rate: rate,
 			dateAdded: firebase.database.ServerValue.TIMESTAMP
 		})
 	}
 }
 //Click event for submit button
 $(document).on("click", "#submit", addEmployee);