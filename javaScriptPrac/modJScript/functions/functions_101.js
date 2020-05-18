// functions - input, code, and output

let greetUser = function (name) {
    return "Hello " + name + " !";
};
console.log(greetUser("John"));


// =================================
let square = function (num) {
    return num * 2;
};
console.log(square(2));

// =================================
let square2 = function (num) {
    let result = num * num;
    return result;
};

console.log(square2(10));

let value = square2(20);
console.log(value);


// ======= Challenge =============
// convert Fahreheit to celsius
let convertToFahrenheit = function (x) {
    let celsius = (x - 32) * 5 / 9;
    return celsius;
};

let output = " celsius";
let tempOne = convertToFahrenheit(32) + output;
let tempTwo = convertToFahrenheit(68) + output;
console.log(tempOne);
console.log(tempTwo);


// =================================
let name = 'Jen';
console.log(name);

let name2;
name2 = 'john';
console.log(name2);

let num = '';
num = 2;
console.log(num);

num = 'bella';
console.log(num);


//===============
let name3;
name3 = 'moni123';

if (name === undefined) {
    console.log("please enter a name")
} else {
    console.log(name3);
}


// UNDEFINED FOR FUNCTION ARGUMENTS
// undefined as function return default value
let test1 = function (num) {
    console.log(num)
};
test1();

let result = test1();
console.log(result);

// how to clear a variable
let age = 27;
console.log(age);

// UNDEFINED............
age = undefined;
console.log(age);

// NULL................
age = null;
console.log(age);



// Multiple arguments
let add = function (a, b,c,d){
    return ((a + b) *  (c * d));
};

let result1 = add(10, 1, 5,12);
console.log(result1);


// DEFAULT arguments
let getScoreText = function (name = 'Anonymous', score = 0){
    console.log("Name: " + name);
    console.log("Score: " + score);
};
getScoreText();
getScoreText("john", 4);




let scoreText = getScoreText("Alfred", 5);
console.log(scoreText);

let getScoreText2 = function (name = 'Anonymous', score = 0){
    return 'Name: ' + name + ' - Score: ' + score;
};
let scoreText2 = getScoreText2(undefined, 99);
console.log(scoreText2);



// ======== Challenge ========
// tip calculator  bill 100 tip 20%;
let billTotal =  function(total1, tipPercent2 = .2){
    result = ( total1 * tipPercent2);
    console.log("Total = " + (result + total1));
};
billTotal(200.00);
billTotal(40, .25);