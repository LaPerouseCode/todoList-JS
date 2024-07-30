
import { createToDo } from './create-to-do.js' ;
import { blankProjectLoad } from './blank-project.js' ;
import { initialdomManip } from './initial-dom-manip.js'

// Call blankProjectLoad on first land
blankProjectLoad();

//Call DOM Manipulation module to control UI
initialdomManip();

// TODO: click event module HERE for todo and project creation

// Call create-to-do.js module file and apply some objects/properties
const myTodo = createToDo("Grocery Run", "Go get groceries", "15/6/2024", "Low", "Meat, Eggs, Milk");
const myTodo2 = createToDo("Homework", "Do Odin Project work", "20/6/2024", "Medium", "Read Module, do Todo project");
console.log("Show me properties on myTodo from index.js.....", myTodo);
console.log("Show me properties on myTodo from index.js.....", myTodo2);