"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name) {
    return 'Hello, ' + name;
};
console.log(sayHello('CodeUp'));

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
var helloMessage = sayHello('Steve');
console.log(helloMessage + " : Created by 'helloMessage' function");

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
var myName = 'john';
console.log(sayHello(myName + " :This is using 'myName' variable"));


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);
console.log(random);



// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);
console.log(random);


/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a8888888
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
function isTwo(number) {
    if (number === 2) {
        return true;
    } else {
        return false;
    }
}
console.log(isTwo(3));

console.log(isTwo(random));


/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

var tipPercentage = Number();
var billTotal = Number();
function calculateTip(tipPercentage, billTotal){
    var tip =  (tipPercentage) * (billTotal);
    return tip;
}
console.log(calculateTip(0.20, 200)); // expexted output 40.00

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

function calculateTip2(tipPercentage2, billTotal2) {
    var billTotal2 = Number(prompt('Enter Total Cost of Meal: '));
    var tipPercentage2 = Number(prompt('How much percent woudl you like to tip: '));
    var tip = (tipPercentage2) * (billTotal2);
    alert(tip);
}

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
var originalPrice = Number();
var discountPercent = Number();
function applyDiscount(originalPrice, discountPercent){
    var discount = (originalPrice) * (discountPercent);
    var applyDiscount = originalPrice - discount;
    return applyDiscount;
}

/** =========== SAME AS ABOVE TO INSTRUCT SPECS ========================
 *  =====================================================================
 *  =====================================================================
 *  =====================================================================
 *  =====================================================================
 *  =====================================================================
 *  =====================================================================
 *  ===================================================================== */

console.log('These are build to spec requirements');

/** ============== SAME AS ABOVE TO INSTRUCT SPECS =======================================
 *
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a8888888
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 * // @param num
 * // @returns {boolean}
 */
var isTwo = function(num) {
    return num === 2;
};
console.log(isTwo(1)); // returns false
console.log(isTwo(2)); //return true
console.log(isTwo(3)); //return false

console.log(isTwo(random));

/** ==============SAME AS ABOVE TO INSTRUCT SPECS =======================================
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
var tipPercent = prompt('what percentage do you want to tip?????');
var costForMeal = prompt('What was the total cost of meal?');
var amountToTip  = tipPercent * costForMeal;
alert(amountToTip);



/** ==============SAME AS ABOVE TO INSTRUCT SPECS =======================================
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
var applydiscount2 = function(price2, discountPercent2) {
    var discountAmount2 = price2 * discountPercent2;
    return (price2 - discountPercent2);
};
var originalPrice2 = 100;
var discountPercent2 = .2;
console.log(applydiscount2(100, 0.2));



