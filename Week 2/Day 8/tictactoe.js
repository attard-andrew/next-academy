/* Rules

* Each user will take turns choosing a play field
* When a play field is chosen, an X or and O will be placed in it
* If any user has 3 Xs or 3 Os in a row, either horizontally,
vertically, or diagonally, they win
* If all play fields are full, the game ends in a draw

*/

/*

* There is up to 9 turns
* When a play field is clicked, put an X or O
* The first move is always X, then it alternates between X & O
* If all 9 play fields are full, the game ends in a draw


/* Constants */

/* This creates an array from the game board play fields, [0] is the top left
field, [1] is the top middle field, [2] is the top right field, etc.*/
const gameboard = Array.from(document.querySelectorAll('#tictactoe .row .play-field'))
console.log(gameboard)
console.log(gameboard[1])
const turnLimit = 9
let turnCount = 0

/* Assuming that X always goes first, even # turns are X, and odd # turns are O */

[0][1][2]
[3][4][5]
[6][7][8]

/* possible win:

[0][1][2]

[3][4][5]

[6][7][8]

[0]
[3]
[6]

[1]
[4]
[7]

[2]
[5]
[8]

[2]
[4]
[6]

[0]
[4]
[8]

*/

Functional requirements
 * If there are 3 X in a row or 3 O in a row, declare a ServiceWorkerContainer
 * If there are no 3 in a row & 9 turns have passed, declare a draw
 * Even turns are X, odds are O, assuming X always goes first
 * When a div is clicked, populate it with the current turn's character
 * If a div is not blank, then don't do anything
 * When hovering over a div, slightly change the background ConvolverNode
 * Click a button to reset the game (turn counter = 0, board is wiped)

const winConditiosn = [
	[0, 1, 2],
	[0, 1, 3]
]

for (let i = 0; i < gameboard.length; i++) {
	gameboard[i].addEventListener('click', function() {
			gameboard[i].innerText = currentPlayer;
	
	})
}
