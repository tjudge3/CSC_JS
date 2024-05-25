/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Tom Judge
      Date: 5/6/2024
      Updated: 5/13/2024  

      Filename: project02-03.js
 */
      document.getElementById("square").addEventListener("mouseout", mouseOut);
      document.getElementById("triangle").addEventListener("mouseout", mouseOut);
      document.getElementById("circle").addEventListener("mouseout", mouseOut);
/* 
  I wanted to add a creative element, but didn't know how much I could modify the initial assignment. 
  Which precluded things like making the shape double in size or changing the color.
  So I figured, the h1 was outside the scope of the assignment which let me play around with it. 
  
  In this case reversing the title when a shape is hovered over, and then putting it back on the mouseOut
*/
      function reverseText(text) {
            return text.split("").reverse().join("");
      }      

      function mouseOver(shape) {
          document.getElementById("feedback").textContent = "This is a " + shape;

          var title = document.getElementById("title");
          title.textContent = reverseText(title.textContent);
      }
      
      document.getElementById("square").addEventListener("mouseover", function() {
          mouseOver("square");
      });
      
      document.getElementById("triangle").addEventListener("mouseover", function() {
          mouseOver("triangle");
      });
      
      document.getElementById("circle").addEventListener("mouseover", function() {
          mouseOver("circle");
      });
      
      function mouseOut() {
          document.getElementById("feedback").innerHTML = "";

          var title = document.getElementById("title");
          title.textContent = "Hands-on Project 2-3";          
      }
