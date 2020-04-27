var todos = ["Buy new turtle"];


var input = prompt("What would you like to do?");

while (input !== "quit") {
    if (input === "list") {
        console.log(todos);
    } else if (input === "new") {
        // prompt user for new todoitem
        var newTodo = prompt("Enter new todo");
        //add to todos array
        todos.push(newTodo);
    }
    //ask again for new input
    input = prompt("What would you like to do?");
}
console.log("Ok, you quit the app");

