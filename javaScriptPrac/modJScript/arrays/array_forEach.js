const todo = ['Walk the dog', 'Do  math homework', 'Wash the dishes', 'Bath the cat', 'Go for jog']

todo.forEach(function(){
    console.log('testing 123');
});

console.log(todo.length);
console.log(todo);


todo.forEach(function (item){
    console.log(item)
});


todo.forEach(function(item, index){
    console.log(item, index);
});


// Challenge
console.log(" ==== Challenge =====");
console.log(todo);
// remove 3rd item from array
todo.splice(2,1);
// add item to end of array
todo.push('Buy dog food');
// remove first item from array
todo.shift();

// console log how many todo you have
// create a numbered list of items in array
console.log(`You have ${todo.length} todo's.`);
todo.forEach(function(todo, index){
    let todoNum = index + 1;
    console.log(`${todoNum}. ${todo}`)
});
