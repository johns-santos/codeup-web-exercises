// SCOPES

// - Global scope(convertToFahrenheit, tempOne, tempTwo)
// -- Local scope (fahrenheit, celsius)

let convertToFahrenheit = function (x) {
    let celsius1 = (x - 32) * 5 / 9;
    return celsius1;
};

let output = " celsius";
let tempOne = convertToFahrenheit(32) + output;
let tempTwo = convertToFahrenheit(68) + output;

console.log(tempOne);
console.log(tempTwo);


// - Global scope(convertToFahrenheit2, tempOne2, tempTwo2)
// -- Local scope (fahrenheit, celsius)
// --- Local scope (isFreezing)
let convertToFahrenheit2 = function (x) {
    let celsius = (x - 32) * 5 / 9;

    if (celsius <= 0) {
        isFreezing = true;
        return 'It is too cold to go outside';
    }
        //OPTION 1 ============================
        // if (celsius >= 1) {
        //     isFreezing = false;
        //     return 'It is safe to go outside';

        // /OPTION 2 ============================
        // else isFreezing = false;

    // OPTION 3 ============================
    else return 'It is safe to go outside'

};

let tempOne2 = convertToFahrenheit2(32);
let tempTwo2 = convertToFahrenheit2(68);


console.log(tempOne2);
console.log(tempTwo2);




//==========================================================
// TEMPLATE STRING -- USE BACK TICKS `` and '${variable}`
//==========================================================
// combination of dynamic and static output
console.log('john'); // -- standard string
console.log('john' + ' santos'); // -- standard straing

let name = 'Jen';
console.log(`Hey, my name is ${name}`); // -- use BACK TICK ``

let name1 = 'Vikram';
let age1 = '18';
console.log(`My name is ${name1} and I am ${age1} years old.`);
let language = 'javascript';
console.log(`My name is ${name1} and I am ${age1} years old. My favorite language is ${language}!!!!`);



// ======== Challenge ========
// tip calculator  bill 100 tip 20% using TEMPLATE strings
let billTotal =  function(total, tipPercent = .2){
    result = total * tipPercent;
    bill = result + total;
    console.log(`The total for meal = $${total}. The tip percentage = ${tipPercent}%. The total bill = $${bill}`);
};
billTotal(200);
billTotal(40, .25);
billTotal(100, .3);
