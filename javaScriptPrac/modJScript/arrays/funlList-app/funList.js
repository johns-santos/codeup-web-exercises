const todos = [{
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
}]


// // find all p elements
// const paragraphs = document.querySelectorAll('p')

// // log number of p elements
// console.log(paragraphs.length);

// // remove all p elements that match string
// paragraphs.forEach(function (paragraph) {
//     if(paragraph.textContent.includes ('dog')){
//         paragraph.remove();
//     }
// });

// // Add a new element
// const newParagraph = document.createElement('p');

// // Add something to newParagraph
// newParagraph.textContent = 'This is a new element';
// // Specify where newParagraph content should be rendered
// document.querySelector('#funListDiv').appendChild(newParagraph);


// Filter FunList and determine how many are incomplete
const todoListFilter = todos.filter(function (todo){
    return !todo.completed
});

// ********* creat element to add filter count to
const summary = document.createElement('h3');
// ********* create content to include in element
summary.textContent = `You have ${todoListFilter.length} todo`
// *********  render element content in body
document.querySelector('body').appendChild(summary);


// Add a p for each item in funList above (use text value)
todos.forEach(function (todo){
    const p = document.createElement('p');
    p.textContent = todo.text;
    document.querySelector('#todoList').appendChild(p)
});

