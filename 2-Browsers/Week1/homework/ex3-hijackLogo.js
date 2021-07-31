'use strict';
/*------------------------------------------------------------------------------
1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/
function hijackGoogleLogo() {
  const logoDiv = document.getElementById('hplogo');
  const googleImage = document.createElement('img');

  googleImage.src = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
  googleImage.srcset = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
  logoDiv.innerHTML = '';
  logoDiv.appendChild(googleImage);
}

hijackGoogleLogo();
