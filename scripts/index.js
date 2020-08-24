'use strict'

// const refreshQuote = document.getElementById('clickMe');


// refreshQuote.addEventListener('click', function (event) {
//   event.preventDefault();

//   const newParagraph = document.createElement("p");
//   newParagraph.innerHTML = additionalText;
//   bodyContainer.appendChild(newParagraph);
// });


const chuckSays = document.getElementById('chuckSays');

function get() {
  // Step 1: Fetch the data from API
  return fetch('https://api.chucknorris.io/jokes/random?category=dev')
    // Step 2: Return the json() method from the Response
    .then(function(response) {
      return response.json()
    })
    // Step 3: Return the data from the response.json() method
    .then(function(data) {
      return data;
    });
}

// IIFE Function: Runs immediately
(function(){
  get().then(function(fetchResponse){
    chuckSays.innerHTML = fetchResponse.value;
  })
})();