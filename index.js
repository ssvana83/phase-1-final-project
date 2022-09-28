//search API endpoint
  const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
  
//search function. takes in "event" and then preventDefault to avoid refreshing the page
  const search = (event) => {
    event.preventDefault();
//userInput is a variable inside search function that is saying to look for any html tag that says
//input, then we look further to id "searchForDrinks". "Look at the box"
    const userInput = document.querySelector('input#searchForDrinks');
//using fetch we can actually go to the API request by taking the base URL and adds to it
//the value that is entered by the user in the search box when they hit submit. 
//Then the data (what was searched for) can be shown
    fetch(BASE_URL + userInput.value)
    .then(response => response.json())
    .then(data => {

    const searchResults = document.getElementById('searchResults');

    //Clear previous results
    // searchResults.remove()

    //The array exixts inside the object. Pull out the Array to display results, because I want to change the object to an array 
    //adding the .drinks (data.drinks) then takes me inside of the array of drink data
    let drinkArr = data.drinks
    console.log(data)

    //Iterate over each item in the array to display results of user search.
    //forEach method..for each drink in drink array, do the rest of this function
    drinkArr.forEach((drink => {

    //Create, add classname of card, add textcontent to div so that later I can use img and style 
      const drinkDiv = document.createElement('div')
      drinkDiv.className = "card"

      const drinkName = document.createElement('h1')
      drinkName.textContent=drink.strDrink
      drinkDiv.append(drinkName)

      //Create img for background
      const drinkImg = document.createElement('img')
      drinkImg.setAttribute("src", drink.strDrinkThumb)
      drinkDiv.append(drinkImg)

      
      //Append drinkDiv to searchResults
      searchResults.parentNode.insertBefore(drinkDiv, searchResults.nextSibling)

    })
    )
  })
};

document.addEventListener('submit', search);
  // const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
      //const searchTerm = 
      //this format will be copied but 
  // fetch(BASE_URL + searchTerm) 
  // .then(function(res) {
  //   return res.json()
  // })
  // .then((ingArray) => ingArray.forEach((ingObj) => renderIngredients(ingObj)))

  // function getIngredients(ingObj) {
  //   const ingDiv = document.createElement('div')
  //   ingDiv.className = "card"
  
  //   const ingName = document.createElement('h2')
  //   ingName.innerText = ingObj.ingName
  //   }



  // const drinksArray = []
  //   {
  //     id: 1,
  //     title: "",
  //     pictureUrl: 
  //   },
  //   {
  //     id: 2, 
  //     title:""
  //     pictureUrl:
  //   },

