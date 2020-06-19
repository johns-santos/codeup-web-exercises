const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// EXPECTED OUTPUT: [ 'Dec', 'Feb', 'Jan', 'March' ]

const array1 = [30, 1, 55, 98, 0]
array1.sort();
console.log(array1);
// EXPECTED OUTPUT: [ 0, 1, 30, 55, 98 ]




const notes = [
    {
        title: 'my next trip',
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


const sortNotes = function(notes) {
    notes.sort(function(a, b) {
     if(a.title.toLowerCase() < b.title.toLowerCase()) {
         return -1
     } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
         return 1
     } else {
         return 0
     }
    })
}

sortNotes(notes);
console.log(notes);

const todos = [{
    text: 'Order cat food',
    completed: true
 },{ text: 'Clean kitchen',
    completed: false
},{ text: 'Buy food',
completed: true
},{ text: 'Do work',
completed: false
},{text: 'Exercise',
completed: false}
];

// CHALLENGE -  Sort todo array - If not completed, then list first
const sortTodos = function(todos) {
    todos.sort(function(a, b) {
        // if(a.completed != 1 && b.completed == 1) {
            if(!a.completed && b.completed){
            return -1
        // } else if (a.complete == 1 && b.completed != 1){
            } else if (!b.completed && a.completed){
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos);
console.log(todos);
