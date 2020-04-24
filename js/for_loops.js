"use strict";
var showMultiplicationTable = function (num) {
    for (var i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + num * i);
    }
};

//
showMultiplicationTable(3);
showMultiplicationTable(7);

//
var randomNum;
for (var i = 0; i < 10; i++) {
    randomNum = Math.floor(Math.random() * 200) + 20;
    //randomNum % 2 === 0 ? console.log(randomNum + " is even") : console.log(randomNum + " is odd");
    if (randomNum % 2 === 0) {
        console.log(randomNum + " is even");
    } else console.log(randomNum + " is odd");
}


for (var x = 1; x <= 9; x++) {
    var logString = "";
    for (var l = 1; l <= x; l++) {
        logString += x;
    }
    console.log(logString);
}

// for (var i = 100; i >= 5; i--) {
//     console.log(i);
// }

for (var i = 100; i >= 5; i -= 5) {
    console.log(i);
}
