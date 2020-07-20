
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
    },
    {
        title: 'Pay off credit cards',
        body: 'My goal is to pay off credit cards by Nov 2020.'
    },
    {
        title: 'Lose 30lbs.',
        body: 'Lose 30lbs by December 2020.'
    }
];

const filters = {
    searchText: ''
}

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
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}
    
renderNotes(notes, filters)
// =======================================


// Search notes - using input allows to track every character change
document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})


document.querySelector('#filter-by').addEventListener('change', function (e){
    console.log(e.target.value)
})
