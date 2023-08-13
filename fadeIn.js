window.addEventListener('load', (event) => {
  fade();
});
  
function fade() {
    setInterval(show, 20);
}
  
function show() {
    var fader = document.getElementById("pic-fade");			
    opacity = Number(window.getComputedStyle(fader).getPropertyValue("opacity"));
	
        if (opacity < 1) {
            opacity+= 0.04;
            fader.style.opacity = opacity
        }
}
	