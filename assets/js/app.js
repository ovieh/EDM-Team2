var name, role, date, rate;



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


function addEmployee(){
	event.preventDefault();
	name = $("#name-input").val().trim();
	role = $("#role-input").val();
	date = $("#date-input").val();
	rate = $("#rate-input").val();
	if(name != "" && role != "" && date != "" && rate > 0){
		console.log("WORKS!");
	}
}
//Click event for submit button
$(document).on("click","#submit", addEmployee);
