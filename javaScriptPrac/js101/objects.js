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