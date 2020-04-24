var pets = [];
pets[0] = "Toby";
pets[1] = "Princess";
pets[2] = "Samson";
pets[3] = "Jill";
pets[4] = "Bubbles";
pets[5] = "Malu";
pets[6] = "Lily";

console.log("There are " + pets.length + " pets in the pets array:");
for (var i = 0; i < pets.length; i++) {
    console.log("pets[" + i + "]: " + pets[i]);
}

//pets.forEach function method of iterating over an array.
pets.forEach(function (pet, i) {
    console.log("The pet at pets[" + i + "]: " + pet);
});

// var numbers = [42, 53, 66, 783, 241];


// Add a variable to an existing array
var fruit = ["apple", "orange", "banana"]
// fruit(fruit.length] = "pear"
fruit.push("pear");
console.log(fruit);

fruit.push('pineapple', 'grapes', 'mango');
console.log(fruit);

// Add variables to the beginning of an array
// UNSHIFT - will add before index 0
fruit.unshift('strawberry');
console.log(fruit);

// SHIFT - replaces index 0 (removes existing index and replace it)
fruit.shift('lemon');
console.log(fruit);

// console.log(fruit.shift());  // this will remove item from index 0 and shift all other items to left (1 is now 0)

// POP - remove item from last index
console.log(fruit.pop());


// Locate index of item in array
console.log(fruit.indexOf('pineapple'));
console.log(fruit[fruit.indexOf('pineapple')]);


fruit.push("apple");
console.log(fruit.lastIndexOf('apple'));


//===========JOIN===============
// remove array and return list of strings
var nums = [1, 2, 3, 4, 5];
nums.join();


//==== split ======================
// Split will break up varialbe into list of items in array by the specified deliminator. In this case (.)
var paragraph = 'JavaScript arrays have a variety of methods that allow for manipulation of the array. In this lesson, we will cover some of the most commonly used methods.'
paragraph.split('.');


// Capitalize first letter of each word
var sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence);
var words = sentence.split(" ");
for (var i = 0; i < words.length; i++) {
    // capitalize first letter
    var word = words[i];
    var letters = word.split("");
    var capitalFirstLetter = letters[0].toUpperCase();
    var capitalizedWord = "";
    capitalizedWord += capitalFirstLetter;
    for (var j = 1; j < letters.length; j++) {
        capitalizedWord += letters[j];
    }
    words[i] = capitalizedWord;
}
sentence = words.join(" ");
console.log(sentence);


// Another method of same task
function capFirstLetter(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);

    }
    // Directly return the joined string
    return splitStr.join(' ');
}

console.log(capFirstLetter('The quick brown fox jumps over the lazy dog'));


// ============================================
// ============================================
var fruit = ['apple', 'orange', 'banana'];
fruit.push['pear', 'pineapple', 'grape', 'apple', 'mango'];

fruit.unshift('strawberry');


// ================== SLICE ================================
// return items from index to index
var fruitThru3 = fruit.slice(0, 3);
console.log(fruitThru3);

var fruitThru = fruit.slice(3);
console.log(fruitThru);

// Slice will start at specified first index then end at but WILL NOT include last item in index.
console.log(words.slice(2, 4));
// words = ['THE',   'QUICK','BROWN', 'FOX', 'JUMPS', 'OVER','THE',   'LAZY', 'DOG']
// console.log(words.slice(2, 4));    RETURNS ------- >  [ 'BROWN', 'FOX' ]