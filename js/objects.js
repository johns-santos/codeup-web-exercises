(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person2 = {};
    person2.firstName = "Rick";
    person2.lastName = "Sanchez";

    console.log(person2.firstName); // "Rick"
    console.log(person2.lastName); // "Sanchez"

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    console.log('=========Method in Object=============');
    console.log('=========Method in Object=============');
    console.log('=========Method in Object=============');


    var person = {};
    person.firstName = "Rick";
    person.lastName = "Sanchez";
    person.sayHello = function () {
        console.log('Hello from ' + this.firstName + ' ' + this.lastName + '!')
    };
    console.log(person.sayHello()) // "Hello from Rick Sanchez!"
    // EXAMPLE : Update firstName of array object and initialize sayHello function
    person.firstName = "John";
    console.log(person.sayHello());



    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];

    console.log('========Shoppers Discount Calculation====================');
    console.log('========Shoppers Discount Calculation====================');
    console.log('========Shoppers Discount Calculation====================');


    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    shoppers.forEach(function (shopper) {
        //     if (shopper.amount > 200)
        //         console.log(shopper.name + ':  Before Discount: $' + shopper.amount + ' After Discount: $' + (shopper.amount - (shopper.amount * .12)));
        //     else
        //         console.log(shopper.name + ':  Before Discount: $' + shopper.amount + '    ' + ' no Discount')
        // });
        var discount = 0;
        if (shopper.amount > 200)
            discount = shopper.amount * .12;
        var total = shopper.amount - discount;
        console.log(shopper.name + "'s bill was $" +  shopper.amount + ". " + "They received a discount of $" + discount + ". And their total was $" + total);
    });



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    console.log('==========Books Array==================');
    console.log('==========Books Array==================');
    console.log('==========Books Array==================');

    var books = [
        {
            title: 'Cather in the Rye',
            author: {
                firstName: "J. D.",
                lastName: "Salinger"
            }
        },
        {
            title: 'The Buffalo Soldier',
            author: {
                firstName: "Chris",
                lastName: "Bohjalian"
            }
        },
        {
            title: 'The Salmon of Doubt',
            author: {
                firstName: "Douglas",
                lastName: "Adams"
            }
        },
    ];


console.log(books[2].title); // "The Salmon of Doubt"
console.log(books[2].author.firstName); // "Douglas"
console.log(books[2].author.lastName); // "Adams"



    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    console.log('==========Loop==================');
    console.log('==========Loop==================');
    console.log('==========Loop==================');


    books.forEach(function (book) {
            console.log('-----');
            console.log('Book #' + (books.indexOf(book) +1));
            console.log('Tile: ' + book.title);
            console.log('Author: ' + book.author.firstName + " " + book.author.lastName);







    });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();
