/*
PROBLEM SOLVING
==========================
* Understand the problem;
* Explore concrete examples;
* Break it down;
* Solve/simplify
* Look back and refactor;
============================
*/

/*
=====================================================
UNDERSTAND THE PROBLEM - Ask questions
=====================================================
* Can you restate the problem in your own words.
* What are the inputs that go into the problem;
* Can the output be determined from the inputs?
 - In other wprds, do I have enough info to solve.
 * How should I label the important pieces of data
 that are part of the problem.
*/


/*
Write a function which takes in a string and returns
count of each character in the string.*/
charCount("aaaa"); //{a:4}
charCount("hello"); // {h:1, e:1, l:2, o:1}

"my phone number is 282763"
"Hello hi"
charCount("");


/*
=====================================================
BREAK IT DOWN
=====================================================
- Explicitly write out the steps you need to take.
*!/

function charCount(str){
    // do something
    // return an object with keys that are lowercase alphanumeric characters in the string
}

function charCount(str){
    // make object to return at end
    // loop over string, for each character....
    // if the char is a key in object, add one to count
    // if the char is not in the object, add it and set value to 1
    // if character is something else (space, period, etc.) don't do anything
    // return object at end
}

 */



/*
=====================================================
SIMPLIFY / SOLVE
=====================================================
* Find the core difficulty in what your trying to solve.
* Temporarily ignore the difficulty stuff
* Write a simplified solution
* Then incorporate that difficulty back in
*/




function charCount(str){
    // make object to return at end
    var result = {};
    // remove all non-letter characters and make lower case.
    var str1 = str.replace(/[^A-Za-z]+/g, '').toLowerCase();
    // loop over string, for each character....
    for(var i = 0; i < str1.length; i++) {
        var char = str1[i];
        // if the char is a key in object, add one to count
        if (result[char] > 0) {
            result[char]++;
        }
        // if the char is not in the object, add it and set value to 1
        else {
            result[char] = 1;
        }
    }
        // return object at end
        return result;

}
console.log(charCount("ABC 123878 abc !@#$xyz ABC"));




function generatePassword() {
    var length = 7,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#!$&*",
        retValue0 = "";
        retValue1 = "";
        // Guarantee first character of password is a LETTER
    for (var i = 0, m = 53; i < 1; ++i) {
        retValue0 += charset.charAt(Math.floor(Math.random() * m));
    }
    // Generate second part of password from charset
    for (var i = 0, n = charset.length; i < length; ++i) {
        retValue1 += charset.charAt(Math.floor(Math.random() * n));
    }
    // return password
    return  retValue0 +  retValue1;
}
console.log(generatePassword());