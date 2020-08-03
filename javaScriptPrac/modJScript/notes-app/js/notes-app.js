
let notes = []

const filters = {
    searchText: ''
}

// Check for existing saved data
const notesJSON = localStorage.getItem('notes')

if (notesJSON !== null) {
    notes = JSON.parse(notesJSON)
}

// =========================================
// //CRUD - Create, Read, Update, Delete, 
// =========================================
// // CREATE
// localStorage.setItem('location', 'San Antonio')
// //READ
// localStorage.getItem('location')
// // Console READ
// console.log(localStorage.getItem('location'))
// //DELETE
// localStorage.removeItem('location');
// localStorage.clear();

// const user = {
//     name: 'John',
//     age: 43
// }
// //Convert object into STRING
// // JSON parse is used before writing data
// ======================================
// const userJSON = JSON.stringify(user)
// console.log(userJSON);
// localStorage.setItem('user', userJSON);


// JSON is only a string. JSON parse is used after reading data.
// ======================================
// const userJSON = localStorage.getItem('user');
// const user = JSON.parse(userJSON);
// console.log(`${user.name} is ${user.age}`)



// =======================================
// Upon page refresh render all NOTES
// also renders only filtered NOTES
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    // clear #note element 
    document.querySelector('#notes').innerHTML = ''

    //Only render notes that match string match
    filteredNotes.forEach(function (note){
        const noteEl = document.createElement('p')

if(note.title.length > 0) {
    noteEl.textContent = note.title
} else {
    noteEl.textContent = 'Unnamed note'
}

        // noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}
    
renderNotes(notes, filters)
// =======================================

document.querySelector('#create-note').addEventListener('click', function(e){
    notes.push({
        title: '',
        body: ''
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes, filters)
})

// Search notes - using input allows to track every character change
document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})


document.querySelector('#filter-by').addEventListener('change', function (e){
    console.log(e.target.value)
})
