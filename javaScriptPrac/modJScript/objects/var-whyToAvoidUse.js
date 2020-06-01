// var firstName = 'John';
// firstName = 'Mike';
//
// // firstName has been re-assigned.
// console.log(firstName);
//
//
// // firstName variable has been re-declared.....
// var firstName = 'Jen';
// console.log(firstName);
//
//
//
//
// Block scope - with var
if(10 === 10) {
    var firstName = 'Jen'
    console.log(firstName);

}
console.log(firstName + ' <--- using VAR firstName is accessible outside of block scope');


console.log('====================');



var firstName = 'Jack';
console.log(firstName);

const setName = function () {
    let firstName = 'Jen';
    console.log(firstName + ' using LET fistName is only accessible inside function scope');
};

setName();
console.log(firstName);


console.log('====================');
console.log('====================');


console.log(' ==== variables declared by VAR are hoisted to top of code ====');
// call on variable before it is declared with VAR -
console.log(age);  // undefined returned but NO ERROR GENERATED
var age;


console.log(' ==== variables declared by LET are NOT hoisted to top of code  and will cause error.====');

// // call on varialbe before it is declared with LET -
// console.log(age2);
// let age2; // will not run
