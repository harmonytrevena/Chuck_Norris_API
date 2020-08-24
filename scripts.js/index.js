'use strict'

const refreshQuote = document.getElementById('clickMe');


refreshQuote.addEventListener('click', function (event) {
  event.preventDefault();

  const newParagraph = document.createElement("p");
  newParagraph.innerHTML = additionalText;
  bodyContainer.appendChild(newParagraph);
});
