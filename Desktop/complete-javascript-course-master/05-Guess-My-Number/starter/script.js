'use strict';

//console.log(document.querySelector('.message').textContent);
//.textContent: HTML 요소의 텍스트 내용을 나타냅니다. 즉, 웹 페이지에서 특정 HTML 요소 안에 있는 텍스트 내용을 가져오거나 변경하는 데 사용됩니다. DOM (Document Object Model) 요소에 접근하고 텍스트 내용을 다루기 위해 사용되는 속성

//DOM manipulation
// document.querySelector('.message').textContent = '😍 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//EVENT: event is sth that happens on the page. click, moving, key press->eventlistener: react + eventhandler(function, eventlister가 뭘 할지)
//.addEventlisten('어떤 이벤트',event handler_function(){이벤트 결과})
//이때 function은 이벤트가 일어났을때 call된다. 그래서 따로 call할 필요 없음

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    //when there is no input
    displayMessage(' 👻 No Number!');

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('🐶 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    //highscore
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }

    //when the guess is wrong
  } else if (guess !== secretNumber) {
    displayMessage(
      guess > secretNumber
        ? '🐹 The number is too high!'
        : '👻 The number is too low'
    );

    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('You LOST the game');

    //when the guess is too high
  } //else if (guess > secretNumber) {
  //     if (score > 0) {
  //       document.querySelector('.message').textContent =
  //         '🐹 The number is too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You LOST the game';
  //     }

  //     //when the guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 0) {
  //       document.querySelector('.message').textContent =
  //         '👻 The number is too low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You LOST the game';
  //     }
  //   }
});

//addEventListener=method라서 () 필요

//challenge
//implement a game rest functionality, so that the player can make a new guess! here is how!

//1. select the element withe the 'again' class and attach a click event handler
//2. in the handler function, restore initial values of the score and number variables
//3. restore the initial conditions of the message, number, score and guess input field.
//4. also restore the original background color(#222) and number width (15rem).
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});

//refactoring- eliminate duplicate code
