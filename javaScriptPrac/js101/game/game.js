// browser based number guessing game...



// create secrete number
var secrectNum = 4;
// ask user for guess - convert guess to a INT with NUMBER
var stringGuess  = prompt("Please Guess A Number");
// - convert guess to a INT with NUMBER
var guess = Number(stringGuess);
alert(guess);

// check guess is right
if(guess === secrectNum){
   alert ("You got it right");
}

// otherwise check if higher
else if (guess > secrectNum){
    alert("Guess is to high")
}

// otherwise check if higher
else {
    alert("Guess is to low")
}



