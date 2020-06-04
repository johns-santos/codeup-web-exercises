const notes = ['Banana', 'Orange', 'Apple'];

console.log('==== Print Items based on index location ====');
// Create a variable and set to ZERO to match index start point
for (let count0 = 0; count0 < notes.length; count0++) {
    // now use new variable to print out items based on index location
    console.log(notes[count0]);
}


console.log('==== count items ====');
// loop through items in array and stop loop when count hits specific value
for (let count = 0; count <= 2; count++) {
    // printed count value will start at index + 1
    itemsCount = count + 1;
    console.log(`${itemsCount}: ${notes[count]}`);
}
;


console.log('==== reverse order ====');
// count down or reverse order
for (let count1 = 2; count1 >= 0; count1--) {
    itemsCount1 = count1 + 1;
    console.log(`${itemsCount1}: ${notes[count1]}`);
}


// CHALLENGE AREA
console.log(' === CHALLENGE === ');
const todoList = ['take bath', 'complete homework', 'prepare dinner', 'meditate', 'go to sleep'];
// console.log each item with number value
for (let item = 0; item < todoList.length; item++) {
    const itemNum = item + 1;
    const todo = todoList[item];
    console.log(`${itemNum}: ${todo}`);
}


// locate item's index  with string match
console.log('===locate item in array / string match===');
console.log(notes.indexOf('Apple'));



// locate item using objects
console.log('=====================');
console.log('===Array Objects===');
const notes2 = [ {},
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

console.log(notes2.length);
console.log(notes2);
console.log(notes2.indexOf({})); // This will show as -1 because the item is empty


// locate index of object
const index = notes2.findIndex(function (item, index) {
    console.log(notes2);
    //return index of object based on string match
    return item.title === 'Habbits to work on';
});

console.log("====== return index of object based on string match =======");
console.log(index);

