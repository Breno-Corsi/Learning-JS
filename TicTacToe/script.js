const symbols = ["X", "O"];

let count = 0;
let positionArray = [
    ['','',''],
    ['','',''],
    ['','','']
];

function inputSymbol(position, i, j) {
    let pos = document.getElementById(position);
    if (pos.innerHTML == '') {
        pos.innerHTML = symbols[0];
        positionArray[i][j] = symbols[0];
        [symbols[0], symbols[1]] = [symbols[1], symbols[0]];
    }
    if (checkVictory()) {
        alert(symbols[1] + " won the game!");
        newGame();
    }
    count++;
    if (count == 9) {
        count == 0;
        alert("Draw!");
        newGame();
    }
}

function checkVictory() {
    for (let i = 0; i <= 2; i++) {
        if (
            positionArray[i][0] != '' &&
            positionArray[i][0] == positionArray[i][1] &&
            positionArray[i][0] == positionArray[i][2]
        ) {
            return true;
        }
    }
// https://stackoverflow.com/questions/14832603/check-if-all-values-of-array-are-equal
    for (let j = 0; j <= 2; j++) {
        if (
            positionArray[0][j] != '' &&
            positionArray[0][j] == positionArray[1][j] &&
            positionArray[0][j] == positionArray[2][j]
        ) {
            return true;
        }
    }
    if (positionArray[0][0] != '' &&
        positionArray[0][0] == positionArray[1][1] &&
        positionArray[1][1] == positionArray[2][2]
    ) {
        return true;
    }
    if (positionArray[0][2] != '' &&
        positionArray[0][2] == positionArray[1][1] &&
        positionArray[1][1] == positionArray[2][0]
    ) {
        return true;
    }
}

function newGame() {
    count = 0;
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            positionArray[i][j] = '';
        }
    }
    console.log(positionArray);
    for (let n = 1; n <= 9; n++) {
        let id = 'p'+n;
        pos = document.getElementById(id);
        pos.innerHTML = '';
    }
}