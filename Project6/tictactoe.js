const prompt = require('prompt-sync')();
let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
let currentPlayer = 'X';

function displayBoard() {
    console.log(`${board[0]} | ${board[1]} | ${board[2]}`);
    console.log('----------');
    console.log(`${board[3]} | ${board[4]} | ${board[5]}`);
    console.log('----------');
    console.log(`${board[6]} | ${board[7]} | ${board[8]}`);
}

function gameStart() {
    while (board.some(function (value) { return value === ' '; })) {
        displayBoard();
        console.log("Player " + currentPlayer + ", enter a number (1-9):");
        let selection = Number(prompt()) - 1;

        if (selection >= 0 && selection <= 8 && board[selection] === ' ') {
            board[selection] = currentPlayer; // set the letter of the currwnt player at the chosen index
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        } else {
            console.log('Invalid move, please try again');
        }
        checkWinner();
    }
    
    console.log("game over board is full");
}
function checkWinner() {
    // check if theres a winner in any of the diagonals : digonal1(0 , 4 , 8) & diagonal2(2 , 4 , 8)
    if ([0, 4, 8].every(function (n) { return board[n] === "X"; }) ||
        [2, 4, 6].every(function (n) { return board[n] === "X"; })) {
        console.log("X wins");
        process.exit(0);
    }
    if ([0, 4, 8].every(function (n) { return board[n] === "O"; }) ||
        [2, 4, 6].every(function (n) { return board[n] === "O"; })) {
        console.log("O wins");
        process.exit(0);
    }
    // check if theres a winner in any of the rows : row1(0, 1 , 2) & row2(3, 4, 5) & row3(6, 7, 8)
    if ([0, 1, 2].every(function (n) { return board[n] === "X"; }) ||
        [3, 4, 5].every(function (n) { return board[n] === "X"; }) || 
        [6, 7, 8].every(function (n) { return board[n] === "X"; })) {
        console.log("X wins");
        process.exit(0);
    }
    if ([0, 1, 2].every(function (n) { return board[n] === "O"; }) ||
        [3, 4, 5].every(function (n) { return board[n] === "O"; }) || 
        [6, 7, 8].every(function (n) { return board[n] === "O"; })) {
        console.log("X wins");
        process.exit(0);
    }



    // check if theres a winner in any of the lines : line1(1, 4 , 7) & line2(3, 6, 9)
    if ([1, 4, 7].every(function (n) { return board[n] === "X"; }) ||
        [3, 6, 9].every(function (n) { return board[n] === "X"; })) {
        console.log("X wins");
        process.exit(0);
    }
    if ([1, 4, 7].every(function (n) { return board[n] === "O"; }) ||
        [3, 6, 9].every(function (n) { return board[n] === "O"; })) {
        console.log("O wins");
        process.exit(0);
    }
}
gameStart();


/**
 * function checkWinner(symbol) {
    const winningCombinations = [
        [0, 4, 8], [2, 4, 6],  // Diagonals
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8]   // Columns
    ];
    
    return winningCombinations.some(function (combination) {
        return combination.every(function (n) {
            return board[n] === symbol;
        });
    });
}

if (checkWinner("X")) {
    console.log("X wins");
    process.exit(0);
}

if (checkWinner("O")) {
    console.log("O wins");
    process.exit(0);
}
 */