var car = {
    make: "Toyota",
    model: "Sienna",
    year: 2009,
    isTitled: true,
    options: ["4 wheel drive", "heated seats", "leather interior"],
    goGoGo: function (key) {
        if (key == "key") {
            console.log("vroom.....");
        } else {
            console.log("...");
        }
    }
}

        console.log("Car was made in " + car.year);
console.log("Car has these options:");
car.options.forEach(function(options){
    console.log(options)});
car.goGoGo("key");


console.log("============ myCar =============");
console.log("================================");

var myCar = {
    make: "Jeep",
    model: "Cherokee",
    trim: "Trailhawk",
    year: 2015,
    isTitled: true,
    options: ["4 wheel drive", "heated seats", "leather interior", "Navigation", "tow package"],
    goGoGo: function (option) {
        if('key' === "key") {
            console.log("Let's Go Off Road!!!!!!.....");
        } else {
            console.log("Check Engine... Boo :(");
        }
    }
};

        console.log("Car was made in " + myCar.year);
        console.log("Car has these options:");
        myCar.options.forEach(function (options) {
            console.log(options)
        });
        myCar.goGoGo("key");




console.log("============ car2r =============");
console.log("================================");


var cars = [
    car,
    {
        make: 'dodge',
        model: 'challenger',
        year: 2015,
        report: function(){
            console.log(this.year + ' ' + this.make + ' ' + this.model);

        }
    },
    {
        make: 'ford',
        model: 'shelby GT 500',
        year: 1969,
        report: function(){
            console.log(this.year + ' ' + this.make + ' ' + this.model);

        }
    },
    {
        make: 'Cadillac',
        model: 'Escalade',
        year: 2015,
        report: function(){
            console.log(this.year + ' ' + this.make + ' ' + this.model);

        }
    }
];


// cars.forEach(function(car) {
//     console.log(car.year + ' ' + car.make + ' ' + car.model);
// }

console.log("============ report / using forEach function =============");
car.report = function() {
    console.log(this.year + ' ' + this.make + ' ' + this.model);
    };

cars.forEach(function(car) {
    car.report();
});





console.log("============ Pet =============");
console.log("================================");


var pets = [
    {
        type: 'Dog',
        breed: 'Chihuahua',
        name: 'Ozzy',
        age: 7,
        sound: "bark, bark, bark",
        report: function(){
            console.log(this.type + ' ' + this.breed + ' ' + this.age);
        }
    },
    {
        type: 'Dog',
        breed: 'Chihuahua',
        name: 'Zeek',
        age: 5,
        sound: "eek, eek, eek, eek",
        report: function(){
            console.log(this.type + ' ' + this.breed + ' ' + this.age);

        }
    },
    {
        type: 'Hamster',
        breed: 'Drawf',
        name: 'scribbles',
        age: 1.5,
        sound: "poop, poop, poop",
        report: function(){
            console.log(this.type + ' ' + this.breed + ' ' + this.age);

        }
    }
];

console.log("============ Pet report / using forEach function =============");

// pets.report = function() {
//     console.log(this.type + ' ' + this.breed + ' ' + this.age);
// };

pets.forEach(function(pet) {
    pet.report();
});
