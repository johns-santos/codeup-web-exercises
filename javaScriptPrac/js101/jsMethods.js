// JS Object Methods

var obj = {
    name: 'chuck',
    age: 45,
    isCool: false,
    friends: ['bob', 'bill', 'larry'],
    add: function(x,y){
        return x + y;
    }
};

console.log(obj);
console.log(obj.add(10,5));




// Avoiding name collisions with METHODS
catSpace = {};
catSpace.speak = function(){
    return "Meow";
};
console.log(catSpace.speak());


// Another speak method added to different object
dogSpace = {};
dogSpace.speak = function(){
    return "Woof";
};
console.log(dogSpace.speak());