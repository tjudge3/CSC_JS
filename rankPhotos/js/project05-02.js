"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Tom Judge
      Date: 5/24/2024   

      Filename: project05-02.js
*/

let images = document.querySelectorAll("img");
let photoBucket = document.querySelector("#photo_bucket");
let photoList = document.querySelector("#photo_list");

for (let i = 0; i < images.length; i++){
      images[i].onclick = function(){
            if (this.closest("#photo_bucket")){
                  let newItem = document.createElement("li");
                  photoList.appendChild(newItem);
                  newItem.appendChild(this);
            }
            else {
                  let oldItem = this.closest("li");
                  photoBucket.appendChild(this);
                  if (oldItem){
                        oldItem.parentElement.removeChild(oldItem);
                  }
            }
      };
}