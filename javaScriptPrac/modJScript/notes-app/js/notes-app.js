


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

const p = document.querySelector('p');
// console.log(p);

// REMOVE method
//=================================
p.remove(); // removes the first "p" tag



// Query all elements by class
//=================================
const test = document.querySelectorAll('.test')

// use forEach to loop through all selected elements and update
test.forEach(function(test) {
    // console.log(test.textContent);
    test.textContent = '**********'

})

// =============================
// Add a element to DOM - 3 step process
// =============================
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from JavaScript'
document.querySelector('body').appendChild(newParagraph)






