"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-02

      Project to deal cards from a shuffled poker deck
      Author: My Name (Tom)
      Date: Creation Date
      Last Updated: Last Updated Date     

      Filename: project07-02.js
*/

//There is actually a typo in the given code below, all the Queens of the various suits say "Queeen" instead of "Queen" (three of the letter "e" instead of two)
let deckStr = `Ace of Hearts, King of Hearts, Queeen of Hearts, Jack of Hearts,
               10 of Hearts, 9 of Hearts, 8 of Hearts, 7 of Hearts, 6 of Hearts,
               5 of Hearts, 4 of Hearts, 3 of Hearts, 2 of Hearts,
               Ace of Spades, King of Spades, Queeen of Spades, Jack of Spades,
               10 of Spades, 9 of Spades, 8 of Spades, 7 of Spades, 6 of Spades,
               5 of Spades, 4 of Spades, 3 of Spades, 2 of Spades,
               Ace of Diamonds, King of Diamonds, Queeen of Diamonds, Jack of Diamonds,
               10 of Diamonds, 9 of Diamonds, 8 of Diamonds, 7 of Diamonds, 6 of Diamonds,
               5 of Diamonds, 4 of Diamonds, 3 of Diamonds, 2 of Diamonds, 
               Ace of Clubs, King of Clubs, Queeen of Clubs, Jack of Clubs,
               10 of Clubs, 9 of Clubs, 8 of Clubs, 7 of Clubs, 6 of Clubs,
               5 of Clubs, 4 of Clubs, 3 of Clubs, 2 of Clubs`;

let cards = document.querySelectorAll("div#hand span"); 
let cardsLeft = document.querySelector("#cardsLeft"); //Changed all the getElementsByID to QuerySelector
let deck = [];

/*Step four in the assignment directions says to put both newDeck() and shuffle() inside of the onclick. 
I personally believe this is a mistake. And I don't mean they made a mistake, just that it doesn't make the code as modular and reusable as it should be.
If someone was going to extend the code or add other features, having those functions within the onclick would make it limiting*/


function newDeck() {
      deck = deckStr.split(/,/g); //the regex is important here
      deck.sort(shuffle);
}

function shuffle() { 
      return 0.5 - Math.random();
   }   



document.querySelector("#deal").onclick = function() {   
   
      if (deck.length === 0) { // Error Checking - is the deck empty? If so, new deck! 
            newDeck();        //Step six said to just loop the deck, and keep dealing, but I thought the way I did it was better.
         }
   
   for (let i = 0; i < cards.length; i++) {
      if (deck.length === 0) { // After the last assignment I made sure there was some error checking
            alert("The deck has run out of cards!"); 
            break;
      }
      cards[i].textContent = deck.pop();
      cardsLeft.textContent = deck.length;
   }
}