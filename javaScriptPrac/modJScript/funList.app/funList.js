const todos = [
  {
    text: 'Order dog food',
    completed: false
  },
  {
    text: 'Order cat food',
    completed: true
  },
  {
    text: 'walk the cat',
    completed: false
  },
  {
    text: 'bath the dog',
    completed: false
  },
  {
    text: 'do home work',
    completed: false
  }
]

const todoFilters = {
  searchTodo: ''
}

const renderTodos = function(todos, todoFilters) {
  const filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(todoFilters.searchTodo.toLowerCase())
    
})

document.querySelector('#todoList').innerHTML = '';


  filteredTodos.forEach(function (todo) {
    const todoEl = document.createElement('p')
    todoEl.textContent = todo.text
    document.querySelector('#todoList').appendChild(todoEl)
  })
}

renderTodos(todos, todoFilters)
//===========================


// Filter FunList and determine how many are incomplete
const todoListFilter = todos.filter(function (todo) {
  return !todo.completed
})

// ********* creat element to add filter count to
const summary = document.createElement('h3')
// ********* create content to include in element
summary.textContent = `You have ${todoListFilter.length} todo`
// *********  render element content in body
document.querySelector('#list-summary').appendChild(summary)

// Add a p for each item in funList above (use text value)
todos.forEach(function (todo) {
  const p = document.createElement('p')
  p.textContent = todo.text
  document.querySelector('#todoList').appendChild(p)
})



// Add Todo button
document.querySelector('#add-todo-btn').addEventListener('click', function (e) {
  console.log('add todo btn has been pressed')
})

// Todo SEARCH input
document.querySelector('#todo-filter').addEventListener('input', function (e) {
  todoFilters.searchTodo = e.target.value
  renderTodos(todos, todoFilters)
})

// // Add Todo input 
// document.querySelector('#todo-input').addEventListener('input', function(e) {
//   console.log(e.target.value)
// })














// ====================================
// ============ NOTES =================
// ====================================
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
]


//======== Render Notes and Render after filter ========
//=====================================================
const filters = {
  searchText: ''
}

const renderNotes = function(notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    
})

document.querySelector('#note-section').innerHTML = '';


  filteredNotes.forEach(function (note) {
    const noteEl = document.createElement('p')
    noteEl.textContent = note.title
    document.querySelector('#note-section').appendChild(noteEl)
  })
}

renderNotes(notes, filters)
//===========================

// Filter Notes list
//======================================
document.querySelector('#filter-notes').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})


// Remove all 'Notes' button
//======================================
document.querySelector('#remove-all').addEventListener('click', function () {
  document.querySelectorAll('#note-section p').forEach(function (note) {
    note.remove()
  })
})



