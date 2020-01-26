const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


function flipCard() {
    if(lockBoard) return; // if it's not a match the board is locked
    this.classList.toggle('flip');
    if(!hasFlippedCard) {
        // first turn
        hasFlippedCard = true;
        firstCard = this;
        } else {
        // second turn 
        hasFlippedCard = false;
        secondCard = this;

        checkForMatch();
    }
}
    
//         //do cards match?
//             if(firstCard.dataset.framework === secondCard.dataset.framework) {
//             // matching?
//             firstCard.removeEventListener('click', flipCard);
//             secondCard.removeEventListener('click', flipCard);
//             } else {
//             // not matching!
//             setTimeout(() => {
//                 firstCard.classList.remove('flip');
//                 secondCard.classList.remove('flip');
//             }, 1500);
//             }   
//         }
//     }   



//do cards match?
function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework 

    isMatch ? disableCards() : unflipCards();

    // if(firstCard.dataset.framework === secondCard.dataset.framework) {
    //     disableCards();
    // } else {
    //     unflipCards();
    // }   
}
    
// matching?
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

// not matching!
function unflipCards() {
    lockBoard = true;
  
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
  
      resetBoard();
    }, 1500);
  }
  
function resetBoard() {
[hasFlippedCard, lockBoard] = [false, false];
[firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
    })();
    
    cards.forEach(card => card.addEventListener('click', flipCard));
