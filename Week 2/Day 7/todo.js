let taskForm = document.getElementById('taskForm')
let userInput = document.getElementById('userInput')
let addTask = document.getElementById('addTask')
let taskList = document.getElementById('taskList')
let newTask = document.getElementById('userInput')

// Give focus to the input field
userInput.focus()

// Function used to remove an item on click
function removeItem(e) {
	e.target.remove()
    // e.target.parentElement.removeChild(e.target);
}

function checkInput(){
	if (userInput.value.length > 3) {
		addTask.style.textDecoration = "none";
		addTask.removeAttribute('disabled');
	} else if (userInput.value.length <= 3) {
		addTask.style.textDecoration = "line-through"
		addTask.setAttribute('disabled', true)
	}
};

userInput.oninput = checkInput

// When the form field is in focus, change the style (transition border color?)
// This shit doesn't work (yet)
// userInput.addEventListener('focus', (event) => {
// 	event.userInput.style.borderColor = 'pink';
// });

// Prevent the default submit button action
document.getElementById("addTask").addEventListener("click", function(event){
	event.preventDefault()
  });

// When the add task button is clicked, append this item to the existing task list
// and clear out the form field
addTask.onclick = function addTask(){
	let taskNode = document.createElement("LI");
	// let taskText = document.createTextNode("TESSSTTTTT");
	let taskText = document.createTextNode(newTask.value);
	taskNode.appendChild(taskText);
	document.getElementById('taskList').appendChild(taskNode);
	// Remove an existing item on click
	taskNode.onclick = removeItem;
	// Clear the input form after task is submit
	taskForm.reset();
	// Return focus to the input field after adding a new task
	userInput.focus()
	checkInput()
};

