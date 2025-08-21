function getTextInput() {
    return document.getElementById("text-input").value.toLowerCase();
}

function proccess() {
    let userTextInput = getTextInput();
    // writeToTextArea("unique-words", text);
    // writeToTextArea("word-count", text);
    // writeToTextArea("top-five-words", text);
    let arrayTextInput = turnTextIntoArray(userTextInput);
    const wordsArray = getWordsArray(arrayTextInput);
    const wordCountResultArray = getWordCount(wordsArray);
    const uniqueWordsArray = getUniqueWords(wordsArray);
    writeToTextArea("word-count", wordCountResultArray);
    writeToTextArea("unique-words", uniqueWordsArray);
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
    let wordsArray = [];
    while (inputArray.length > 0) {
        let count = 0;
        let word = inputArray[0];
        while (inputArray.indexOf(word) != -1) {
            inputArray.splice(inputArray.indexOf(word), 1);
            count++
        }
        wordsArray.push(count, word);
    }
    return wordsArray;
}

function getWordCount(inputArray) {
    let proccessResultArray = [];
    proccessResultArray.push(...inputArray);
    for (let i = 1; i < proccessResultArray.length; i += 4) {
        proccessResultArray.splice(i, 0, ': ');
        proccessResultArray.splice(i+2, 0, '\n');
    }
    proccessResultArray = proccessResultArray.join('');
    return proccessResultArray;
}

function getUniqueWords(inputArray) {
    console.log(inputArray);
    let proccessResultArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] == 1) {
            console.log(inputArray[i+1]);
            proccessResultArray.push(inputArray[i+1]);
        }
    }
    return proccessResultArray;
}