
//FOR LOOP with and ARRAY
var colors = ['red', 'green', 'yellow', 'orange'];

for(i = 0; i < colors.length; i++){
    console.log(colors[i]);
}



console.log('=== FOR EACH ===');
//FOR EACH loop and ARRAY
var colors1 = ['red', 'orange', 'yellow', 'green'];
colors1.forEach(function(x){
    // 'x' is a placeholder, call it whatever you want
    console.log(x) ;
});




// FOR EACH - calls function inside of function
console.log('=== FOR EACH ===');
var cars = ['ford', 'chevy', 'jeep', 'vw', 'bmw'];
cars.forEach(function (forSale) {
    console.log("This cars is for sale: " + forSale);

});



//==================== Function passed to FOR EACH against ARRAY
// Create  a function then pass to array
function printColor(color){
    console.log('***********');
    console.log(color);
    console.log('***********')
}
// printColor('red');
cars.forEach(printColor);
//==================== Function passed to FOR EACH against ARRAY
printColor(cars[2]);



// FOR fun - using a while to loop through array
var count = 0;
while(count < colors.length){
    console.log(colors[count]);
    count ++;
}



var numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.forEach(function (number) {
    if(number % 3 === 0){
        console.log(number);
    }
});


// Same as above with FOR loop
for(var i = 1; i < numbers[i] + 1; i++){
    if(numbers[i]  % 3 === 0)
    console.log(numbers[i]);
}