
let soso = 'X';

let matrix = new Array(9);

let winner;


function move(index) {

    let cell = document.getElementById(`cell_${index}`);

    if (winner || cell.innerHTML !== "") {
        return;
    }


    cell.innerHTML = `<div>${soso}</div>`;


    matrix[index - 1] = soso;

    console.log(matrix)

    if (soso === "X") {
        soso = 'O';
    } else {
        soso = 'X';
    }

    check();
}



function check() {
    //Horizontal

    for (let i = 0; i <= 8; i += 3) {
        if (matrix[i] === matrix[i + 1] && matrix[i + 1] === matrix[i + 2] && matrix[i]) {
            winner = matrix[i];
            break;
        }
    }


    //Vertical



    if (!winner) {
        for (let i = 0; i <= 2; i++) {
            if (matrix[i] === matrix[i + 3] && matrix[i + 3] === matrix[i + 6] && matrix[i]) {
                winner = matrix[i];
                break;
            }
        }
    }



    //Diagonal

    if (!winner && matrix[0] === matrix[4] && matrix[4] === matrix[8] && matrix[0]) {
        winner = matrix[0];
    }

    if (!winner && matrix[2] === matrix[4] && matrix[4] === matrix[6] && matrix[2]) {
        winner = matrix[2];
    }

    if (winner) {
        showWinningText();
    }


}




function showWinningText() {
    let winningText = document.getElementById('winning_text');

    winningText.style.display = 'block';
    winningText.innerText = `Hello I'm Soso from Ozu and the winner iiiiiiiis ${winner}`;

    let resetButton = document.getElementsByTagName('button')[0];
    resetButton.style.display = 'block';
}



function reset() {

    soso = 'X';
    winner = null;
    matrix = new Array(9);
    let winningText = document.getElementById('winning_text');

    winningText.style.display = 'none';
    let resetButton = document.getElementsByTagName('button')[0];
    resetButton.style.display = 'none';

    let newGame = document.getElementsByClassName('cell');
    newGame = Array.from(newGame);

    newGame.forEach(element => {

        element.innerHTML = '';

    });


}
