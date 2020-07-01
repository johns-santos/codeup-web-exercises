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


// Todo Search input
document.querySelector('#search-text')
.addEventListener('input', function(e){
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
})


// CHALLENGE
//1. Create a form with a single input for todo text
//2. Setup an submit handler and cancel the default action
//3. Add a new item to the todos array with that text data (completed value false)
//4. Rerender the application
//5. Clear the input field value
document.querySelector('#new-todo').addEventListener('submit', function (e){
    e.preventDefault()
     todos.push({
         text: e.target.elements.text.value,
         completed: false
     })
     renderTodos(todos, filters)
     e.target.elements.text.value = ""
  
})








