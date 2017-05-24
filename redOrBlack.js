let cardsPack =[0,1,2,3,4,5,6,7,8,9,10,11];
let lives = 2;
let step = 1;
let cardZindexCounter= 10;


function randonCardChooseAndReturnIfPlayerGuessed(playerGuess) {
  let res = '';
  const cardNum = Math.floor(Math.random() * (cardsPack.length));
  if (cardNum < 6) {
    if (playerGuess === 'black') {
      res = true;
    }else {
      res = false;
    }
  } else {
    // (card > =6)
    if (playerGuess === 'red') {
      res = true;
    }else {
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
  cardsPack.splice(cardNum,1);
  console.info(cardsPack);
  cardZindexCounter++;
  return res




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
  console.info(blackDisabled);
  const res = randonCardChooseAndReturnIfPlayerGuessed('red');
  console.info('result:' ,res);

  

}

function initGame() {
  const elementsToHide = document.querySelectorAll('.init-hidden');
  elementsToHide.forEach((elem) => {
    elem.classList.add('hidden');
  });

  const redBtn = document.querySelector('.red-btn');
  redBtn.addEventListener('click', redBtnClickHandler);
  
  const blackBtn = document.querySelector('.black-btn');

}

initGame();