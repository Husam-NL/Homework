'use strict';
/*------------------------------------------------------------------------------
1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/

document.body.style.fontFamily = 'Arial,sans-serif';

const info1 = document.getElementById('nickname');
info1.textContent = 'Husam';
const info2 = document.getElementById('fav-food');
info2.textContent = 'Pizza ';
const info3 = document.getElementById('hometown');
info3.textContent = 'Lattakia';

// looping and add className
const listItem = document.getElementsByTagName('li');
for (let i = 0; i < listItem.length; i++) {
  listItem[i].className += 'list-item';
}
