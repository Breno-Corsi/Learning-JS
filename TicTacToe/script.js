const symbols = ["X", "O"];

let count = 0;
let positionArray = [
    ['','',''],
    ['','',''],
    ['','','']
]

function inputSymbol(position, i, j) {
    let pos = document.getElementById(position);
    if (pos.innerHTML == '') {
        pos.innerHTML = symbols[0];
        positionArray[i][j] = symbols[0];
        [symbols[0], symbols[1]] = [symbols[1], symbols[0]];
    }
    checkVictory();
    count++;
    if (count == 9) {
        count == 0;
        console.log("Draw!");
    }
}

function checkVictory() {
    for (let i = 0; i <= 2; i++) {
        if (
            positionArray[i][0] != '' &&
            positionArray[i][0] == positionArray[i][1] &&
            positionArray[i][0] == positionArray[i][2]
        ) {
            console.log(symbols[1], "won the game!");
        }
    }
// https://stackoverflow.com/questions/14832603/check-if-all-values-of-array-are-equal
    for (let j = 0; j <= 2; j++) {
        if (
            positionArray[0][j] != '' &&
            positionArray[0][j] == positionArray[1][j] &&
            positionArray[0][j] == positionArray[2][j]
        ) {
            console.log(symbols[1], "won the game!");
        }
    }
    if (positionArray[0][0] != '' &&
        positionArray[0][0] == positionArray[1][1] &&
        positionArray[1][1] == positionArray[2][2]
    ) {
        console.log(symbols[1], "won the game!")
    }
    if (positionArray[0][2] != '' &&
        positionArray[0][2] == positionArray[1][1] &&
        positionArray[1][1] == positionArray[2][0]
    ) {
        console.log(symbols[1], "won the game!")
    }
}