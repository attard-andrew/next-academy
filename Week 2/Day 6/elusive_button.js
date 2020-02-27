let clickAttempts = document.getElementById('count')
let msg = document.getElementById('msg')
let btn = document.getElementById('elusiveButton')

let mouseOverCount = 1
const mouseOverLimit = 10

function randomBackground () {
	let a = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	let c = Math.floor(Math.random() * 256);
	let bgColor = `rgb(${a}, ${b}, ${c})`;
	return bgColor;
}

btn.onclick = function () {
	document.body.innerHTML = "<img src='https://media.giphy.com/media/lmftWb5zQqxQk/giphy.gif'>";
}

btn.onmouseover = function () {
	if (mouseOverCount < mouseOverLimit) {
		
		// Change the background color (randomly)
		btn.style.background = randomBackground()

		// Move the div left/right up/down
		btn.style.top = Math.random() * (window.innerHeight - 150) + "px";
		btn.style.left = Math.random() * (window.innerWidth - 150) + "px";

		// Update the count in the message
		clickAttempts.innerHTML = mouseOverCount
		
		// Increase count if limit not reached
		mouseOverCount++
	}

	// Append some text on the message
	if (mouseOverCount > 3 && mouseOverCount < mouseOverLimit) {
		msg.append('ha!')
	}

	console.log(mouseOverCount)
};
