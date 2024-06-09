'use strict';
/*    JavaScript 7th Edition
      Chapter 4
      Project 04-03

      Application to count the number of characters in a review comment
      Author: Tom Judge
      Date: 05/20/2024  

      Filename: project04-03.js
*/
//Changed the getElementsbyID to querySelector


// Maximum Length of Review
const MAX_REVIEW = 1000;
document.querySelector("#limit").innerHTML = MAX_REVIEW;

// Reference to elemets in the web page
let wordCountBox = document.querySelector("#countValue");
let warningBox = document.querySelector("#warningBox");


// Event listener for typing into the comment box
document.querySelector("#comment").addEventListener('keyup', updateCount);

// Function to update the count with each keyup event
function updateCount() {
   // Set the warning box to an empty text string 
   warningBox.innerHTML = "";
   
   // Count the number of characters in the comment box
   let commentText = document.querySelector("#comment").value;
   let charCount = countCharacters(commentText);

   try{
      if (charCount > MAX_REVIEW){
         throw 'You have exceeded the character count limit';
      }
   } catch(e){
      warningBox.innerHTML = e
   } finally {
      wordCountBox.innerHTML = charCount;
   }
   
}






//For something extra, clearning the box
function clearBox()
{  
document.querySelector('#comment').value = "";
alert("Text Box Cleared");
}

/*=================================================================*/
// Function to count the number of characters in a text string
function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
} 