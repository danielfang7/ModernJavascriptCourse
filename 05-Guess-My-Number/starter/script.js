'use strict';

/*
console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.message`).textContent = `Correct Number!`;
console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;

document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage(`Start guessing...`);
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.guess`).value = '';
  document.querySelector(`.number`).textContent = '?';
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess);
  console.log(typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage(`No number inputted!`);

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage(`Correct number! You win!`);
    document.querySelector(`.number`).textContent = secretNumber;

    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `Too high!` : `Too low!`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`You lost the game!`);
      document.querySelector(`.score`).textContent = 0;
    }
  }

  //     // When guess is too high
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(`.message`).textContent = `Too high!`;
  //       score--;
  //       document.querySelector(`.score`).textContent = score;
  //     } else {
  //       document.querySelector(`.message`).textContent = `You lost the game!`;
  //       document.querySelector(`.score`).textContent = 0;
  //     }

  //     // When guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(`.message`).textContent = `Too low!`;
  //       score--;
  //       document.querySelector(`.score`).textContent = score;
  //     } else {
  //       document.querySelector(`.message`).textContent = `You lost the game!`;
  //       document.querySelector(`.score`).textContent = 0;
  //     }
  //   }
});
