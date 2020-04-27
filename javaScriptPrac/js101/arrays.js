

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

