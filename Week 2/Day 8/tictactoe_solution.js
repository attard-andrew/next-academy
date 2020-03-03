let currentPlayer = "X"
let gameEnded = false
let cells = document.querySelectorAll(".cell")
const swapPlayers = () => {
  currentPlayer = currentPlayer === "X"? "O":"X"
}
const convertCellValues = () => {
  const results = []
  for(let i = 0; i < cells.length; i ++) {
    results.push(cells[i].innerText)
  }
  return results
}
const playPiece = (i, piece) => {
  if(cells[i].innerText === "" && gameEnded === false){
    cells[i].innerText = piece
    let winner = checkWin()
    if(!winner){
      if(convertCellValues().includes("")){
        swapPlayers()
      } else {
        alert("Draw! Nobody won!")
        gameEnded = true
      }
    } else {
      gameEnded = true
      setTimeout(() => {
        alert(`Player ${winner} has won` )
      },500)
    }
  }
}
for(let i = 0; i < cells.length; i++){
  cells[i].addEventListener("mouseenter", () => {
    if(cells[i].innerText === ""){
      cells[i].style.backgroundColor="green"
    } else {
      cells[i].style.backgroundColor = "red"
    }
  })
  cells[i].addEventListener("mouseleave", () => {
    cells[i].style.backgroundColor="white"
  })
  cells[i].addEventListener("click", (e) => {
    playPiece(i, currentPlayer)
    if(!gameEnded){
      let computerMove = Math.floor(Math.random() * cells.length)
      while(cells[computerMove].innerText !== ""){
        computerMove = Math.floor(Math.random() * cells.length)
      }
      playPiece(computerMove, currentPlayer)
    }
  })
}
const checkWin = () => {
  let winner = null
  const currentBoard = convertCellValues()
  const winConditions = [
    currentBoard[0] + currentBoard[1] + currentBoard[2],
    currentBoard[3] + currentBoard[4] + currentBoard[5],
    currentBoard[6] + currentBoard[7] + currentBoard[8],
    currentBoard[0] + currentBoard[3] + currentBoard[6],
    currentBoard[1] + currentBoard[4] + currentBoard[7],
    currentBoard[2] + currentBoard[5] + currentBoard[8],
    currentBoard[0] + currentBoard[4] + currentBoard[8],
    currentBoard[2] + currentBoard[4] + currentBoard[6]
  ]
  for(let i = 0; i < winConditions.length; i ++) {
    if(winConditions[i] === "XXX"){
      winner = "X"
      break
    } else if(winConditions[i] === "OOO"){
      winner = "O"
      break
    }
  }
  return winner
}