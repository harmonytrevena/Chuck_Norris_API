'use strict'

const chuckSays = document.getElementById('chuckSays');
const refreshQuote = document.getElementById('refreshQuote');
const submitFormButton = document.getElementById('submitForm');
let category = 'dev'

const getQuote = () => {
  const url = `https://api.chucknorris.io/jokes/random?category=${category}`;

  get(url).then(function (fetchResponse) {
      chuckSays.innerHTML = fetchResponse.value;
  });
}

const getCategories = () => {
  const url = `https://api.chucknorris.io/jokes/categories`;
  const dropdownMenu = document.getElementById('categoryInput');

  get(url).then(function (categoryArray) {
    categoryArray
      .filter((category) => category !== 'explicit' && category !== 'political' && category !== 'religion')
      .map(function (category){
        const categoryOption = document.createElement('option');
        categoryOption.value = category;
        categoryOption.text = category;
        dropdownMenu.append(categoryOption);
    });
  });
}

refreshQuote.addEventListener('click', function (event) {
  event.preventDefault();
  getQuote();
});


const getChuckQuotes = document.getElementById('getChuckQuotes');
getChuckQuotes.addEventListener('submit', e => {
  e.preventDefault();
  const userInput = document.getElementById('categoryInput');
  category = userInput.value;
  getQuote();
});


// Runs the functions above:
(function () {
  getCategories();
  getQuote()
})();
