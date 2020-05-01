


//======= WHILE loops
var x = 0;
while(x <= 10){
    console.log(x);
    x++;
}

console.log("=============");

// loop and do something else
var str = "Good Day";
var count = 0; //Count will equal characters index in str
while(count < str.length){
    console.log(str[count]);
    count++;
}

console.log("=============");
// print 1,3, 5,7,9
var num = 1;

while(num <= 10) {
    console.log(num);
    num += 2;
}

console.log("=============");
// Add a conditional to loop to print modulo of 4
var number1 = 1;

while(number1 <= 20 ){
    if(number1 % 4 === 0) {
        console.log(number1);
    }
    number1++;
}


console.log("=============");
var between1 = -10;

while(between1 <= 19) {
    console.log(between1);
    between1++;
}


console.log("=============");
var between2 = 10;

while(between2 <= 40) {
    if (between2 % 2 === 0) {
        console.log(between2);
    }
    between2++;
}


console.log("=============");
var between3 = 300;

while(between3 <= 333) {
    if (between3 % 2 !== 0) {
        console.log(between3);
    }
    between3++;
}

console.log("=============");
var between4 = 5;

while(between4 <= 50) {
    if ((between4 % 5 === 0) &&  (between4 % 3 === 0)) {
        console.log(between4);
    }
    between4++;
}



// ================= FOR Loops ====
console.log("===== FOR Loops ========");

var string = "hello";

for(var i = 0; i < str.length; i++){
    console.log(string[i])
}


console.log("============");
for(var i = 0 ; i < 16; i+=8){
    console.log(i)
}


console.log("============");


for(var i = -10; i <= 19; i++){
    console.log(i)
}


console.log("============");

for (var i = 10; i <= 40; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

console.log("============");
for(var i = 300; i <= 333; i++){
    if(i % 2 !== 0){
        console.log(i)
    }
}

console.log("============");
for(var i = 1; i <= 50 ; i++){
    if((i % 3 === 0) && (i % 5 === 0)){
        console.log(i)
    }
}

console.log("============");
for (var i = 1; i <= 100; i++) {
    if (i % 15 === 0){
        console.log("fizzbuzz")
    }else if (i % 3 === 0){
        console.log("fizz")
    }else if (i % 5 === 0){
        console.log("buzz");
    } else {
        console.log(i)
    }
}




// ==================================
// ==================================
// ==================================
console.log('=======findMultipliers=========');

let l = 3;
let m = 5;
function findMultipliers(x,y,z) {
    for (var i = 1; i <= 100; i++){
        if ((i % l  === 0)&&(i % m  === 0)){
            console.log(i + ": fizzbuzz")
        } else if (i % l === 0) {
            console.log(i + ": fizz")
        } else if (i % m === 0) {
            console.log(i + ": buzz");
        } else {
            console.log(i)
        }
    }
}
findMultipliers();




// ==================================
// ==================================
// ==================================
console.log('======= multiplesOf =========');


var q = '';
var s = '';

function multiplesOf(q, s) {
    for (var i = 1; i <= 100; i++) {

        var output = '';

        if (i % q === 0) {
            output += 'Fizz'
        }
        if (i % s === 0) {
            output += 'Buzz'
        }
        // if (output === '') {
        //     output = i;
        // }
        console.log(output);
    }
}

multiplesOf(3, 7);
// ==================================
// ==================================
// ==================================





console.log('==================');
console.log('==================');
console.log('==================');



var array1 = ['hanna', 'darlene', 'donica', 'monica'];
// console.log(array1[3]); // 'donica' - index
// console.log(array1.length);
// console.log(array1);
var greeting = "Hello, ";

for(var i = 0; i <= array1.length -1; i++){
    console.log(greeting + array1[i]);
}

console.log('==================');
console.log('==================');
console.log('==================');

for(var i = array1.length -1; i >= 0; i--){
    console.log(greeting + array1[i]);
}













multiplesOf(12,24);








