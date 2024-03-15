const board = []
const allCells = document.querySelectorAll('.cell')
let gameWon = false

// TODO: napravit da se ćelije disableaju

allCells.forEach((oneCell) => {
    board.push(oneCell)
})

function game() {
    let player
    let counter = 0

    function playersTurn() {
    if (counter % 2 === 0) {
        player = 'X'
        document.querySelector('#status-message').innerHTML = `Player O's turn`
    } else {
        player = 'O'
        document.querySelector('#status-message').innerHTML = `Player X's turn`
    }
    counter++
    }
    allCells.forEach((cell, index) => {
        cell.addEventListener('click', () => {
            playersTurn()
            cell.innerHTML = `${player}`
            checkWin(board)
        })
    })
}
game()

function checkWin(cells) {
    while(true) {
    const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]              
    ]

    for (const combo of winCombinations) {
        const [a, b, c] = combo
        if (cells[a].innerHTML && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML) {
            document.querySelector('#status-message').innerHTML = `Winner is ${cells[a].innerHTML}!`
            disableCells()
        }
    }
    return null
}}

function checkGameWon() {
    if (document.querySelector('#status-message').innerHTML === 'Winner is X!' || document.querySelector('#status-message').innerHTML === 'Winner is O!') {
        gameWon = true
        disableCells()
    } 
}

function disableCells() {
    allCells.forEach((cell) => {
        cell.removeEventListener('click', checkGameWon)
    })
}

function resetGame() {
    allCells.forEach((cell) => {
        cell.innerHTML = ''
    })
}

document.querySelector('#reset-button').addEventListener('click', () => {
    resetGame()
})