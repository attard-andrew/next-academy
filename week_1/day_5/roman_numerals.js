//const romanNumerals = ["I","IV","V", "IX", "X", "XL","L","XC","C","CD","D","CM","M"];
//const values = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
//let userInput = prompt("Please enter a number")

const romanNumerals = {
	M:1000,
	CM:900,
	D:500,
	CD:400,
	C:100,
	XC:90,
	L:50,
	XL:40,
	X:10,
	IX:9,
	V:5,
	IV:4,
	I:1
  }

let romanized = ""

let userNumber = prompt("Please enter a number to convert into a roman numeral")

function convertToRoman(inputNumber) {
	// For each item in the romanNumerals object
	for (key in romanNumerals) {
		// For the item currently under review, is the input number greater than
		// or equal to the associated key's value? If so, assign the key (roman numeral)
		// to the romanized string, then reduce the user's input number by the associated
		// value. Then - repeat!. At some point, it should stop if the value reaches 0.
		while (inputNumber >= romanNumerals[key]) {
			romanized += key
			console.log(key + ' added to romanized string!')
			inputNumber -= romanNumerals[key]
			console.log(romanNumerals[key] + ' reduced from input number total!')
		}
	}
}

convertToRoman(userNumber)

alert(`The roman numeral for ${userNumber} is ${romanized}!`)


/*

-Take a number input
-Look at each value in each key:value pair in the roman numerals object
-If the value is greater than or equal to the number input, then assign the KEY to an empty string
-Then, reduce the INPUT number by that key's associated value
-Repeat


*/