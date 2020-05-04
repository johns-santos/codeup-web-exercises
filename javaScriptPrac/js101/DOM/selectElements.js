// DOCUMENT linked to exercise.html


// 1) Select first paragraph with 4 diff methods
//<p id="first" class="special">Hello</p>
var p = document.getElementsByTagName("p")[0];
var first = document.getElementById("first");
var special = document.getElementsByClassName("special")[0];
var firstID = document.querySelector("#first");
// BONUS - use + to lead to element
var plus = document.querySelector("h1 + p");


console.log(p);
console.log(first);
console.log(special);
console.log(firstID);
console.log(plus);



var last = document.getElementById("last");
last.classList.add("test1");
// Select the <p> tag:
var tag = document.querySelector("p");
// Retrieve the textContent
tag.textContent;  /* "This is an awesome paragraph" */
// Alter the textContent
tag.textContent = "blah blah blah";


// Manipulate SECTION2
var p5 = document.getElementsByTagName("p")[4];
console.log(p5);

var ul = document.querySelector("ul");
console.log(ul.textContent);