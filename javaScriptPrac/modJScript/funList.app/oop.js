// Create a log statement that can be replicated for every name and color
// ====================================================================
console.log('Hello, my name is Monica. My favorite color is red')
// ====================================================================


// Create a variable with name and color properties. Then add varialbe.properties to log statement
// ====================================================================
var person = {
  name: 'Monica',
  favColor: 'red'
}
console.log(
  `Hello, my name is ${person.name} and my favorite color is ${person.favColor}.`
)
// ====================================================================

// Create a person class with name and color properties and greet method.
// ====================================================================
var monica = {
  name: 'Monica',
  favColor: 'red',
  greet: function () {
    console.log(
      'Hello, my name is ' +
        this.name +
        ' and my favorite color is ' +
        this.favColor +
        '.'
    )
  }
}
monica.greet()
// ===========================================================



// OOP - Object Orientated Programimng
// ===========================================================
function Person01 (fullName, favColor) {
  this.name = fullName,
    this.color = favColor,
    this.greet = function () {
      console.log(`Hello, my name is ${this.name} and my favorite color is ${this.color}.`)
    }
}

var moni = new Person01('Monica SanMiguel', 'red')
moni.greet()

var jon = new Person01('John Santos', 'blue')
jon.greet()
// ===========================================================
