const board = ['', '', '', '', '' , '', '', '', '']

function game() {
    const allCells = document.querySelectorAll('.cell')
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
            let clickedCell = document.getElementById(`cell-${index}`)

            if (clickedCell.innerHTML === 'X') {
                console.log('X wins')
            }
        })
    })

}
game()

function resetGame() {
    allCells.forEach((cell) => {
        cell.innerHTML = ''
    })
}

document.querySelector('#reset-button').addEventListener('click', () => {
    resetGame()
})

/*
function checkWin(cells) {
    // Define winning combinations
    const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal lines
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical lines
        [0, 4, 8], [2, 4, 6]              // Diagonal lines
    ];

    // Check if any winning combination is present
    for (const combo of winCombinations) {
        const [a, b, c] = combo;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            return { winner: cells[a], cells: combo }; // Return the winning player symbol and the winning combination
        }
    }
    return null; // No winning combination found
}

// Example usage:
const cells = ['X', 'O', 'X',
               ' ', 'X', 'O',
               'O', ' ', 'X'];

const winResult = checkWin(cells);
if (winResult) {
    console.log(`Player ${winResult.winner} wins with cells: ${winResult.cells}`);
} else {
    console.log("No winner yet.");
}
*/