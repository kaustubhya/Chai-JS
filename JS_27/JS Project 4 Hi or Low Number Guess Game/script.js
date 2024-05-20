// Getting numbers from 1 to 99
// console.log(Math.random() * 100 + 1);

// console.log(Math.round((Math.random() * 100 + 1)));

let randomNumber = parseInt(Math.random() * 100 + 1);

// taking this value into submit input field
const submit = document.querySelector('#subt');

// taking this value into user input field
const userInput = document.querySelector('#guessField');

// We can either take value here or later like:
// const userInput = document.querySelector('#guessField')

// the highloghted span area for previous guesses
const guessSlot = document.querySelector('.guesses');

// span area for showing remaining guesses
const remaining = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.lowOrHi');

// When the game is over we want to give a button saying start over and put that button in the below result paras div
const startOver = document.querySelector('.resultParas');

// This initially is a paragraph, when we end game, we will make this a button and append it in result paras div
const p = document.createElement('p');

// Now we will take an array which will hold all the user's previous guesses and we will display it to the user
let prevGuesses = [];

// Also we will show a variable which shows the user the remaining guesses
let remGuesses = 10;

// Usually games like these have a start and stop bool variable which decides whether game should be in motion or not

let playGame = true;

// LOGIC::
// if(playGame ==true)

if (playGame) {
  // make the submit button active
  submit.addEventListener('click', function(e) {
    // Usually in forms, when we submit it, the values go to server or to some other place (mentioned by its action attribute, to prevent it, use e.preventDefault)
    e.preventDefault();

    // earlier we just selected the user input via dom query selector, now we will take its string values and convert it to int
    const guessValue = parseInt(userInput.value);

    // testing the guess number
    console.log(guessValue);

    // send it for validation now
    validateGuess(guessValue);
  });
}

function validateGuess(guessValue) {
  // this method will let us know whether the user has entered a valid number between 1 to 100 or not

  // We will use this validations method a lot in the future, when we are trying to interact with the backend

  if (isNaN(guessValue)) {
    alert('Please enter a valid number');
  } else if (guessValue < 1 || guessValue > 100) {
    alert('Please enter a  number between 1 and 100');
  } else {
    // valid number
    prevGuesses.push(guessValue);
    // push it into the array

    // when all attempts are exhausted
    if (remGuesses === 0) {
      displayGuess(guessValue);

      displayMessage(`Game Over. Random Number was ${randomNumber}`);

      endGame();
    } else {
      displayGuess(guessValue);
      checkGuess(guessValue);
    }
  }
}

function checkGuess(guessValue) {
  // This method will check the result of the validation guess. If guess == random number, tell display message we have won, else tell them lower or higher

  if (guessValue == randomNumber) {
    displayMessage(`Bingo you're right!!`);
    endGame();
  } else if (guessValue < randomNumber) {
    displayMessage('Higher');
  } else {
    displayMessage('Lower');
  }
}

function displayGuess(guessValue) {
  // this method will display the guess on dom and clean the dom before displaying the next one.
  // It will also update the prevGuess array and display the guessCount

  userInput.value = '';
  // once people have entered the guess and presses submit, the display guess is called and guess is shown with message

  // Now after that we want to clear the guess field by updating it (this is a clean up method)

  guessSlot.innerHTML = guessSlot.innerHTML + `${guessValue}, `;
  // this is an array which is coming from the span element

  // We want to push some values in this span element

  remGuesses--;
  remaining.innerHTML = `${remGuesses}`;
  // update guess count in span
}

function displayMessage(message) {
  // this will display messages on dom like low / hi

  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  // Now to end game, plan is when the game is over, a button should appear saying us to restart the game.

  // Usually it will be hidden when game is going on

  // Steps when game is over

  // user input is cleared
  userInput.value = '';

  // user cannot add any more inputs
  userInput.setAttribute('disabled', ``);

  // Disabled is usually given in key value pairs, so we donot want any value here so we do ``

  p.classList.add(`button`);
  p.innerHTML = `<h2 id='newGame'>Click here to Start a New Game</h2>`;
  // we converted the p element (we created earlier) into a button, and gave it an id and a text

  startOver.appendChild(p);
  // we appended this button in the result div when game is over

  playGame = false;
  // set it to false when game is over

  newGame(); // go here next
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');

  newGameButton.addEventListener('click', function(e) {
    // when we click on start a new game, the following things need to be done:

    // Generate a new Random Number (update the old variable)
    randomNumber = parseInt(Math.random() * 100 + 1);

    // Update i.e. Empty the prevGuesses array
    prevGuesses = [];

    // Reset the remaining guesses to 10
    remGuesses = 10;

    // empty the guess slot span array (visual)
    guessSlot.innerHTML = '';

    // reset the remaining guesses span
    remaining.innerHTML = `${remGuesses}`;

    // Now we disabled the input field when we ended the game, we will enable it again by removing the earlier setted attributw
    userInput.removeAttribute('disabled');

    // finally we remove this p button added as child from the startOver() and result div
    startOver.removeChild(p);

    // lastly reset game to true to play again
    playGame = true;
  });
}
