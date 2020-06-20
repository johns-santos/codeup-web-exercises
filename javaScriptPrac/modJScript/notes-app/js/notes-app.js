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



