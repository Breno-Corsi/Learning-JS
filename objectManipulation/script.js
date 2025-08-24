const abacate = document.getElementById("sim-terminal");

function showValue(text) {
    abacate.value += text + "\n"
}

const person1 = {name:"Breno", sex:"Male", year:2002, eyeColor:"brown", sport:"F1"};

let properties = 0;
for (let i of Object.keys(person1)) {
    properties++
}
showValue("Number of properties: " + properties);

showValue("Key 'sex' exists: " + ('sex' in person1));
showValue("Key 'height' exists: " + ('height' in person1));

showValue("Keys of object: " + Object.keys(person1));

showValue("Value of object: " + Object.values(person1));

function returnCopyOfObj(objName) {
    const clone = structuredClone(objName);
    return clone;
}

let text = '';
for (let x in returnCopyOfObj(person1)) {
    text += returnCopyOfObj(person1)[x] + " ";
}
showValue("Copy of object: " + text);



// Beginner Level
// Count how many properties an object has. X
// Check if a specific key exists in an object.X
// List all keys of an object.X
// List all values of an object.X
// Create a function that returns a copy of the object.X
// Intermediate Level
// Merge two objects into a new object.
// Invert keys and values of an object.
// Filter an object based on the value of its properties.
// Remove a specific property from an object.
// Create an object from two arrays: one of keys and another of values.