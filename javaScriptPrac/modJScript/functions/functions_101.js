// functions - input, code, and output

let greetUser = function (name) {
    return "Hello " + name + " !";
};
console.log(greetUser("John"));


// =================================
let square = function(num){
    return num*2;
};
console.log(square(2));

// =================================
let square2 = function(num){
    let result = num * num;
    return result;
};

console.log(square2(10));

let value = square2(20);
console.log(value);


// ======= Challenge =============
// convert Fahreheit to celsius
function convertToFahrenheit(x){
    let celsius = (x -32) * 5/9;
    return celsius + " celsius";
}
console.log(convertToFahrenheit(32));
console.log(convertToFahrenheit(68));