(function(){
    "use strict";

/**  TODO: Create an array of 4 people's names and store it in a variable calle 'names' */
var names = ['monica', 'doncia', 'darlene', 'joehana']
console.log('============================')

/** TODO: Create a log statement that will log the number of elements in the names array */
console.log(names);
console.log('============================')

/** TODO: Create log statements that will print each of the names individually by accessing each element's index.
 */
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log('=============test===============')

/** TODO: Write some code that uses a for loop to log every item in the names array */

var names2 = ['Monica2', 'Doncia2', 'Darlene2', 'Joehana2']
for (var name = 0; name < names2.length; name++) {
    console.log(names2[name]);
    // console.log('Index ' + name + ': ' + names2[name]);
};


/** TODO: Refactor your above code to use a `forEach` loop */
console.log('===========test=================')
names.forEach(function (name){
    console.log(name)
    /*        if(name == 'monica')
                console.log(name + ' SanMiguel')
            else console.log(name + ' Ramirez')*/
});

console.log('===========test=================')
/** TODO:
 * Create the following three functions, each will accept an array and
 * return an an element from it
 * - first: returns the first item in the array
 * - second: returns the second item in the array
 * - last: returns the last item in the array
 *
 * Example:
 *  > first([1, 2, 3, 4, 5]) // returns 1
 *  > second([1, 2, 3, 4, 5]) // returns 2
 *  > last([1, 2, 3, 4, 5]) // return 5
 */

var num = [1, 2, 3, 4, 5];
function first(num){
    return num[0];
}
console.log(first(num));

function second(num){
    return num[1];
}
console.log(second(num));

function last(num){
    return num[4];
}
console.log(last(num));
