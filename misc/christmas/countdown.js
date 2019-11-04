function countdownFormatted() {
	var currentYear = new Date().getFullYear();
	var date = new Date(currentYear + "-12-25 00:00:00");
	if (date < new Date()) {
		currentYear++;
		date = new Date(currentYear + "-12-25 00:00:00");
	}
	var diff = date - new Date();
	var str = "";
	//str += Math.floor(diff / (30*24*60*60*1000)) + " months, ";
	//diff = diff % (30*24*60*60*1000);
	str += Math.floor(diff / (24*60*60*1000)) + ' <span class="label">days</span> ';
	diff = diff % (24*60*60*1000);
	str += Math.floor(diff / (60*60*1000)) + ' <span class="label">hours</span> ';
	diff = diff % (60*60*1000);
	str += Math.floor(diff / (60*1000)) + ' <span class="label">minutes</span> ';
	diff = diff % (60*1000);
	str += Math.floor(diff / 1000) + ' <span class="label">seconds</span>';
	return str;
}

window.onload = function () {
	var display = document.querySelector('#countdown');
	display.innerHTML = countdownFormatted();
	setInterval(function() {
		display.innerHTML = countdownFormatted();
	}, 200);
};