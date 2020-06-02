//Create an array with five todos
const todo = ['Walk the dog', 'Do  math homework', 'Wash the dishes', 'Bath the cat', 'Go for jog']
// You have x todos
console.log('You have ' + todo.length + ' todos.');
//Preferred method
console.log(`You have ${todo.length} todos.`);

// Print the first and second to last items -> Todo: walk the dog
console.log('Todo: ' + todo[0]);
console.log('Todo: ' + todo[4]);



console.log('======ARRAY METHODS =========');
// ==== ARRAY METHODS ===== Used to manipulate array
const notes = ['Note 1', 'Note 2', 'Note 3'];


// remove item from END of array and console log item
console.log(notes.pop());

// add new item to END of array
notes.push(`My new note`);
console.log(notes);

// remove and log item from BEGINNING of array
console.log(notes.shift());
console.log(notes);


// add new item to BEGINNING of array
notes.unshift(`My first note`);

console.log(notes.length);
console.log(notes);


// remove and add item from SPECIFIED location in array
notes.splice(1,1, 'This is the new second item');

console.log(notes.length);
console.log(notes);


// add remove items from array using BRACKET  notation
notes[2] = 'This is now the new note 3';
console.log(notes);


console.log('===== CHALLENGE =======');
console.log(todo);

// DELETE the 3rd item
todo.splice( 2, 1);
console.log(todo);

// Add a new item onto the end
todo.push('Add new item');
console.log(todo);

// Remove the first item from the list
todo.shift();
console.log(todo);
