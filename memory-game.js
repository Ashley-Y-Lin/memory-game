"use strict";

/** Memory game: find matching pairs of cards and flip both of them. */

const FOUND_MATCH_WAIT_MSECS = 1000;
const COLORS = [
  "red", "blue", "green", "orange", "purple",
  "red", "blue", "green", "orange", "purple",
];

const colors = shuffle(COLORS);

createCards(colors);


/** Shuffle array items in-place and return shuffled array. */

function shuffle(items) {
  // This algorithm does a "perfect shuffle", where there won't be any
  // statistical bias in the shuffle (many naive attempts to shuffle end up not
  // be a fair shuffle). This is called the Fisher-Yates shuffle algorithm; if
  // you're interested, you can learn about it, but it's not important.

  for (let i = items.length - 1; i > 0; i--) {
    // generate a random index between 0 and i
    let j = Math.floor(Math.random() * i);
    // swap item at i <-> item at j
    [items[i], items[j]] = [items[j], items[i]];
  }

  return items;
}

/** Create card for every color in colors (each will appear twice)
 *
 * Each div DOM element will have:
 * - a class with the value of the color
 * - a click event listener for each card to handleCardClick
 */

function createCards(colors) {
  for (let color of colors) {
    // missing code here ...
    var $colorCard = $("<div>").addClass(color)
    $colorCard.addClass('card')

    $colorCard.on("click", function(event){
      console.log("a card was clicked")
      flipCard(event.target)
    })

    $("#game").append($colorCard)
  }
}

/** Flip a card face-up. */

let cardsClicked = 0
let flippedCards = []

function flipCard(card) {
  if (cardsClicked == 2){
    return
  }

  if ((flippedCards.length == 1) && (card === flippedCards[0])){
    return
  }
  // ... you need to write this ...
  let color = card.classList[0]
  card.style.backgroundColor = color;
  cardsClicked += 1
  flippedCards.push(card)

  if (cardsClicked == 2){
    compareCards(flippedCards)
  }
}

function compareCards(cardsArr){
  if (cardsArr[0].classList[0] == cardsArr[1].classList[0]){
    cardsClicked = 0
    flippedCards = []
  }else{
    setTimeout(function(){
      console.log("delay by 1 sec")
      unFlipCard(cardsArr[0])
      unFlipCard(cardsArr[1])
      cardsClicked = 0
      flippedCards = []
    }, 1000)
  }
}

/** Flip a card face-down. */

function unFlipCard(card) {
  // ... you need to write this ...
  card.style.backgroundColor = "";
}

/** Handle clicking on a card: this could be first-card or second-card. */

function handleCardClick(evt) {
  // ... you need to write this ...
}
