"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
// code here runs if condition evaluates to true
// }

/*
// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin
// if(isAdmin){
    // show admin navbar
    // showAdminNavbar() <-- FUNCTION
// }

//TODO Together: Send a 20% off coupon if its users birthday
// if(isBirthday){
    // send the 20% off coupon
    // sendBirthdayEmail() <--- FUNCTION
// }

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true
var isRaining = true;

if(isRaining === true) {
    alert("it's raining");
}

if(isRaining){
    alert("it's raining");
}

//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
var itemCost = 100;
var currentBalance = 200;

if(itemCost < currentBalance){
    alert('You have enough money');
}


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
var NumberOfLives = 0;
if(NumberOfLives === 0){
    alert('Sorry, game over');
}

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
var weather = 'snowing';
if(weather === 'snowing'){
    alert("It's Snowing");
}

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10
var numberInput = 9;
//if(numberInput > 10)&&(numberInput !== 10){
//    alert('true');
//}

//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.
*/



// ======================================================
// =============== IF / ELSE SYNTAX ================
// ======================================================
// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }



/*
// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar
var isAdmin = true;

if(isAdmin){
    // show admin navbar
    alert('user is an admin');
} else {
    // show regular navbar
    alert('user is a nonAdmin');
}



//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else alert "have a nice day!"
var isRainy = false;

if(isRainy){
    alert("It's Raining!");
} else {
    alert('Have a nice day');
}
*/

/*
//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
var numberOfLives = 5;

if(numberOfLives == 0) {
    alert("Sorry, game over");
} else {
    alert("Next Level!")
};


//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
var weather = 'snowing';

if(weather === 'snowing' ) {
    alert("It's snowing")
} else {
    alert("Check back later for more details");
}


//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
var numberInput = 11;

if(numberInput > 10){
    alert("the number is greater than 10");
} else {
    alert('the number is less than 10');
}


//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.
function checkIfGameIsOver(numberOfLives){
    if(numberOfLives === 0){
        return 'Sorry game is over';
    } else {
        return 'next level';
    }
}
console.log(checkIfGameIsOver(0));


//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.

// SHOULD WE DELETE STUFF EXAMPLE


//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }



// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases

var weather = 'snowing';

if(weather === 'snowing'){
    alert('Its snowing');
} else if (weather === 'raining') {
    alert('Its raining');
} else if (weather === 'windy'){
    alert('its windy');
} else {
    alert('Have a nice day');
};

//TODO Together: refactor the above statement as a function
function checkWeather(weather) {
    if (weather === 'snowing') {
        return ('Its snowing');
    } else if (weather === 'raining') {
        return ('Its raining');
    } else if (weather === 'windy') {
        return ('its windy');
    } else {
        return ('Have a nice day');
    }
}
console.log(checkWeather('sunny'));


// Together: PIZZA PREFERENCE EXAMPLE

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }

//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.

function trafficInstructor(lightColor){
    if (lightColor === 'red') {
        return ('RED - Stop!!!');
    } else if (lightColor === 'yellow') {
        return ('YELLOW - Yield!!!');
    } else if (lightColor === 'green') {
        return ('GREEN - Go!!!');
    } else {
        return ('Proceed with caution');
    }
}
console.log(trafficInstructor('yellow'));


*/
// =======================================================
// ================ NESTED ELSEIF STATEMENTS ===============
// =======================================================
//TODO Together:
// If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license.
var userAge = 16;
var hasPermit = true;
    // If user is under 15, they are not eligible for a learners permit, else they are.
    // If they are eligible, check age.
    if(userAge < 15) {
        alert("Not eligible for learning permit");
    } else if (userAge === 15) {
        alert("You are eligible for a permit");
        // if they are 16 or older and have a permit, they are eligible for license,
    } else if (userAge > 16 && hasPermit) {
        alert("you can have license");
        // if they are 16 or older and do not have a permit, they are not eligible for a license.
    } else if (userAge > 16 && !hasPermit) {
        alert("sorry you need a permit first");
    } else {
        alert("Please see front desk!");
    }





// ====================================================
// ================ TERNARY STATEMENT ================
// ====================================================
// TERNARY = 3 sections
// TERNARY SECTIONS:       (CONDITION) ? if action here : else action here;
// SECTION 1 - condition,  SECTION 2 - ? IF then do this, SECTION 3 - : ELSE do this
//TODO Together: Regular way
// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);
// TODO: Convert IF/ELSE to TERNARY OPERATOR
 var success = true;
 var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
 console.log(message);

 // isAdmin TERNARY
// var isAdmin = true;
// (isAdmin) ? showAdminNavbar() : showRegularNavbar();

//TODO: Refactor the following conditional as a ternary
// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }
//TODO: CONVERT code block above to TERNARY STATEMENT:
var weather = "sunny";
var weatherMessage = (weather === "rainy") ? "It's raining" : "Have a nice day";





// ====================================================
// =============== SWITCH STATEMENT ================
// ====================================================
//TODO Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//
//     case "ham";
//          alert("ham is nice and east to spell");
//          break;
//
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.
var  weather2 = "rainy";

switch(weather2) {
    case "rainy":
        alert("it's raining");
        break;
    case "sunny":
        alert("it's sunny");
        break;
    case "snow":
        alert("It's snowing");
        break;
    default:
        alert("have a nice day");
        break;
}
//TODO: Rewrite the intersection function from earlier as a switch statement.
function checkWeather2(weather2){
    var weatherMessage2;
    switch(weather2){
        case "rainy":
            weatherMessage2 = "Its raining";
            break;
        case "sunny":
            weatherMessage2 = "Its sunny";
            break;
        case "snow":
            weatherMessage2 = "Its snowing";
            break;
    }
    return weatherMessage2;
}
console.log(checkWeather2('sunny'));


//TODO: Rewrite the following code block as a SWITCH statement
/*
function checkTrafficLight(trafficLight){
    if(trafficLight === "green"){
        return "keep going!";
    } else if (trafficLight === "yellow"){
        return "slow down";
    } else if (trafficLight === "red"){
        return "stop";
    } else {
        return "proceed with caution";
    }
}
console.log(checkTrafficLight("green"));
*/

function checkTrafficLight(trafficLight){
    var trafficMessage;

    switch(trafficLight){
        case "green":
            trafficMessage = "Keep Going";
            break;
        case "yellow":
            trafficMessage = "Prepare to stop";
            break;
        case "red":
            trafficMessage = "STOP!!!!!!";
            break;
        default:
            trafficMessage = "Proceed with caution";
            break;
    }
    return trafficMessage;
}

console.log(checkTrafficLight("black"));
console.log(checkTrafficLight("red"));
console.log(checkTrafficLight("green"));

// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html
