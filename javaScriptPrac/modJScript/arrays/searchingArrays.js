console.log("====== use findIndex to locate index of array object =======");
const notes = [
    {
        title: 'My next trip',
        body: 'I would like to go to Spain'
    },
    {
        title: 'Habbits to work on',
        body: 'Exercise. Eat healthier. Get more sleep.'
    },
    {
        title: 'Office modification',
        body: 'Get a new office chair. Get a standing desk.'
    }
];

//===================================================
// use "findIndex" to match string to index with string match
//===================================================
const findNote = function (notes, noteTitle){
    const index = notes.findIndex(function (note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase();
        })
        return notes[index]
}

const note = findNote(notes, 'Habbits to work on')
console.log(note)




console.log("====== use find to locate item of array object =======");
//===================================================
// use "find" to locate item with string to string match
//===================================================
const findNote2 = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase();
        })
}


const note2 = findNote2(notes, 'Office MOdification')
console.log(note2)






// NOTE:  push used in functions will modify the original array in memmory.
// CHALLENGE AREA
// 1. convert array of string to array of objects
// 2. each todo should have two properties (text, and completed property -true/false)
// 3. Create function to remove a todo by text value
// 4. case insensitive string match to remove item (deleteTodo(todos, 'buy food') 

const todos = [
    {text: 'Order cat food',
    complete: true
 },
 { text: 'Clean kitchen',
    complete: false
},
 { text: 'Buy food',
complete: true
},
 { text: 'Do work',
complete: true
},
 {text: 'Exercise',
complete: false}
];


console.log(todos.length);
console.log(todos);


const deleteTodo = function(todos, todoText){
    const index = todos.findIndex(function (todo, index) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    
    todos.splice(index, 1);
    return todos;
}


const todo = deleteTodo(todos, 'Exercise');
console.log(todo);
