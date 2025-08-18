function showResult(result) {
    document.getElementById("output-number").value = result;
}

function getNumber(elementId) {
    return Number(document.getElementById(elementId).value);
}

function calculateNumbers() {
    startNumber = getNumber("start-number");
    endNumber = getNumber("end-number");
}