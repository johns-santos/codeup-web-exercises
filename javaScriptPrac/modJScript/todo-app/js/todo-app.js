// DOM Manipulation

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


// const h = document.querySelector('h1');
// console.log(h);


// // ========================================
// // Select all p elements and remove them from 
// // the list if they contain the word "the"
// // =========================================
// const paragraph = document.querySelectorAll('p');

// paragraph.forEach(function(paragraph){
//     if(paragraph.textContent.includes('the')) {
//         paragraph.remove()
//     }
// })



// CHALLENGE
// 1. You have 2 todos left (p element)
// 2. Add a p for each todo above (use text value)

// create a const that returns sum of incomplete todos
const incompleteTodos =  todos.filter(function (todo){
    return !todo.completed
})

// create a 'h2' element that is appended to body (You have ${incompleteTodos.length} todos left`)
const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)


// create a forEach loop that creates a p element for each todo
todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})


// Add event for button - once button is press write message to console
document.querySelector('#addTodo-button').addEventListener('click', function (e){
    e.console = console.log('New todo has been added')
})

document.querySelector('#removeTodo-button').addEventListener('click', function(){
    console.log('todo has been deleted');
})

document.querySelector('#add-todo').addEventListener('input', function(e){
    console.log(e.target.value);
})
