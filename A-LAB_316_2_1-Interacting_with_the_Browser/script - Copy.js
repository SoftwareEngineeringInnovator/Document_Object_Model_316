//TEAM MEMBERS:
// Aurya Diaz
// Henoc Montes
// Marlon Rodriguez
// Cahlija Knight
//

// Select the div with id
const grid = document.ElelementById('grid-container');
// console.log(grid);

//create the game grid
for (let i = 1; i <= 100; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    div.textContent = i;
    // add the div to the page
    grid.appendChild(div);
}

//Generate a random number
const randomNumber = Math.floor(Math.random() * 100 + 1);

// number of guesses
let numberOfGuesses = 2;

console.log(randomNumber);

// create a game loop which run as long as the user has a guess remaining
while (numberOfGuesses > 0) {
    // console.log(numberOfGuesses)


// First Round of game

//ask the user for a number 
const guess = Number(prompt('Guess a number from 1-10'))

if (guess === randomNumber) {
    alert(`The number is ${guess}. You win!`)
    //
    break;

    // either the guessed the number is too low
} else if (guess < randomNumber) {
    alert(`The number is ${guess} is too low! Guess again. \n ${numberOfGuesses} guesses remaining`)

    // or the guesses number is too high
} else {
    alert(`The number ${guess} is too high! Guess again. \n ${numberOfGuesses} guesses remaining`)
}

// check if their at zero guesses
if (numberOfGuesses === 0) {
    alert('No more guesses. You lose!')
}
    // decremenet number of guesses so we eevntuall break the loop
    numberOfGuesses--
}


