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


const findNote = function(notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function (notes, query) {
    return notes.filter(function (note, index){
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())  
        return isTitleMatch || isBodyMatch
    })
}
console.log(findNotes(notes, 'sleep'));



// ================= Challenge =================    
const todos = [{
    text: 'Order cat food',
    completed: true
 },{ text: 'Clean kitchen',
    completed: false
},{ text: 'Buy food',
completed: true
},{ text: 'Do work',
completed: true
},{text: 'Exercise',
completed: false}
];
console.log(todos);


// Challenge - Create function that takes in "todos" array and filters all todos that 
// have not been completed.
const getThingsToDo = function (todos) {
    return todos.filter(function (todo, index){
        // if(todo.completed != true)
        // return todo;
        return !todo.completed
    })
}

console.log(getThingsToDo(todos));