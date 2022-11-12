// Update later to make this so a timer is set for 5/10/appropriate interval
let countDownDate;

let countdown = function() {

	// Get the current date and time
	let now = new Date().getTime();

	// Find the distance between now and the count down date
	let diff = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((diff % (1000 * 60)) / 1000);

	// Display the result in timer div
	document.getElementById("timer").innerHTML = hours + "h "
		+ minutes + "m " + seconds + "s ";
	// If the count down is finished, write some text
	if (now >= countDownDate) {
   	clearInterval(countdown);
   	document.getElementById("timer").innerHTML = "Time to start studying again!";
  }
}

function startTimer() {
	countDownDate = new Date().getTime() + 300000;
	setInterval(countdown, 1000);
}
