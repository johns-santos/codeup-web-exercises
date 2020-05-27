let name = '  John Santos  ';
let password = '123password123abc';

// length property
name.length;
console.log(name.length);

// Convert to upper case
name.toUpperCase();
console.log(name.toUpperCase());

// Convert to lower case
console.log(name.toLowerCase());

// Includes
console.log(name.includes('Johnny'));
console.log(password.includes('word'));


// Trim method - Removes white space...
console.log(name.trim(2));


// isValidPassword
// return TRUE if password is more than 8 characters
// does not contain word password



let  isValidPassword = function (password) {
    if((password.length >= 8) && (password.includes('password') !== true)){
    return true;
    }
    else return false;
};
console.log(isValidPassword('123passwordRFG'));
console.log(isValidPassword('123PAsswordRFG'));
console.log(isValidPassword('123testRFG'));