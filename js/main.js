//tells the console that the program is running :)
console.log("Up and running!");
//cards object array
var cards = [{
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
//Global variables
var cardsInPlay = [];
//this variable holds the score count
var scoreCount = 0;
//this function checks for a ma0h and adds points to the above scoreCount variiable
var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    scoreCount += 10;
    document.getElementById('alertMessage').innerHTML = "It's a match!!";
    document.getElementById('score').innerHTML = scoreCount;
  }
  else {
    document.getElementById('alertMessage').innerHTML = "Sorry try again";
  }
};
//this function enables the cards to be flipped
//hides instructions upon click for a better view of score
//displays score count when card game has begun upon click
var flipCard = function() {
  var cardId = this.getAttribute('data-id');
  hideInfo();
  document.getElementById('info').innerHTML = "Bye bye large gap! :)";
  document.getElementById('scoreTitle').innerHTML = "Score";
  document.getElementById('score').innerHTML = scoreCount;
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);
//if 2 cards are flipped then call checkForMatch() function
  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
  //if 4 cards are flipped then call checkForMatch() function
  if (cardsInPlay.length === 4) {
    checkForMatch();
    document.getElementById('alertMessage').innerHTML = "Game Over";
    document.getElementById('finalScoreTitle').innerHTML = "You Scored";
    document.getElementById('finalScore').innerHTML = scoreCount;
  }
};
//this function hides the instructions for optimized gameplay
var hideInfo = function() {
document.getElementById("info").style.visibility = "hidden";
};
//this function creates creates the initial board game state
var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', '../images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
};
//calls the createBoard() above to create initial state
createBoard();
//this function removes all child nodes from the game-board element
//using a while loop, if the parent node game-board has children remove a children
//added reset methods upon mouse up event to reset game state for new match
var resetCards = function(){
var removeCards = document.getElementById("game-board");
   while (removeCards.hasChildNodes()) {
      removeCards.removeChild(removeCards.firstChild);
   }
   document.getElementById("reset").addEventListener("mouseup", createBoard());
   document.getElementById("reset").addEventListener("mouseup", cardsInPlay = []);
   //resetts alert mnessage to empty and score count to 0 
   document.getElementById('alertMessage').innerHTML = " ";
   document.getElementById('finalScoreTitle').innerHTML = " ";
   document.getElementById('finalScore').innerHTML = " ";
   scoreCount = 0;
   document.getElementById('score').innerHTML = scoreCount;
};
