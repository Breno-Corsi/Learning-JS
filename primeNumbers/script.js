let startNumber = 0;
let endNumber = 0;
let primeNumbers = [];

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
    checkForException(startNumber);
    showResult(isPrime(startNumber));
    console.timeEnd("calculateNumbers");
}

function swapIfSecondValueIsGreater() {
    if (startNumber > endNumber) {
        [startNumber, endNumber] = [endNumber, startNumber];
    }
}

function checkForException(start) {
    if (start === 0 || start === 1) {
    start = 2;
    }
}


function isPrime(n) {
    console.log("Checking ", n);
    if (n % 2 == 0) {
        console.log(n, "is even!");
        return false;
    }
    maxPossible = Math.sqrt(n);
    for (let i = 3; i == maxPossible; i+=2) {
        if (n % i == 0) {
            console.log(n, " is divisible by ", i);
            return false;
        }
    }
    console.log(n, " is a prime number!");
    return true;
}