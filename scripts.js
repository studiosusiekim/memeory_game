const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;


function flipCard() {
    this.classList.toggle('flip');
    if(!hasFlippedCard) {
        // first turn
        hasFlippedCard = true;
        firstCard = this;
        } else {
        // second turn 
        hasFlippedCard = false;
        secondCard = this;
    
        //do cards match?
            if(firstCard.dataset.framework === secondCard.dataset.framework) {
            // matching?
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
            } else {
            // not matching!
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
            }, 1500);
            }   
        }
    }   

cards.forEach(card => card.addEventListener('click', flipCard));
