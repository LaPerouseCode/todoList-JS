
// console.log("testing index.js webpack");

// const contentDiv = document.querySelector(".content");
// const testH1 = document.createElement("h1");
// testH1.textContent = "TESTING DOM MANIPULATION";
// contentDiv.appendChild(testH1);



import { createToDo } from './create-to-do.js' ;
import { blankProjectLoad } from './blank-project.js' ;
import { initialdomManip } from './initial-dom-manip.js'

// Call blankProjectLoad on first land
blankProjectLoad();

//Call DOM Manipulation module to control UI
initialdomManip();

// TODO: click event module HERE for todo and project creation

// Call create-to-do.js module file and apply some objects/properties