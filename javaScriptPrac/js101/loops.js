


//Wile loops

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


