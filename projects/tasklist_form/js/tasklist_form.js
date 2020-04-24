// Task Constructor
function Task(description, assignedTo, deliveryDate) {
    this.description = description;
    this.assignedTo = assignedTo;
    this.deliveryDate = deliveryDate;
}

// UI Constructor
function UI() {
}


// Add Task To List FUNC
UI.prototype.addTaskToList = function (task) {
    // console.log(book);
    const list = document.getElementById('task-list');
    // Create tr element
    const row = document.createElement('tr');
    // console.log(row); // return <tr></tr>
    // Insert Cols - populate wit book info
    row.innerHTML = `
        <td>${task.description}</td>
        <td>${task.assignedTo}</td>
        <td>${task.deliveryDate}</td>
        
        <td><a class="removeBtn" onclick="" href="#" >REMOVE</a></td>
    `;

    list.appendChild(row);

};


// SHOW ALERT - Because standard ALERT is not professional looking
UI.prototype.showAlert = function (message, className) {
    // Create div
    const div = document.createElement("div");
    // Add Alert Classes
    div.className = `alert ${className}`;
    //Add text
    div.appendChild(document.createTextNode(message));
    //Get Parent
    const container = document.querySelector('.container');
    //Get Form
    const form = document.querySelector('#task-form');
    // Insert Alert
    container.insertBefore(div, form);

    // Alert Timeout after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 3000); // using mili-seconds
};

// Clear Fields
UI.prototype.clearFields = function () {
    document.getElementById('description').value = "";
    document.getElementById('assignedTo').value = "";
    document.getElementById('deliveryDate').value = "";
};


/*======================= EVENT LISTENER  ======================== */
document.getElementById('task-form').addEventListener('submit',
    function (e) {
        const description = document.getElementById('description').value;
        const assignedTo = document.getElementById('assignedTo').value;
        const deliveryDate = document.getElementById('deliveryDate').value;
        // console.log(title, author, isbn); // hit submit and element value should be logged

        /*======================= INSTANTIATE BOOK ======================== */
        const task = new Task(description, assignedTo, deliveryDate);
        // console.log(task); // task object is expected to be returned


        /*======================= INSTANTIATE UI - BOOK LIST =============== */
        const ui = new UI(); // UI Prototype - Object
        // console.log(ui);


        // Validate INPUT with IF statement
        if (description === "" || assignedTo === "" || deliveryDate === "") {

            // if(description === "" || timeComplete === "" || assignedTo === ""){
            // alert("Failed: Please fill out form before submitting.");
            ui.showAlert("Please fill in all fields on form", "error");
        } else {

            // ADD TASK to UI list
            ui.addTaskToList(task);
            ui.showAlert("Task has been successfully added", "success")


            // Clear Fields - After Submit
            ui.clearFields();
        }

        // Using simple JQuery click function to remove closest tr
        $(".removeBtn").click(function () {
            $(this).closest('tr').remove();
        });


        e.preventDefault();
    });


