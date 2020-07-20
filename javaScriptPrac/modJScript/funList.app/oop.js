// Create a log statement that can be replicated for every name and color
// ====================================================================
console.log('Hello, my name is Monica. My favorite color is red')
// ====================================================================


// Create a variable with name and color properties. Then add varialbe.properties to log statement
// ====================================================================
var moniSanMiguel = {
  name: 'Monica',
  favColor: 'red'
}
console.log(
  `Hello, my name is ${moniSanMiguel .name} and my favorite color is ${moniSanMiguel .favColor}.`
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
function Person (fullName, favColor) {
  this.name = fullName,
    this.color = favColor,
    this.greet = function () {
      console.log(`Hello, my name is ${this.name} and my favorite color is ${this.color}.`)
    }
}

var moni = new Person('Monica SanMiguel', 'red')
moni.greet()

var jon = new Person('John Santos', 'blue')
jon.greet()
// ===========================================================
