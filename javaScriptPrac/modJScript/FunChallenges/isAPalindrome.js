function palindrome(str) {

    // Regular expression - sequence of characters that match a search pattern "/[\W_]/g" remove all non-numeric and underscores
    var reg = /[W0-9_]/g;

    // Match all RegEx and replace with nothing
    var smallStr = str.toLowerCase().replace(reg, "");
    console.log(smallStr);

    // make string an array and reverse then convert back to str
    var reversed = smallStr.split("").reverse().join("");
    console.log(reversed);

    // compare reversed and string
    if(reversed ===  smallStr) return true;

    return false;
}

console.log(palindrome('racecar'));
console.log(palindrome('dad_12'));
console.log(palindrome('123eye'));
console.log(palindrome('dad'));
console.log(palindrome('test'));
console.log(palindrome('dadadadadadf'));

