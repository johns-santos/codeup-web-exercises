
function guestGame(){
// browser based number guessing game...

// create secrete number
var secrectNum = Math.floor((Math.random() * 10) +1);
    console.log(secrectNum);

do {
    var stringGuess = prompt("Guess A Number Between 1 ane 10");
    var guess = Number(stringGuess);

    if (guess < secrectNum) {
        alert("Guess is to low");
    }
    if (guess > secrectNum) {
        alert("Guess is too high");
    }
    if(guess === secrectNum) {
        alert("You got it right");
    }
}
while (guess !== secrectNum);
}

guestGame();



//             alert("Guess is to high")
//         }
// // // otherwise check if higher
//         else {
//             alert("Guess is to low")
//         }
//     }




