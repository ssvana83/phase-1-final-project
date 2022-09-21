// document.querySelector("body").appendChild(h2);
fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    return console.log(data.drinks[0].strIngredient1);
    // Use the data from the response to do DOM manipulation
  });

  function displaySearchResults(data) {
    let searchResultId = document.getElementById("searchResults");
    searchResultId.innerHTML('<div>data.drinks[0].strIngredient1</div>');
  }

  function getIngredients() {
    fetch()
    .then(response => response.json())
  }
  const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
  
  fetch(BASE_URL)
  .then(function(res) {
    return res.json()
  })
  .then((ingArray) => ingArray.forEach((ingObj) => renderIngredients(ingObj)))

  function renderToy(ingObj) {
    const ingDiv = document.createElement('div')
    ingDiv.className = "card"
  
    const ingName = document.createElement('h2')
    ingName.innerText = ingObj.ingName
    }