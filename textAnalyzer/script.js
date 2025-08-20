let wordsArray = [];
let wordCountResultArray = [];

function getTextInput() {
    return document.getElementById("text-input").value.toLowerCase();
}

function proccess() {
    let userTextInput = getTextInput();
    // writeToTextArea("unique-words", text);
    // writeToTextArea("word-count", text);
    // writeToTextArea("top-five-words", text);
    let arrayTextInput = turnTextIntoArray(userTextInput);
    getWordsArray(arrayTextInput);
    getWordCount(wordsArray);
    writeToTextArea("word-count", wordCountResultArray);
}

function writeToTextArea(elementId, text) {
    document.getElementById(elementId).value = text;
}

function turnTextIntoArray(text) {
    text = text.replace(/[^- a-zA-Z]/g, '');
    text = text.split(" ");
    return text;
}

function getWordsArray(inputArray) {
    while (inputArray.length > 0) {
        let count = 0;
        let word = inputArray[0];
        while (inputArray.indexOf(word) != -1) {
            inputArray.splice(inputArray.indexOf(word), 1);
            count++
        }
        wordsArray.push(count, word);
    }
}

function getWordCount(inputArray) {
    wordCountResultArray = wordsArray;
    console.log(wordCountResultArray);
    for (let i = 1; i < wordCountResultArray.length; i += 4) {
        wordCountResultArray.splice(i, 0, ': ');
        wordCountResultArray.splice(i+2, 0, '\n');
    }
    wordCountResultArray = inputArray.join('');
}