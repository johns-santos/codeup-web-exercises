

var i = 1;

//while i is less than or equal to 65536
while ( i <= 65536) {
    //console log 'i'
    console.log(i);
    // then multiple by 2
    i *= 2;
}


console.log('========== Cones ====================')
// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;

do {
// This expression will generate a random number between 1 and 5
    var conesSold = Math.floor(Math.random() * 5) + 1;

    //checks if I have enough cones to sell
    if(conesSold > allCones){
        // sad path - i cant sell you cones because i dont have enough

        var sadConesMessage = "Cannot sell you " + conesSold+ " I only have " + allCones + "....";

        console.log(sadConesMessage);


    } else {
        //happy path - I can sell you cones! because I have enough
        allCones -= conesSold;

        var happyConesMessage = conesSold + " cones sold ... " + allCones + " cones to go";
        console.log(happyConesMessage);
    }


} while (allCones > 0)

console.log("yay i sold all the cones");
