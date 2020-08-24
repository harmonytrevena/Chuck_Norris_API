'use strict'

function get(url) {
    // Step 1: Fetch the data from API
    return fetch(url)
      // Step 2: Return the json() method from the Response
      .then(function(response) {
        return response.json()
      })
      // Step 3: Return the data from the response.json() method
      .then(function(data) {
        return data;
      });
  }