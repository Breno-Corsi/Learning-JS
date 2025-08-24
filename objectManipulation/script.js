const abacate = document.getElementById("sim-terminal");

function showValue(text) {
    abacate.value += text + "\n";
}

let person1 = {name:"Breno", sex:"Male", year:2002, eyeColor:"brown", sport:"F1"};

// const person1 = [];
// person1[0] = {name:"Breno", sex:"Male", year:2002, eyeColor:"brown", sport:"F1"};
// person1[1] = {name:"Lucas", sex:"Male", year:1998, eyeColor:"brown", sport:"F1"};
// console.log(person1);

let properties = 0;
for (let i of Object.keys(person1)) {
    properties++;
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

let person2 = {lastName:"Corsi", food:"Feijoada", hairColor:"brown"};

let merged = {...person1, ...person2};

showValue("Merged object value: " + Object.values(merged));

// https://stackoverflow.com/questions/23013573/swap-key-with-value-in-object
const invertedObject = obj => Object.fromEntries(Object.entries(obj).map(a => a.reverse()))

showValue("Inverted object value: " + Object.values(invertedObject(person1)));

// https://stackoverflow.com/questions/29282273/filtering-object-properties-based-on-value
Object.keys(person1).forEach(k => {
  if (person1[k] != 2002) delete person1[k];
});

showValue("Filtered object based on value: " + Object.values(person1));

// https://stackoverflow.com/questions/208105/how-do-i-remove-a-property-from-a-javascript-object
delete person2.lastName;
showValue("Object without year: " + Object.values(person2));

// https://stackoverflow.com/questions/39127989/create-an-object-from-an-array-of-keys-and-an-array-of-values
arr1 = ["name", "lastName", "year"];
arr2 = ["Sabrina", "Corsi", 2013];

var result = {};
arr1.forEach((key, i) => result[key] = arr2[i]);

showValue("Object keys: " + Object.keys(result));
showValue("Object values: " + Object.values(result));

// Beginner Level
// Count how many properties an object has. X
// Check if a specific key exists in an object.X
// List all keys of an object.X
// List all values of an object.X
// Create a function that returns a copy of the object.X
// Intermediate Level
// Merge two objects into a new object.X
// Invert keys and values of an object.X
// Filter an object based on the value of its properties.X
// Remove a specific property from an object.X
// Create an object from two arrays: one of keys and another of values.X