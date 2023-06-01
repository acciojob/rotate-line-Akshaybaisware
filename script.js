//your JS code here. If required.
window.onload =function()
	{
		let line = document.getElementById("line");
		let angle = 0;
		let speed = 1;
		function rotateLine(){
			line.style.transform="rotate(" + angle + "deg)";
			angle+=speed;
			requestAnimationFrame(rotateLine);
		}
		rotateLine();
	}
