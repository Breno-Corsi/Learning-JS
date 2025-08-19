function getTextInput() {
    return document.getElementById("text-input").value;
}

function proccess() {
    text = getTextInput();
    writeToTextArea("unique-words", text);
    writeToTextArea("word-count", text);
    writeToTextArea("top-five-words", text);
}

function writeToTextArea(elementId, text) {
    document.getElementById(elementId).value = text;
}