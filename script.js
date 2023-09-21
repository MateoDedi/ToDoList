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
        let input = prompt("Enter a list of items separated by commas:");
        myArray = input.splice( ,);
        console.log("********** TODO LIST **********");
        for (let i = 0; i < myArray.length; i++) {
            console.log(`${i+ 1}.  ${myArray[i]}`);
        }
    } else {
        alert("Enter a valid command: \n   new: add a tdo \n   list: display the todo \n   delete: remove a todo \n   quit: exit the todo")
    }
}