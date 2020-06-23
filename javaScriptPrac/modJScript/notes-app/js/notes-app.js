


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


/* ==========
DOM - Document Object Model
============ */

// const p = document.querySelector('p');
// // console.log(p);

// // REMOVE method
// //=================================
// p.remove(); // removes the first "p" tag



// // Query all elements by class
// //=================================
// const test = document.querySelectorAll('.test')

// // use forEach to loop through all selected elements and update
// test.forEach(function(test) {
//     // console.log(test.textContent);
//     test.textContent = '**********'

// })

// =============================
// Add a element to DOM - 3 step process
// =============================
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from JavaScript'
// document.querySelector('body').appendChild(newParagraph)


// // Create a event listner for 'create notes' button
// document.querySelector('button').addEventListener('click', function(e) {
//     // Update button content once event is triggered
//     e.target.textContent = 'The button was clicked'
    
// })


// Add event for button - once button is press write message to console
document.querySelector('#addNote-button').addEventListener('click', function (e){
    e.console = console.log('New note has been added')

})

document.querySelector('#removeNote-button').addEventListener('click', function(){
    console.log('A note has been deleted');
    // remove all note(s) by class
    document.querySelectorAll('.note').forEach(function(note){
        note.remove() 
    })
})

// ======== COMPLEX SELECTORS - MULTIPLE (tag+class+id) ============
// - p#order (p element with ID of order)
// - button.inventory (button element with class of inventory)
// - h#title.application (h element with ID of title and class of application)
// ================================================================