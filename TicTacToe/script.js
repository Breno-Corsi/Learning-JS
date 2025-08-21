const symbols = ["X", "O"];

function inputSymbol(position, i, j) {
    let p = document.getElementById(position);
    console.log(position);
    p.innerHTML = symbols[0];
    [symbols[0], symbols[1]] = [symbols[1], symbols[0]];
}
