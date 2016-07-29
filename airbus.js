var copyright = "Copyright 2016, Jack Pavlov, All rights reserved.";
console.log(copyright);

	var button = document.getElementById('btnSubmit');
	var totalTickets;
	var availSeats;
	
document.getElementById('formTest').addEventListener('btnSubmit', availableSeats);
function availableSeats(event) {
	event.preventDefault();
	var maxSeats = 350;
	var tempTickets = parseInt(document.getElementById('txtTickets').value, 10) || 0;
	var compPasses = parseInt(document.getElementById('txtPasses').value, 10) || 0;
	totalTickets = tempTickets + compPasses;
	availSeats = maxSeats - totalTickets;	
}

function showResults(){
	$('#airbus').hide();
	document.getElementById('results').innerHTML = 'Seats Purchased: ' + totalTickets + '<br>';
	document.getElementById('results').innerHTML += 'Total Available Seats: ' + availSeats + '<br>';
}
button.onclick = function(){
		showResults();
	}