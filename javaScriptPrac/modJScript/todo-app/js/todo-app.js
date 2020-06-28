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


const filters = {
    searchText: ""
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo){
        // case insensitive search
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

const incompleteTodos =  filteredTodos.filter(function (todo){
    return !todo.completed
})

// clear div when search input is entered
document.querySelector('#todos').innerHTML = "";


const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector("#todos").appendChild(summary)


// create a forEach loop that creates a p element for each todo
filteredTodos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('#todos').appendChild(p)
})

}

renderTodos(todos, filters)


// Add event for button - once button is press write message to console
document.querySelector('#addTodo-button').addEventListener('click', function (e){
    e.console = console.log('New todo has been added')
})

document.querySelector('#add-todo').addEventListener('input', function(e){
    console.log(e.target.value);
})

document.querySelector('#search-text')
.addEventListener('input', function(e){
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
})
