import { blankProjectLoad } from "./blank-project-load";

// DOM Manipulation to display the UI components
export function displayDefaultProject () {

    // DOM for the default project load
    const projectsInfoDiv = document.createElement("div");
    projectsInfoDiv.textContent = blankProjectLoad().projectTitle;
    contentDiv.appendChild(projectsInfoDiv);
}

export function displayTheForm() {
    document.getElementById("add-todo-form").style.display = "";
}

export function addItemToChecklist() {
    const addItem = document.getElementById("add-to-checklist").value;

    if (addItem !== "") {
        const ul = document.querySelector(".todo-ul");
        const li = document.createElement("li");
        li.textContent = addItem;

        const span = document.createElement('span');
        span.className = "remove-checklist-item";
        const removeIcon = document.createTextNode("\u00D7");
        span.appendChild(removeIcon);
        li.appendChild(span);
        ul.appendChild(li);

        document.getElementById("add-to-checklist").value = ""; // Clear input

        // Check for existing checklist items
        const nodeListChecklist = document.querySelectorAll("li");
        if (nodeListChecklist.length > 0) {
            console.log("INSIDE MODULE IF>>>>", nodeListChecklist.length);
            console.log(nodeListChecklist);

            nodeListChecklist.forEach(checklistItem => {
                checklistItem.querySelector('.remove-checklist-item').addEventListener("click", removeItemFromChecklist);
            });
        }
    } else {
        return;
    }
}

// Function to remove an item from the checklist
function removeItemFromChecklist(event) {
    event.target.parentElement.remove(); // Remove the parent li element
}




export function clearForm(){
    const nodeListChecklist = document.querySelectorAll("li");
        for (let i = 0; i < nodeListChecklist.length; i++){
            nodeListChecklist[i].remove();
        }
        document.getElementById("add-todo").reset();

}
 

