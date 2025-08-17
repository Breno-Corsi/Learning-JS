let stringOutput = "";
let arrayStringInput = [];

function getStringInput() {
    let stringInput = document.getElementById("string-input").value;
    return stringInput;
}

function showStringOutput(stringOutput) {
    document.getElementById("string-output").value = stringOutput;
}

function compressString() {
    let stringInput = getStringInput();
    let arrayStringInput = stringInput.split("");
    stringOutput = "";
    compressCharacters(arrayStringInput);
    showStringOutput(stringOutput);
}

function compressCharacters(arrayString) {
    for (let charIndex = 0; charIndex < arrayString.length; charIndex++) {
        let letter = arrayString[charIndex];
        let timesLetterAppears = 1;
        while (arrayString[charIndex] == arrayString[charIndex + 1]) {
            timesLetterAppears++;
            arrayString.splice(charIndex, 1);
        }
        stringOutput = stringOutput.concat(timesLetterAppears, letter);
    }
}

function decompressString() {

}