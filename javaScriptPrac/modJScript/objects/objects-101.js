// OBJECTS & PROPERTIES


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



// ===================== Add a second book
let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount:  723
};



// Create a function that accepts an object (books)
let getSummary =  function(book){
    console.log(`${book.title} by ${book.author}`)
};

getSummary(myBook);
getSummary(otherBook);




// ===== Create a function that accepts an objects and return two strings ==============
console.log('===============');

let getSummary2 =  function(book){
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
};

let bookSummary = getSummary2(myBook);
let otherBookSummary = getSummary2(otherBook);
console.log(bookSummary.pageCountSummary);
console.log(otherBookSummary.pageCountSummary);


// Create a function - takes fahrenheit temp and returns object with all three


