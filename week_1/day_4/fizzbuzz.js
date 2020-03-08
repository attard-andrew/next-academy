// The first function checks if the input is valid. If it is, then it returns the users input.
function checkInput() {
	// Define the user input vairable
	let userInput = prompt("Please enter a number between 1 & 100", "Input Number")
	// As long as the input is not a number, is less than 1, or great than 100, then display
	// the appropriate error message and ask for a new input value
	while (isNaN(userInput) || userInput < 1 || userInput > 100) {
		if (isNaN(userInput)) {
			alert("You've entered gobbledygook, please enter a NUMBER.")
		} else if (userInput > 100) {
			alert("The number you entered is too high, please enter a value of 100 or less")
		} else if (userInput < 1) {
			alert("The number you entered is too low, please enter a value of 1 or greater")
		} 
		userInput = prompt("Please enter a number between 1 & 100", "Input Number")
	}
	// Once a valid input is entered, return the value
	return userInput
}

// Evaluates the input value to return "FizzBuzz" if a multiple of both 3 & 5,
// "Buzz" if it is only a multiple of 5
// "Fizz" if it is only a multiple of 3
function fizzBuzz(x) {
	if ((x % 3) == 0 && (x % 5) == 0) {
		alert("FizzBuzz")
	} else if ((x % 5) == 0) {
		alert("Buzz")
	} else if ((x % 3) == 0) {
		alert("Fizz")
	} else {
		alert(x)
	};
}

// Run the fizzBuzz function on the output value of the checkInput function
fizzBuzz(checkInput())