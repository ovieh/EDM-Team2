var name, role, date, rate;


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
