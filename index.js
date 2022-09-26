
function getDrinks() {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
  .then(function (response) {
    return response.json();
  }).then(function (data) {
    //Pull out the Array to display results, because I want to change the object to an array 
    let drinkArr = data.drinks
    console.log(data)

    //Iterate over each item in the array to display results of user search
    drinkArr.forEach((drink => {

      //Create, add class, add text to div so that later I can use img and style 
      const drinkDiv = document.createElement('div')
      drinkDiv.className = "card"
      drinkDiv.textContent=drink.strDrink

      //Create img for background
      const drinkImg = document.createElement('img')
      drinkImg.setAttribute("src", drink.strDrinkThumb)
      drinkDiv.append(drinkImg)
      
      //Set variable for searchResults ID
      const searchResults = document.getElementById('searchResults');

      //Append drinkDiv to searchResults
      searchResults.parentNode.insertBefore(drinkDiv, searchResults.nextSibling)

    }))
  })
};
//now invoke the above function
// getDrinks()

  const inputForm = document.querySelector('myForm');

  const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
const search = () => {
  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const userInput = document.querySelector('input#searchByID');

    console.log(userInput.value);

    fetch(BASE_URL)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
  });

}
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

