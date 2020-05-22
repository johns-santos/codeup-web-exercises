// Create a object using property values (models)
let myBook = {
    title:   '1984',
    author:  'George Orwell',
    pageCount: 238
};


// Read property values
console.log(myBook);
console.log(myBook.title); // dot notation - used to grab property
console.log(`${myBook.title} by ${myBook.author}`); // template string using ``

// change property values
myBook.title = 'Animal Farm';
console.log(`${myBook.title} by ${myBook.author}`); // template string using ``



// Challenge area
// model a person (name, age, location)
// Bella is 22 and lives in San Antonio.
// Increase age by 1 and print message again.

let person = {
    name: 'Bella',
    age: 22,
    location: 'San Antonio, Tx'
};
console.log(`${person.name} is ${person.age} and lives in ${person.location}`);

person.age = 23;
console.log(`${person.name} is ${person.age} and lives in ${person.location}`);

