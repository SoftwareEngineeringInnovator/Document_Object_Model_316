//TEAM MEMBERS:
// Aurya Diaz
// Henoc Montes
// Marlon Rodriguez
// Cahlija Knight
//

// Requirements
// Create your script.js file and implement the following:

// Select the #grid-container element from the DOM and store it in a variable.
const num = Math.floor(Math.random() * 101)
let choice = window.prompt("Guess the number between 1 and 100")
const gridContainer = document.getElementById("grid-container")


for (let i = 10; i >= 0; i--) {

    if (i == 0) {
        window.alert(`You lost! The answer is ${num}.`);
    } else {
        if (choice == num) {
            window.alert(`You won! The answer is ${num}.`);
            i = 0;
        } else if (choice > num) {
            choice = window.prompt(`${choice} is more than the number.`)
        } else if (choice < num) {
            choice = window.prompt(`${choice} is less than the number.`);
        }
    }
}

// Write a loop that executes exactly 100 times (iterating from 1 to 100).
for (let i = 1; i <= 100; i++) {
    const box = document.createElement("div");
    box.classList.add("box")
    box.textContent = i;
    gridContainer.appendChild(box);
}


// Inside the loop, dynamically create a new <div> element for each iteration.
// Add the CSS class box to each newly created <div>.
// Set the text inside the box to display its corresponding number (1 through 100).
// Append each finished box into the #grid-container.

