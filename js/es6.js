/*
 * Complete the TODO items below
 */
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    },
    // TODO: fill in your name and email and add some programming languages you know
// to the languages array
    {
        name: 'John',
        email: 'jsantos@gmail.com',
        languages: ['html', 'css', 'javascript', 'jquery']
    }
];
// console.log(JSON.stringify(users));
//
// // TODO: replace the `var` keyword with `const`.
// // declared as `const`
const name = 'Jimmy';
const email = 'Jimmy@yahoo.com';
const languages = ['python', 'pearl', 'C++'];

//TODO: Try to reassign a variable
//name = 'Isablla' // This returns a ES6 error "  Identifier 'name' has already been declared "

// TODO: rewrite the object literal using object property shorthand
// Add a new element to an array. Using braces changes the scope and creates a new object to be used with a global object
users.push({
    name: 'jack',
    email: 'jack@gmail.com',
    languages: ['test', 'test1', 'test2']
});
console.log('users');
//
//
//
// const name1 = 'Jill';
// const users1 = {
//     name,
//     email: 'jil@gmail.com',
//     languages: ['php']
// };
// console.log([users1]);

//
//
// // TODO: replace `var` with `let` in the following variable declarations
var emails = [];
var names = [];
//
// // TODO: rewrite the following using arrow functions
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////
// users.forEach(function(user) {
//     return emails.push(user.email);
// });
//
users.forEach((user) => {
    return emails.push(user.email);
});
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////

// users.forEach(function(user) {
//     return names.push(user.name);
// });
//
users.forEach((user) => {
    return names.push(user.name);
});


// // TODO: replace `var` with `let` in the following declaration
// var developers = [];
let developers = [];
// users.forEach(function(user) {
users.forEach((user) => {

//     // TODO: rewrite the code below to use object destructuring assignment
//     //       note that you can also use destructuring assignment in the function
//     //       parameter definition
//     const name = user.name;
//     const email = user.email;
//     const languages = user.languages;
    const {name, email, languages} = user;

//
//     // TODO: rewrite the assignment below to use template strings
//     developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
    developers.push(`${name}'s email is  ${email}, ${name} knows ${languages.join(',')}`);
});
console.log(developers);

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // TODO: Use `let` for the following variable
// var list = '<ul>';
let list = '<ul>';
// // TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {
for (let developer of developers) {

//     // TODO: rewrite the assignment below to use template strings
//     list += '<li>' + developer + '</li>';
// });
// list += '</ul>';
    list += `<li>${developer}</li>`;
}
list += '</ul>';
// console.log(list);
document.getElementById("message").innerHTML = list;
