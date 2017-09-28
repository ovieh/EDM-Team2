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
 //var ref = database.ref("server/saving-data/fireblog/posts");

//Function to add a new employee
 function addEmployee(){
 	event.preventDefault();
 	console.log("WORKS!");
 	//Declare var
 	name = $("#name-input").val().trim();
 	role = $("#role-input").val().trim();
 	date = $("#date-input").val().trim();
 	rate = $("#rate-input").val().trim();
 	//If the inputs forms are NOT empty then
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
 	}else{
 		alert("Fill all fields to add a new employee!")
 	}
 }
 //Click event for submit button
 $(document).on("click", "#submit", addEmployee);
 

 //asynchronous callback to read the data at our posts reference
 database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());
  var name = childSnapshot.val().name;
  var role = childSnapshot.val().role;
  var date = childSnapshot.val().date;
  var rate = childSnapshot.val().rate;
  var monthWorked = "n/a";
  var billed = "n/a";
  var tableDiv = ("<tr><td>"+name+"</td>"+"<td>"+ role +"</td>"+"<td>"+ date +"</td>"+"<td>"+ billed +
  	"<td>"+ rate + "</td>"+"<td>"+ monthWorked +"</td>"+"</td>"+"</tr>");
  
  console.log(name);
  console.log(moment(1506555728432).format('DD/MM/YY'));

  $("#tableBody").append(tableDiv);
  getMonthsWorked(childSnapshot);
 }, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
 });


function getMonthsWorked(childSnapshot) {
	var now = moment();
	var difference = now.diff(childSnapshot.val().date)
	var duration = moment.duration();
	console.log(difference);
}

