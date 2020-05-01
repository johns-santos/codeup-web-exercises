// OBJECTS & Key Value Pairs;
// Dictionary (Key Pair)

var person = {
    name: "Cindy",
    age: 32,
    city: "Missoula"
};

console.log(person);

// Update age
person['age'] += 5;
console.log(person);


var person2 = {
    name: "Steve",
    age: 32,
    city: "Austin",
    pet: {
        name: "ozzy",
        breed: "chihuahua",
        age: 5
    }
};


// Working with object  key value pairs
var dog = {
    name: 'bubba',
    breed: 'chihuahua'
};

console.log(dog.name);
console.log(dog["name"]);


// Add a new key value pair to object
dog.age = 6; // simply specify NEW key and value
console.log(dog);


// update key value;
dog.breed = 'lab';
console.log(dog);


// Access objects in an ARRAY
var posts = [
    {
        title: "cats are medicore",
        author: "colt",
        comments: ["Awesome post", "love it"]
    },
    {
        title: "cats are actually awesome",
        author: "Mary",
        comments: ["<3", "Totally disagree"]
    }
];


// Log second comment in first post
console.log('===== Log second comment in first post =====')
console.log(posts[0].comments[1]);


var someObject = {
    friends: [
        {name: 'Malfoy'},
        {name: 'Crabe'},
        {name: 'Goyle'}
    ],
    color: 'baby blue',
    isEvil: true
};
console.log(someObject.friends[0]);
console.log(someObject.friends[0].name);




var movies = [
    {
        name: "In Bruges",
        hasWatched: "true",
        rating: "5 stars"
    },
    {
        name: "Frozen",
        hasWatched: "false",
        rating: "4.5 stars"
    },
    {
        name: "Mad Max Fury Road",
        hasWatched: "false",
        rating: "5 stars"
    },
    {
        name: "Les Miserables",
        hasWatched: "true",
        rating: "3.5 stars"
    }
    ];



function promptHasSeenMovie(arr) {
    for (var i = 0; i <= arr.length - 1; i++) {
        var ask = prompt('Have you watched "' + arr[i].name + '"');
        if (ask === 'yes') {
            console.log('You have watched "' + arr[i].name + '" - ' + arr[i].rating);
        } else console.log('You have not watched "' + arr[i].name + '" - ' + arr[i].rating);
    }
}
promptHasSeenMovie(movies);



movies.forEach(function(movie){
    var result = "You have ";
    if(movie.hasWatched) {
        result += "watched ";
    }else {
        result += "not seen ";
    }
    result += "\"" + movie.name + "\" = ";
    result += movie.rating;
    console.log(result);
});
