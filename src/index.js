
import { createToDo } from './create-to-do.js' ;
import { blankProjectLoad } from './blank-project-load.js' ;
import { displayDefaultProject, displayTheForm, addItemToChecklist, clearForm } from './dom-manip.js';
import './style.css'


// Call blankProjectLoad on first land
blankProjectLoad();

//Call DOM Manipulation module to control UI
initialdomManip();

//Click events module 
let clickEventsModule = (function(){

    //Click event for displaying the form
    const addNewToDo = document.querySelector(".add-todo-button");
    addNewToDo.addEventListener("click", displayTheForm);

    //Click event for adding an item to the checklist on the form
    const addToChecklist = document.querySelector(".add-to-checklist");
    addToChecklist.addEventListener("click", addItemToChecklist);

    // Click event to clear the form
    const clearButton = document.querySelector(".reset-button");
    clearButton.addEventListener("click", clearForm);

})


// Call create-to-do.js module file and apply some objects/properties
const myTodo = createToDo("Grocery Run", "Go get groceries", "15/6/2024", "Low", "Meat, Eggs, Milk");
const myTodo2 = createToDo("Homework", "Do Odin Project work", "20/6/2024", "Medium", "Read Module, do Todo project");
console.log("Show me properties on myTodo from index.js.....", myTodo);
console.log("Show me properties on myTodo from index.js.....", myTodo2);