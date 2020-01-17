
//==================================================
// TODO:  Exponentiation Operator
console.log("=========Exponentiation Operator=========");
//==================================================

// old way
var oldway_1 = Math.pow(2, 8); // === 256
// new syntax
var es6wAY_1 =  (2 ** 8); // === 256
console.log(es6wAY_1);

// use the "Exponentiation Operator" described in es6wAY_1.
for(var i = 0; i < 8; i++);
console.log(2 ** i)

//==================================================
// TODO:  Diff between var, let, const
console.log("=========var, let, const=========");
//==================================================
// var  = old way to declare variables. Will mask errors
// let = new way to declare variables. Will display errors
// const = same as let, but can not be re-assigned a new value

// without block scope
if (true) {
    var test1 = 'codeup';
}
console.log(test1); // 'codeup'

// with block scope (this will stop code and return as UNDEFINED
// if (true) {
// let test2 = 'codeup';
// }
// console.log(test2); // undefined


// without block scope
for (var x = 0; x < 10; x++) {
    // ...
}
console.log(x); // 10

// with block scope
for (let i = 0; i < 10; i++) {
    // ...
}
console.log(i); // undefined


// TODO:  ES6 For Loop
//==================================================
const fruits = ["apple", "orange", "banana", "pineapple"];
fruits.push("mango");
fruits[0] = "lemon";

console.log("========ES5 For Loop=========")
// Old way to for Loop
for(let i = 0; i < fruits.length; i++){
    console.log(fruits);
}

// ES6 way to for loop
console.log("========ES6 For Loop=========");
for(let fruit of fruits){
    console.log(fruits);
}




let dog = {
    name: "dog",
    breed: "chihuahua"
};
//ES5 way to call key pair variables
console.log("Our " + dog.breed + " is named " + dog.name);
// ES6 way to call key pair variables
console.log("Our " + `${dog.breed}` +  " is named "  + `${dog.name}`);


// ****************************************************************
// TODO: ES 6 Function Parameter Value
// ****************************************************************
// old way
//////////////////////////////////////////////////////////////////
function sayHello1(name) {
    if (typeof name === 'undefined') {
        name = 'World';
    }
    return 'Hello, ' + name + '!';
}

console.log(sayHello1()); // "Hello, World!"
console.log(sayHello1('hello1')); // "Hello, codeup!"

//////////////////////////////////////////////////////////////////
// es6 syntax (including template strings)
console.log("ES 6 Function Parameter Value");
//////////////////////////////////////////////////////////////////

function sayHello2(name1 = 'World') {
    return `Hello, ${name1}!`;
}
console.log(sayHello2()); // "Hello, World!"
console.log(sayHello2('hello2')); // "Hello, codeup!"



//es 6 using arrow function instead of return
const sayHello3 = (name3 = 'codeup') => `Hello, ${name3}!`;
console.log(sayHello3('Europa')); // "Hello, World!"
console.log(sayHello3("codeup")); // "Hello, codeup!"

