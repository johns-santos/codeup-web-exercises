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





// Why use THIS
//=========================
var comments = {};
comments.data = ["good job", "Bye", "Lame..."];
console.log(comments);

function print(arr){
    arr.forEach(function(el){
        console.log(el);
    });
}
print(comments.data);







//======================================================
// ADD print function to COMMENTS object.
//======================================================
//======================================================
var comments1 = {};
comments1.data = ["good job", "Bye", "Lame..."];
console.log(comments1);

comments1.print = function() {
    this.data.forEach(function (el) {
        console.log(el);
    });
};
//  by adding the print function to the object with THIS
// the function can be called by typing:
comments1.print();