// Exercise 1: Conver the below functions to use arrow syntax

// function addAndMultiply(x, y, z) {
// 	return ((x + y) * z)
//   }

let addAndMultiply = (x, y, z) => (
	(x + y) * z
)

console.log(addAndMultiply(4,8,5)) // 60

// Also fix the string interpolation using Template Literals
// function selfIntro(name, hobby, count) {
// 	return "My name is " + name + ". I practice " + hobby + " " + count + " times a day."
//   }
  
let selfIntro = (name, hobby, count) => {
	return `My name is ${name}. I practice ${hobby} ${count} times a day.`
}

console.log(selfIntro('Shanqyeet', 'Kendama', '18')) // My name is Shanqyeet. I practice Kendama 18 times a day.

// Exercise 2: Simplify this arrow function
// tips: remove curly braces
// let squared = (x) => {
// 	return x * x
//   }

let squared = (x) => (
	x * x
)

// Exercise 3: Using arrow function and Array.map(), complete pricesWithTax to get desired output:

// const prices = [1.00, 2.00, 3.00, 4.00]
// const gst = 0.06

// const pricesWithTax = prices.map(x => x + (x * gst)); // Complete this with .map

// console.log(pricesWithTax) // you should get [1.06, 2.12, 3.18, 4.24]

// Exercise 4: Now do it again without using .map, use .forEach instead:

const prices = [1.00, 2.00, 3.00, 4.00]
const gst = 0.06

const pricesWithTax = prices.forEach(function(price) {
	return price + (price * gst)
})

console.log(pricesWithTax) // you should get [1.06, 2.12, 3.18, 4.24]


// user.hobbies.forEach(function(hobby) {
// 	hobby()
//   })