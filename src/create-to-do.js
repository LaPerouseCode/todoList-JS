// Creating an array for ToDo
let toDoArray = [];

// Factory function to create todo list
export const createToDo = (Title, Description, DueDate, Priority, Checklist) => {
    console.log("Called creteToDo module>>> creating todo now");
    console.log({Title, Description, DueDate, Priority, Checklist});
    // TODO: remove below two lines of code if array is not needed
    toDoArray.push({Title, Description, DueDate, Priority, Checklist});
    console.log(toDoArray);
    return { Title, Description, DueDate, Priority, Checklist };


}