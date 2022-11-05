// Update later to make this so a timer is set for 5/10/appropriate interval
const countDownDate = new Date().getTime() + 300000;
var countdown  = function() {

	// Get the current date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var diff = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((diff % (1000 * 60)) / 1000);

	// Display the result in timer div
	document.getElementById("timer").innerHTML = hours + "h "
		+ minutes + "m " + seconds + "s ";
	// If the count down is finished, write some text
	if (now >= countDownDate) {
   	clearInterval(countdown);
   	document.getElementById("timer").innerHTML = "Time to start studying again!";
  }
}
// Update the count down every second
var timer = setInterval(countdown, 1000);
