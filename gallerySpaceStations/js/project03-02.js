/*    JavaScript 7th Edition
      Chapter 3
      Project 03-02

      Application to generate a slide gallery
      Author: Tom Judge
      Date: 5/14/2024

      Filename: project03-02.js
*/
/*
Because the assignment seemed pretty specific I didn't want to mess around with it too much. However, I did do some stuff. 

The hover effect on the pictures is actually css, instead of JS. (div#gallery figure img:hover{transform:scale(1.8);})

1) The Assignment said "5. After the for loop, change the inner HTML of the document element by the id "gallery" 
to the value of the htmlCode". Which made it sound like it wanted getElementbByID. 

However, that seem like a good place to use querySelector

It's not until Chapter 7 in the book that template literals are covered. (page 297 in the text and Slide 51 on week 7)
So I didn't use them because I didn't know if we could.  But it would have made the 'htmlCode' easier. 
As far as concatenation goes though, I guess it makes sense assignment wise to teach the + operator before template literals

*/

let captions = new Array(14);
captions=["International Space Station fourth expansion [2009]","Assembling the International Space Station [1998]","The Atlantis docks with the ISS [2001]",
"The Atlantis approaches the ISS [2000]","The Atlantis approaches the ISS [2000]", "International Space Station over Earth [2002]",
"The International Space Station first expansion [2002]","Hurricane Ivan from the ISS [2008]","The Soyuz spacecraft approaches the ISS [2005]",
"The International Space Station from above [2006]","Maneuvering in space with the Canadarm2 [2006]",
"The International Space Station second expansion [2006]","The International Space Station third expansion [2007]","The ISS over the Ionian Sea [2007]"];

let htmlCode = '';

for (let i = 0;  i < captions.length; i++) {
      htmlCode +=
      "<figure>" + '<img alt="' + captions[i] + '"src="images/slide' + i + '.jpg" />' +
      "<figcaption>" + captions[i] + "</figcaption></figure>";
}

document.querySelector("#gallery").innerHTML = htmlCode;