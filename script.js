let command;
let myArray = [];
let spliceArray;

while (command != "quit") {
    command = prompt("Enter one of the following commands: \n   new: add a todo \n   list: display the todo \n   delete: remove a todo \n   quit: exit the todo");

    if (command.trim() == "new") {
        let newTodo = prompt("Enter a new ToDo:");
        myArray.push(newTodo);
        document.write(newTodo + "<br>");
    } else if (command.trim() == "list") {
        document.write("<strong>********** TODO LIST **********</strong><br>");
        for (let i = 0; i < myArray.length; i++) {
            document.write(`${i + 1}. ${myArray[i]}<br>`);
        }
    } else if (command.trim() == "delete") {
        let todoNumber = parseInt(prompt("Enter the number of the todo to delete:"));

        if (isNaN(todoNumber) || todoNumber < 1 || todoNumber > myArray.length) {
            document.write("Invalid input. Please enter a valid number.<br>");
        } else {
            myArray.splice(todoNumber - 1, 1);
            document.write(`Todo number ${todoNumber} deleted.<br>`);
        }
    } else {
        alert("Enter a valid command: \n   new: add a todo \n   list: display the todo \n   delete: remove a todo \n   quit: exit the todo");
    }
}