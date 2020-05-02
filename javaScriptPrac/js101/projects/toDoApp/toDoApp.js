//=======================================
//selectors
//=======================================
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


//=======================================
// Event Listeners
//=======================================
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);


//=======================================
// Functions
//=======================================
//ADD TODO To List  ====================================
function addTodo(event) {
    //Prevent form from submitting
    event.preventDefault();
    // Create Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo = document.createElement("li");
    // Add input value to list
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // create CHECK Mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class='fas fa-check'></i>";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // CHECK trash BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    // APPEND to LIST
    todoList.appendChild(todoDiv);
    //CLEAR TODO input value
    todoInput.value = "";
}


// DELETE/CHECK TODO  ====================================
function deleteCheck(e) {
    // Determine which BTN was clicked
    const item = e.target;

    //Delete TODO
    if (item.classList[0] === "trash-btn") {
        // Remove entire item by referencing PARENT Element
        const todo = item.parentElement;
        // Animation to add FALL
        todo.classList.add('fall');
        // Need to delay remove until transitioned ends
        todo.addEventListener("transitionend", function () {
            todo.remove();
        });
    }

    //CHECK mark
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}


function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
        }
    });
}
