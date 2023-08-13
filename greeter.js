window.addEventListener('load', (event) => {
  time();
});

function time() {
	var greeting = document.getElementById("greeting");
	const date = new Date();
	const hour = date.getHours();
	if (hour < 12) { 
		greeting.innerText = "Good morning";
	}
	else if (hour <= 19) {
		greeting.innerText = "Good afternoon";
	}
	else {
		greeting.innerText = "Good evening";
	}
}


