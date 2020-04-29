var todos = ["Buy new turtle"];
var input = prompt("What would you like to do?");


while (input !== "quit") {
    if (input === "list") {
        listToDos(); // Function defined at bottom;
    } else if (input === "new") {
        addToDo(); // Function defined at bottom;
    } else if (input === 'delete') {
        deleteToDo(); // Function defined at bottom;
    }
    //ask again for new input
    input = prompt("What would you like to do?");
}
console.log("Ok, you quit the app");


// ========= FUN FUN FUNCTIONS ==========================
function listToDos() {
    console.log('***********');
    //forEach will console.log each item to a new line
    todos.forEach(function (todoList, i) {
        console.log(i + ": " + todoList);
    });
    console.log('***********');
}

function addToDo() {
    // prompt user for new todoitem
    var newTodo = prompt("Enter new todo");
    //add to todos array
    todos.push(newTodo);
}

function deleteToDo() {
    // ask for index of item to be deleted
    var index = prompt('Enter index of todo to delete');
    // delete item specified by user
    todos.splice(index, 1); // 1 specifies number of items to be deleted after index
    console.log("Deleted ToDo");
}



