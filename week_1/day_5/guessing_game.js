// Create a game where the user will guess a number between 1 and 10

// This was handy: https://medium.com/@josephcardillo/using-math-random-in-javascript-c49eff920b11

document.getElementById('start').onclick = guessingGame

function guessingGame() {
	answer = Math.floor(Math.random() * 11)

	console.log(answer)
	
	let userGuess = prompt("Please enter a number between 0 & 10")
	
	while (userGuess != answer) {
		if (userGuess < answer) {
			alert("Your guess is too low")
		} else if (userGuess > answer) {
			alert("Your guess is too high")
		}
		userGuess = prompt("Please enter a number between 1 & 10")
	}	
	
	alert("You win!")
}