let startNumber = 0;
let endNumber = 0;

function showResult(result) {
    document.getElementById("output-number").value = result;
}

function getNumber(elementId) {
    numberValue = Number(document.getElementById(elementId).value);
    if (numberValue < 0) {
        alert("No negative values allowed!");
        return false;
    } else if (numberValue > 10000000) {
        alert("Max value allowed: 10.000.000");
        return false;
    }
    return numberValue;
}

function calculateNumbers() {
    startNumber = getNumber("start-number");
    endNumber = getNumber("end-number");
    swapIfSecondValueIsGreater();
    console.time("calculateNumbers");
    
    console.timeEnd("calculateNumbers");
}

function swapIfSecondValueIsGreater() {
    if (startNumber > endNumber) {
        [startNumber, endNumber] = [endNumber, startNumber];
    }
}