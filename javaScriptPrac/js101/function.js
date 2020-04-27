// Running file with node.js
// Example: node <file.name>
// node function.js


console.log("==singSong===");

function singSong() {
    console.log("tet");
    console.log("tat");
    console.log("tet");
    console.log("tat");
}

singSong();


console.log("==sayHello==");

function sayHello(name) {
    console.log("Hello " + name)
}

sayHello("john");

console.log("==area==");

function area(l, w) {
    console.log("The area = " + l * w)
}

area(2, 10);


console.log("==greet==");

function greet(person1, person2, person3) {
    console.log("Hello " + person1);
    console.log("Hello " + person2);
    console.log("Hello " + person3);
}

greet("john", "bella", "Irene");


console.log("======");
console.log("======");
console.log("======");
console.log("===Using RETURN===");

function square(x) {
    return x * x;
}

var result = square(3);
console.log(result / 2);


console.log("===capitalize===");

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris";
var capital = capitalize(city);
console.log(capital);


console.log("===Use RETURN to stop function===");

function cap(str1) {
    if (typeof str1 === "number") {
        return "ERROR - That is not a string"
    }
    return str1.charAt(0).toUpperCase() + str1.slice(1);
}

var name = "john";
var capital1 = cap(name);
console.log(capital1);

var num = 1;
var capital1 = cap(num);
console.log(capital1);

console.log("=== Is Even ===");

function isEven(num) {
    if (num % 2 === 0) {
        console.log("true");
    } else (console.log("false"));
}

console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));


console.log("=== Is Even REFACTORED===");

function isEven2(num) {
    return num % 2 === 0;
}

console.log(isEven2(4));
console.log(isEven2(10));
console.log(isEven2(15));


console.log("=== Is Factorial ===");


function factorial(num) {
    // define result
    var result = 1;
    // calculate factorial and store value in result
    for (var i = 1; i <= num; i++) {
        result = result * i;
    }
    // return result
    return result;
}

console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(10));


console.log("=== Is kebabToSnake ===");

function kebabToSnake(str) {
    //replace all dasshes with underscore
    var newStr = str.replace(/-/g, "_");
    // return str
    return newStr
}

console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-awesome"));


console.log("====== Set Interval ======");

function sing2() {
    console.log("Twinkle, Twinkle, Little Star")
    console.log("How I wonder what you are")
}

/*
setInterval(sing2, 3000);
*/

// RANDOM PASSWORD GENERATOR ==========================================================
//Generates random strings in three passes and concatenates results to form 1 secure password
function generateP() {
    var pass = '';
    var pass1 = '';
    var pass2 = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var str1 = '012345abcdefghijklmnopqrstuvwxyz';
    var str2 = '@!#$%&*6789@!#$%';

    for (i = 1; i <= 2; i++) {
        var char = Math.floor(Math.random()
            * str.length + 1);
        pass += str.charAt(char);
    }
    for (i = 1; i <= 5; i++) {
        var char1 = Math.floor(Math.random()
            * str1.length + 1);
        pass1 += str1.charAt(char1);
    }
    for (i = 1; i <= 2; i++) {
        var char2 = Math.floor(Math.random()
            * str2.length + 1);
        pass2 += str2.charAt(char2);
    }
    return pass + pass2 + pass1;
}
console.log(generateP());
// RANDOM PASSWORD GENERATOR ==========================================================










function returnEvens() {
    for (i = 0; i < 100; i++) {
        if (i % 5 === 0) {
            console.log(i);
        }

    }
}
console.log(returnEvens());



