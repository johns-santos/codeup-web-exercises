

const h = document.querySelector('h1');
console.log(h);


// ========================================
// Select all p elements and remove them from 
// the list if they contain the word "the"
// =========================================
const paragraph = document.querySelectorAll('p');

paragraph.forEach(function(paragraph){
    if(paragraph.textContent.includes('the')) {
        paragraph.remove()
    }
})


