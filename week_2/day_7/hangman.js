// Step 1: Word Dictionary
const words = ["apple", "orange", "durian", "mangosteen", "mango", "lychee"]

const wordDisplay = document.querySelector("#word-display")
const startBtn = document.querySelector("#start-game")
const inputForm = document.querySelector("#input-form")
const textInput = document.querySelector("#text-input")

let selectWordIdx = Math.floor(Math.random(words.length))
let displayText = []

let counter = 0;


function gameStart(){
  let word = words[selectWordIdx]
  counter = 10;
  console.log(word)
  displayText = "_".repeat(word.length).split("")

  for(let i = 0; i < displayText.length; i++){
    const charDisplay = document.createElement("span")
    charDisplay.setAttribute("style", "margin: 20px")
    charDisplay.innerText = displayText[i]
    wordDisplay.appendChild(charDisplay)
  }

  inputForm.setAttribute("style","display:block")
}

function onKeyInput(e){
  e.preventDefault()
  // Gets the current selected word
  let word = words[selectWordIdx]

  // Select all underscore characters in HTML
  const charDisplay = document.querySelectorAll("#word-display span")

  // Evaluate if inputted character exists in selected word
  if(word.includes(textInput.value)){
    // Update underscore that matches character position
    for(let i = 0; i < displayText.length; i++){
      //  replace displayText at position i with text input
      if(word[i] === textInput.value){
        // If character at position i in word matches text input
        displayText[i] = word[i]
        // replace charDisplay span element inner text at position i with text input
        charDisplay[i].innerText = displayText[i]
      }
    }
  } else {
    counter -= 1;
    console.log(counter)
    alert("You guessed wrong, try again!")
  }


}


startBtn.addEventListener("click",gameStart)
inputForm.addEventListener("submit", onKeyInput)