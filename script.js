let command;
let myArray = [];
let spliceArray;

while (command != "quit") {

    command = prompt("Enter one of the following commands: \n   new: add a tdo \n   list: display the todo \n   delete: remove a todo \n   quit: exit the todo");

    if (command.trim() == "new") {
        let newTodo = prompt("Enter a new ToDo:");
        myArray.push(newTodo);
        console.log(newTodo);
    } else if (command.trim() == "list") {
        console.log("********** TODO LIST **********");
        for (let i = 0; i < myArray.length; i++) {
            console.log(`${i+ 1}.  ${myArray[i]}`);
        }
    } else if (command.trim() == "delete") {
        let todoNumber = parseInt(prompt("Enter the number of the todo to delete:"));

        if (isNaN(todoNumber) || todoNumber < 1 || todoNumber > myArray.length) {
        console.log("Invalid input. Please enter a valid number.");
        } else {
        myArray.splice(todoNumber - 1, 1);
        console.log(`Todo number ${todoNumber} deleted.`);
        }
    } else {
        alert("Enter a valid command: \n   new: add a tdo \n   list: display the todo \n   delete: remove a todo \n   quit: exit the todo")
    }
}