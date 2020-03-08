// Creating a basic BMI Calculator
// BMI = mass/(height^2) or mass/(height*height)

let myWeight = 70
let myHeight = 1.8
let BMI = (myWeight/(myHeight * myHeight)).toFixed(2)

// Using backticks `` to allow string interpolation (ie. ${BMI})
console.log(`My BMI is ${BMI}`)

if (BMI < 18.5) {
	console.log(`Your BMI is ${BMI}. You are underweight.`)
} else if (BMI > 18.5 && BMI < 24.9) {
	console.log(`Your BMI is ${BMI}. You are in the healthy weight range`)
} else {
	console.log(`Your BMI is ${BMI}. You are overweight`)
};