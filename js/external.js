/* javascript with html exercises*/

// ============= 1-7 ==========================
// console message to test external link
console.log("Hello from inline JavaScript");
// ============= 1 ==========================
// Alert message
alert("'Welcome to my Website!'.");


// ============= 2 ==========================
// Prompt user for input
var favoriteColor = prompt('What is your favorite color?');

// Include user input from prompt in alert message
// alert(" Great, " + favoriteColor + " is my favorite color too!");
// ALERT can be made into a variable
alertMessage = ('Great, ' + favoriteColor + ' is my favorite color too!');
alert(alertMessage);
// ========================================


/*  ============= 3 ==========================
 Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code. */
// 1) You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
var movieRental = function (total) {
    var littleMermaid = prompt("How many days was 'The Little Mermaid' rented?");
    var brotherBear = prompt("How many days was 'Brother Bear' rented?");
    var hercules = prompt("How many days was 'Hercules' rented?");
    var pricePerDay = prompt("Enter price of movie rental per day:");

    var total = (littleMermaid * pricePerDay) + (brotherBear * pricePerDay) + (hercules * pricePerDay);
    var alertMovieRental = alert(' Movie Rental Total: $' + total.toFixed(2));
    alert(alertMovieRental)
};

// Instructor solution
var movieRental2 = function (total2) {
    var dailyRentalRate = Number(prompt("Enter price of movie rental per day:"));
    var mermaidDailyRented = Number(prompt("How many days was 'The Little Mermaid' rented?"));
    var broBearDailyRented = Number(prompt("How many days was 'Brother Bear' rented?"));
    var herDailyRented = Number(prompt("How many days was 'Hercules' rented?"));

    //var total2 = (mermaidDailyRented * dailyRentalRate) + (broBearDailyRented * dailyRentalRate) + (herDailyRented * dailyRentalRate);
    var total2 = (mermaidDailyRented + broBearDailyRented + herDailyRented) * dailyRentalRate;
    var alertMovieRental2 = alert(' Movie Rental Total: $' + total2.toFixed(2));
    alert(alertMovieRental2)
};

// 2) Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
var techPay = function (totalPay) {
    var googlePay = prompt("Google hourly rate: ");
    var googleHrs = prompt("Total hours worked for Google: ");
    var amazonPay = prompt("Amazon hourly rate: ");
    var amazonHrs = prompt("Total hours worked for Amazon ");
    var facebookPay = prompt("Facebook hourly rate: ");
    var facebookHrs = prompt("Total hours worked for Facebook: ");

    var totalPay = ((googlePay * googleHrs) + (amazonPay * amazonHrs) + (facebookPay * facebookHrs));
    var alertTechPay = ("Total Weekly Pay is: $" + totalPay.toFixed(2)); //$7420.00
    alert(alertTechPay)
};

// 3) A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
var canEnroll = function parseInt(classFull, classSchedule) {
    var classFull = prompt('Is the class enrollment full? ');
    var classSchedule = prompt('Does the class schedule conflict with another class?');

    if ((classFull === 'no') && (classSchedule === 'no')) {
        alert('The student may enroll!!!');
    } else if ((classFull === 'yes') && (classSchedule === 'yes')) {
        alert('The student may not enroll');
    } else if ((classFull === 'no') && (classSchedule === 'yes')) {
        alert('The student may not enroll');
    } else if ((classFull === 'yes') && (classSchedule === 'no')) {
        alert('The student may not enroll');
    } else {
        alert('The student will need to see Adviser');
    }
};

// 3) Instructor code using CONFIRM
var canEnroll2 = function (classFull, classSchedule) {
    var classFull2 = confirm('Is the class enrollment full? ');
    var classSchedule2 = confirm('Does the class schedule conflict with another class?');
    var studentEnrolles = classFull2 && classFull2;

    if ((classFull2 === false) && (classSchedule2 === false)) {
        alert('The student may enroll!!!');
    } else if ((classFull2 === true) && (classSchedule2 === true)) {
        alert('The student may not enroll');
    } else if ((classFull2 === false) && (classSchedule2 === true)) {
        alert('The student may not enroll');
    } else if ((classFull2 === true) && (classSchedule2 === false)) {
        alert('The student may not enroll');
    } else {
        alert('The student will need to see Adviser');
    }
};


// 4) A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
var offerCheck = function parseInt(items, offerExpire, premiumMember) {
    var items = prompt('How many items is customer purchasing?');
    var offerExpire = prompt('Is the offer expired?');
    var premiumMember = prompt('Is the member a Premium Customer?');

    if (premiumMember === 'yes') {
        alert('Product offer can be offered');
    } else if ((items >= 2 && offerExpire === 'no') && (premiumMember === 'no')) {
        alert('Product offer can be offered');
    } else if ((items <= 1) || (offerExpire === 'yes')) {
        alert('Product offer can not be offered');
    } else {
        alert('No special offers are available at this time');
    }
};


// 4) INSTRUCTOR code using NUMBER, CONFIRM -
/** NOT WORKING  NEEDS TO BE UPDATED FROM INSTRUCTOR CODE

 var offerCheck2 = function (items, offerExpire, premiumMember) {
 var items2 = Number('How many items is customer purchasing?');
 var offerExpire2 = Confirm(prompt('Is the offer expired?'));
 var premiumMember2 = Confirm(prompt('Is the member a Premium Customer?'));

 var dicountApplied = offerExpire2 && (premiumMember2 || items2 > 2)
 alert('Discount maybe applied');
};
 */



