"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-04

      Project to turn a selection list into a selection of hypertext links
      Author: myName(Tom)
      Date: theDate
      Updated: theDateLast   

      Filename: project06-04.js
*/

/* Since the assignment itself is done and graded and this was just for validation checking, I changed all the lets to constants. 
const make = document.querySelector("#make");

I also removed all the comments that came with the assignment and just left in mine so it's easy to follow

*/

/*Changed the given assignment from getElementById to querySelector */

const make = document.querySelector("#make");
const model = document.querySelector("#model");
const trim = document.querySelector("#trim");


const makeOptions = document.querySelectorAll("select#make option");
const modelOptions = document.querySelectorAll("select#model option");
const trimOptions = document.querySelectorAll("select#trim option");


const makes = makeOptions.length;
const models = modelOptions.length;
const trims = trimOptions.length;


const selectVehicle = document.querySelector("#selectVehicle");


const vehicle = document.querySelector("#vehicle");



make.onchange = function() {
   const makeIndex = make.selectedIndex;
   const makeCategory = make.options[makeIndex].text;

   //This is the first part of the validation portion. Essentially just doing a reset after a full selection. 
   model.selectedIndex = 0;
   trim.selectedIndex = 0;
   showAll(trim);
   
   if (makeIndex === 0) {
      showAll(model);
   } else {
      filterSelect(model, makeCategory);
   }  
}


model.onchange = function() {
   const modelIndex = model.selectedIndex;
   const modelCategory = model.options[modelIndex].text;

   //Second part of validation/error checking. Doing a reset.
   trim.selectedIndex = 0;
   
   if (modelIndex === 0) {
      showAll(trim);
   } else {
      filterSelect(trim, modelCategory);
   }     
}

function showAll(selectList) {
   const options = selectList.options;
   const optionLength = options.length; /*I'm not really sure it makes sense to define optionLength once just to be used in the for loop, 
					when I could just use the options.length in the code. But it is what the assignment asked for*/
   for (let i = 0; i < optionLength; i++) {
     options[i].style.display = "block";
   }
 }


 function filterSelect(selectList, category) {
   const options = selectList.options;
   const optionLength = options.length;
   
   for (let i = 0; i < optionLength; i++) {
       if (options[i].className === category || options[i].className === "Select Model" || options[i].className === "Select Trim") {
           options[i].style.display = "block";
       } else {
           options[i].style.display = "none";
       }
   }
}

selectVehicle.onclick = function() {
   const makeText = make.options[make.selectedIndex].text;
   const modelText = model.options[model.selectedIndex].text;
   const trimText = trim.options[trim.selectedIndex].text;
   /*below is the final part of the error checking/validation code. 
   If all three aren't selected then it gives an "error", else it prints the text. */
   if (make.selectedIndex === 0 || model.selectedIndex === 0 || trim.selectedIndex === 0) {
      vehicle.textContent = "Please select a make, model, and trim. All categories must be selected"; 
  } else {
      vehicle.textContent = `${makeText} ${modelText} ${trimText}`;
  }

}
 
