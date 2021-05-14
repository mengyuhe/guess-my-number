'use strict';

let secretBase = Math.trunc(Math.random() * 99) + 1;
let secretNumber = Math.trunc(Math.random() * secretBase) + 1;
let score = Math.ceil(Math.log2(secretBase)) + 1;

document.querySelector('.between').textContent = '(Between 1 and ' + secretBase + ')';
document.querySelector('.score').textContent = score;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ Please enter a number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

const restart = (score, secretBase) => {
  document.querySelector('.between').textContent = '(Between 1 and ' + secretBase + ')';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
}

document.querySelector('.again').addEventListener('click', () => {
  secretBase = Math.trunc(Math.random() * 99) + 2;
  secretNumber = Math.trunc(Math.random() * secretBase) + 1;
  score = Math.ceil(Math.log2(secretBase)) + 1;

  displayMessage('Start guessing...');
  restart(score, secretBase);
});

