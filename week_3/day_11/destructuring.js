// EX 1: Complete getState function to match the output

const getState = state => {
	return [state, () => {console.log(`Your state is ${state}`)]
  }
  
  const [state, logState] = getState('stable')
  console.log(state) // The console should print out 'stable'
  logState() // The console should print out 'Your state is stable'

// EX 2: Given the following object: 
const user = {
	id: 101,
	email: 'josh@nextacademy.com',
	personalInfo: {
	  name: 'Josh',
	  address: {
		line1: 'AG-7, Glomac Damansara',
		state: 'Kuala Lumpur',
		country: 'Malaysia'
	  }
	}
  }

// Destructure it, then create a new object named josh that looks like this:
console.log(josh)
/* prints out:
{
  gender: 'male',
  email: 'josh@nextacademy.com',
  address: 'AG-7, Glomac Damansara, Kuala Lumpur, Malaysia'
}
*/

