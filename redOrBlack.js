let cardsPack = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let lives = 2;
let step = 1;
let cardZindexCounter = 10;
let autoPlayMode = false;


function autoPlayGame() {
  


  for (let i = 0; i < 6; i++) {

    let playerGuess = Math.floor((Math.random() * 2));
    playerGuess === 0 ? playerGuess = 'red' : playerGuess = 'black';

    let res = randonCardChooseAndReturnIfPlayerGuessed(playerGuess);
    res ? step++ : lives--;

    if (lives === 0 || step === 5) {
      const gameOver = document.querySelector('.game-over');
      gameOver.classList.remove('hidden');

      if (lives === 0) {
        const youLose = document.querySelector('.you-lose');
        youLose.classList.remove('hidden');
        break
      } else {
        const youWon = document.querySelector('.you-won');
        youWon.classList.remove('hidden');
      }

    }
      
    


  }
}

function autoPlayMeterDisplay() {
  console.info('autoplay listener');
  const redBtn = document.querySelector('.red-btn');
  redBtn.classList.add('hidden');
  const redDisabled = document.querySelector('.red-disabled');
  redDisabled.classList.remove('hidden');

  const blackBtn = document.querySelector('.black-btn');
  blackBtn.classList.add('hidden');
  const blackDisabled = document.querySelector('.black-disabled');
  blackDisabled.classList.remove('hidden');

  autoPlayMode = true
  const autoPlay = document.querySelector('.auto-play');
  autoPlay.removeEventListener('click' , autoPlayMeterDisplay);
  setTimeout(() => {
    const step2 = document.querySelector('.step2');
    step2.classList.remove('hidden');
    setTimeout(() => {
      const step3 = document.querySelector('.step3');
      step3.classList.remove('hidden');
      setTimeout(() => {
        const step4 = document.querySelector('.step4');
        step4.classList.remove('hidden');
        setTimeout(() => {
          const step5 = document.querySelector('.step5');
          step5.classList.remove('hidden');
          autoPlayGame()
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);


}

function randonCardChooseAndReturnIfPlayerGuessed(playerGuess) {
  let res = '';
  const cardNum = Math.floor(Math.random() * (cardsPack.length));
  if (cardNum < 6) {
    if (playerGuess === 'black') {
      res = true;
    } else {
      res = false;
    }
  } else {
    // (card > =6)
    if (playerGuess === 'red') {
      res = true;
    } else {
      res = false;
    }
  }

  switch (cardNum) {
    case 0: {
      const card0 = document.querySelector('.card0');
      card0.classList.remove('hidden');
      card0.classList.add('card-moved');
      card0.style.zIndex = cardZindexCounter;
      break
    }
    case 1: {
      const card1 = document.querySelector('.card1');
      card1.classList.remove('hidden');
      card1.classList.add('card-moved');
      card1.style.zIndex = cardZindexCounter;


      break
    }
    case 2: {
      const card2 = document.querySelector('.card2');
      card2.classList.remove('hidden');
      card2.classList.add('card-moved');
      card2.style.zIndex = cardZindexCounter;


      break
    }
    case 3: {
      const card3 = document.querySelector('.card3');
      card3.classList.remove('hidden');
      card3.classList.add('card-moved');
      card3.style.zIndex = cardZindexCounter;
      break
    }
    case 4: {
      const card4 = document.querySelector('.card4');
      card4.classList.remove('hidden');
      card4.classList.add('card-moved');
      card4.style.zIndex = cardZindexCounter;
      break
    }
    case 5: {
      const card5 = document.querySelector('.card5');
      card5.classList.remove('hidden');
      card5.classList.add('card-moved');
      card5.style.zIndex = cardZindexCounter;
      break
    }
    case 6: {
      const card6 = document.querySelector('.card6');
      card6.classList.remove('hidden');
      card6.classList.add('card-moved');
      card6.style.zIndex = cardZindexCounter;
      break
    }
    case 7: {
      const card7 = document.querySelector('.card7');
      card7.classList.remove('hidden');
      card7.classList.add('card-moved');
      card7.style.zIndex = cardZindexCounter;
      break
    }
    case 8: {
      const card8 = document.querySelector('.card8');
      card8.classList.remove('hidden');
      card8.classList.add('card-moved');
      card8.style.zIndex = cardZindexCounter;
      break
    }
    case 9: {
      const card9 = document.querySelector('.card9');
      card9.classList.remove('hidden');
      card9.classList.add('card-moved');
      card9.style.zIndex = cardZindexCounter;
      break
    }
    case 10: {
      const card10 = document.querySelector('.card10');
      card10.classList.remove('hidden');
      card10.classList.add('card-moved');
      card10.style.zIndex = cardZindexCounter;
      break
    }
    case 11: {
      const card11 = document.querySelector('.card11');
      card11.classList.remove('hidden');
      card11.classList.add('card-moved');
      card11.style.zIndex = cardZindexCounter;
      break
    }

  }
  cardsPack.splice(cardNum, 1);
  cardZindexCounter++;
  return res


}

function initAfterRed() {
  const redBtn = document.querySelector('.red-btn');
  redBtn.classList.remove('hidden');
  const redSelected = document.querySelector('.red-selected');
  redSelected.classList.add('hidden');
  const blackBtn = document.querySelector('.black-btn');
  blackBtn.classList.remove('hidden');
  const blackDisabled = document.querySelector('.black-disabled');
  blackDisabled.classList.add('hidden');
}


function initAfterBlack() {
  const blackBtn = document.querySelector('.black-btn');
  blackBtn.classList.remove('hidden');
  const blackSelected = document.querySelector('.black-selected');
  blackSelected.classList.add('hidden');
  const redBtn = document.querySelector('.red-btn');
  redBtn.classList.remove('hidden');
  const redDisabled = document.querySelector('.red-disabled');
  redDisabled.classList.add('hidden');
}

function updateMeterAndLives(step, lives) {
  switch (step) {
    case 2: {
      const step2 = document.querySelector('.step2');
      step2.classList.remove('hidden');
      break
    }
    case 3: {
      const step2 = document.querySelector('.step2');
      step2.classList.add('hidden');
      const step3 = document.querySelector('.step3');
      step3.classList.remove('hidden');
      break
    }
    case 4: {
      const step3 = document.querySelector('.step3');
      step3.classList.add('hidden');
      const step4 = document.querySelector('.step4');
      step4.classList.remove('hidden');
      break
    }
    case 5: {
      const step4 = document.querySelector('.step4');
      step4.classList.add('hidden');
      const step5 = document.querySelector('.step5');
      step5.classList.remove('hidden');
      break
    }
  }
  switch (lives) {
    case 1: {
      const lives2 = document.querySelector('.lives2');
      lives2.classList.add('hidden');
      const lives1 = document.querySelector('.lives1');
      lives1.classList.remove('hidden');
      break
    }
    case 0: {
      const lives1 = document.querySelector('.lives1');
      lives1.classList.add('hidden');
      const lives0 = document.querySelector('.lives0');
      lives0.classList.remove('hidden');
      break
    }
  }
}
function XorVCards(res) {
  if (res) {
    const cardV = document.querySelector('.card-v');
    cardV.classList.remove('hidden');
    setTimeout(function () {
      cardV.classList.add('hidden');
    }, 1300);
    step++;
  } else {
    const cardX = document.querySelector('.card-x');
    cardX.classList.remove('hidden');
    setTimeout(function () {
      cardX.classList.add('hidden');
    }, 1300);
    lives--;
  }
}

function checkIfWinOrLose() {
  if (lives === 0 || step === 5) {
    const gameOver = document.querySelector('.game-over');
    gameOver.classList.remove('hidden');

    const redBtn = document.querySelector('.red-btn');
    redBtn.classList.add('hidden');
    const blackBtn = document.querySelector('.black-btn');
    blackBtn.classList.add('hidden');
    const blackDisabled = document.querySelector('.black-disabled');
    blackDisabled.classList.remove('hidden');
    const redDisabled = document.querySelector('.red-disabled');
    redDisabled.classList.remove('hidden');

    if (lives === 0) {
      const youLose = document.querySelector('.you-lose');
      youLose.classList.remove('hidden');
    } else {
      const youWon = document.querySelector('.you-won');
      youWon.classList.remove('hidden');
    }

  }

}

function redBtnClickHandler() {

  const redBtn = document.querySelector('.red-btn');
  redBtn.classList.add('hidden');
  const redSelected = document.querySelector('.red-selected');
  redSelected.classList.remove('hidden');
  const blackBtn = document.querySelector('.black-btn');
  blackBtn.classList.add('hidden');
  const blackDisabled = document.querySelector('.black-disabled');
  blackDisabled.classList.remove('hidden');

  const res = randonCardChooseAndReturnIfPlayerGuessed('red');

  XorVCards(res);
  console.info('lives: ', lives);
  console.info('steps:', step);

  updateMeterAndLives(step, lives);
  initAfterRed();
  checkIfWinOrLose()
}

function blackBtnClickHandler() {
  const blackBtn = document.querySelector('.black-btn');
  blackBtn.classList.add('hidden');
  const blackSelected = document.querySelector('.black-selected');
  blackSelected.classList.remove('hidden');
  const redBtn = document.querySelector('.red-btn');
  redBtn.classList.add('hidden');
  const redDisabled = document.querySelector('.red-disabled');
  redDisabled.classList.remove('hidden');
  const res = randonCardChooseAndReturnIfPlayerGuessed('black');
  console.info('result:', res);
  XorVCards(res);
  console.info('lives: ', lives);
  console.info('steps:', step);

  updateMeterAndLives(step, lives);
  initAfterBlack();
  checkIfWinOrLose()
}

function initForNewGame() {
  if (autoPlayMode) {
    const autoPlay = document.querySelector('.auto-play');
    autoPlay.addEventListener('click', autoPlayMeterDisplay);
  }
  const elementsToHide = document.querySelectorAll('.init-hidden');
  elementsToHide.forEach((elem) => {
    elem.classList.add('hidden');
    autoPlayMode = false;
  });

  step = 1;
  lives = 2;
  cardsPack = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const redBtn = document.querySelector('.red-btn');
  redBtn.classList.remove('hidden');
  const blackBtn = document.querySelector('.black-btn');
  blackBtn.classList.remove('hidden');
  const blackDisabled = document.querySelector('.black-disabled');
  blackDisabled.classList.add('hidden');
  const redDisabled = document.querySelector('.red-disabled');
  redDisabled.classList.add('hidden');

  const lives2 = document.querySelector('.lives2');
  lives2.classList.remove('hidden');

}

function initGame() {
  const elementsToHide = document.querySelectorAll('.init-hidden');
  elementsToHide.forEach((elem) => {
    elem.classList.add('hidden');
  });

  window.onload = function () {
    document.querySelector('.loading-bg').style.display = "none"
  };

  const redBtn = document.querySelector('.red-btn');
  redBtn.addEventListener('click', redBtnClickHandler);

  const blackBtn = document.querySelector('.black-btn');
  blackBtn.addEventListener('click', blackBtnClickHandler);

  const playAgainBtn = document.querySelector('.play-again-btn');
  playAgainBtn.addEventListener('click', initForNewGame);


  const autoPlay = document.querySelector('.auto-play');
  autoPlay.addEventListener('click', autoPlayMeterDisplay)
}

initGame();