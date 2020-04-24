let age = 20;

if(age <= 0){
    console.log("error");
}

if(age < 21) {
    console.log("Sorry, you are too young for a drink")
}

if(age === 21){
    console.log("Happy 21st Birthday");
}

if(age >= 21) {
    console.log("You can have a drink")
}

if(age % 2 !== 0){
    console.log("Your age is odd");
}

if(age > 0  && Math.sqrt(age) % 1 === 0 ){
    console.log("perfect square")
}


