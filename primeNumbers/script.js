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
    } else if (numberValue > 100000000) {
        alert("Max value allowed: 10.000.000");
        return false;
    }
    return numberValue;
}

function calculateNumbers() {
    startNumber = getNumber("start-number");
    endNumber = getNumber("end-number");
    if (!checkIfSecondValueIsGreater()) {
        return false;
    };
    checkForException(startNumber);
    console.time("calculateNumbers");
    for (startNumber; startNumber <= endNumber; startNumber++) {
        if (isPrime(startNumber) == true) {
            primeNumbers.push(startNumber);
        }
    }
    // console.log(primeNumbers);
    showResult(primeNumbers);
    console.timeEnd("calculateNumbers");
}

function checkIfSecondValueIsGreater() {
    if (startNumber > endNumber) {
        alert("Start number must be less than end number!");
        return false;
    }
    return true;
}

function checkForException(start) {
    if (start === 0 || start === 1) {
        primeNumbers.push(2);
        startNumber = 2;
    }
}

function isPrime(n) {
    if (n % 2 == 0) {
        // console.log(n, "is even!");
        return false;
    }
    let maxPossible = Math.sqrt(n);
    for (let i = 3; i <= maxPossible; i += 2) {
        // console.log(n, "/", i);
        if (n % i == 0) {
            // console.log(n, " is divisible by ", i);
            return false;
        }
    }
    // console.log(n, " is a prime number!");
    return true;
}