

var colors = ["red", "yellow", "black"];
console.log(colors);

// Add item to end of array
colors.push("pink");
console.log(colors);

// Remove item from end of array
colors.pop();
console.log(colors);

// Add item from beginning of array
colors.unshift("orange");
console.log(colors);

// Remove item from end of array
colors.shift();
console.log(colors);


var nums = [34, 54, 22];
console.log(nums);
nums.unshift("HELLO");
console.log(nums);

// locate index of item
console.log("Index of 22 is " + nums.indexOf(22));
console.log("What item is in index of 3 - " + nums[3]);

// Determine if a item is in array
// -1 is expected if items is not in array
console.log(nums.indexOf("John"));

// SLICE - returns items in array between specified index
var nums = [1,2,3, "a", "b", 5,6,7];
console.log(nums.slice(3,5));


//Determine length of array
var numbers = [22, 67, 33, 96, 88];
console.log(numbers.length);
//Using length -1 to return last index
console.log(numbers[numbers.length - 1 ]);

// 2-D array - NESTED array
var friendsGroup = [
    ["Monica", "Donica"],
    ["Pat", "Yvette"],
    ["bella", "alfred"]
];
// Return first item in last nested array
console.log(friendsGroup[2][0]);

console.log("==============");
console.log("==============");
console.log("=== REVERSE ARRAY FOREACH =====");
// print reverse
var arr = [0,1,2,3,4,5,6,7,8,9,10];
arr.slice().reverse().forEach(function (item) {
    console.log(item);
});

console.log("==============");
console.log("==============");
console.log("== REVERSE ARRAY WITH FOR LOOP ====");
var arr2 = ['a','b','c','d','e','f','g','h'];
function printReverse(arr) {
    for (var i = arr.length - 2; i >= 0; i--) {
        console.log(arr2[i]);
    }
}
printReverse(arr2);


var names =  ['hanna', 'mary', 'darlene', 'donica', 'monica'];
function printReverse1(arr) {
    for (var x = names.length - 2; x >= 0; x--) {
        console.log(names[x]);
    }
}
printReverse1(names);





console.log("==============");
console.log("=====test====");


let arr1 = [1, 1, 1, 3];
let arr4 = [2,2,2,'b',2];
let arr3 = [3,3,3,3,3,3,3,];

function isUniform(arr) {
    var x = arr[0];
    for (var i = 0; i < arr.length ; i++) {
        if (arr[i] !== x) {
            return false;
        }
    }
    return true;
}
console.log(isUniform(arr1));
console.log(isUniform(arr4));
console.log(isUniform(arr3));



//
//
console.log("=== fruitInBowl === ");

let fruitBowl = ['orange', 'apple', 'pear', 'grapefruit', 'banana'];
let fruit = 'banana';

function isInBowl(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === fruit) {
            return true;
        }
    }
    return false;
}
console.log(isInBowl(fruitBowl));






// =========================================
// =========================================
console.log('========= sumOfArray =========');

let numArray = [5,5,5,5];
let sum = numArray.reduce(function(a, b) {
       return a + b;
   }, 0);
   console.log(sum);


function sumOfArray(arr) {
    let total = 0;
    arr.forEach(function (element) {
        total += element;
    });
    return total;
}

console.log(sumOfArray(numArray));



// =========================================
// =========================================
console.log('========= MaxOfArray =========');

let arrayOfNums = [10, 15,8, 3, 50, 77,4, 100, 2, 5];
function max(arr) {
    var max = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(max(arrayOfNums));