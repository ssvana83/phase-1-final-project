//Show image at page open at all times
// var img = document.createElement("img");
// img.src = "";
// var src = document.getElementById("header");
// src.appendChild(img);


//search API endpoint
  const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/"
  
//search function. takes in "event" and then preventDefault to avoid refreshing the page
  const search = (event) => {
    event.preventDefault();

//userInput is a variable in the search function that says to look for any html tag that says
//input, then we look further to id "searchForDrinks". "Look at the box"
    const userInput = document.querySelector('input#searchForDrinks');
//using fetch, we go to the API request by taking the base URL and add to it
//the value that is entered by the user in the search box when they hit submit. 
//Then the data (what was searched for) can be shown
    fetch(BASE_URL + "search.php?s=" + userInput.value)
    .then(response => response.json())
    .then(data => {

    const searchResults = document.getElementById('searchResults');

    //Clear previous results
    // searchResults.remove()

    //Change object to an array, so I can iterate through to display results using data.drinks to go inside array
    let drinkArr = data.drinks
    console.log(data)
    
    //Iterate over each item in the array to display results of user search.
    //forEach method..for each drink in drink array, do the rest of this function
    drinkArr.forEach((drink => {
      console.log(drink.strVideo)
      
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

      // //create a tag for href***need to figure out how to have a tag populate
      //the link i want 
      // const a = document.createElement("a");
      // a.href = '${drink.strVideo}';
      // a.innerHTML = "Click to watch how to video"
      // drinkDiv.append(a)

      // let to_add = document.getElementById(drink.strVideo)
      // drinkVideoLink.innerHTML = drink.strVideo
      // drinkDiv.append(drinkVideoLink)

      

      // clickable to view recipe****
      const drinkRecipeInstructions = document.createElement('button')
      drinkRecipeInstructions.innerHTML = drink.strInstructions
      drinkDiv.append(drinkRecipeInstructions)
      drinkRecipeInstructions.setAttribute("onClick", drink.strInstrcutions)


      //To make a click button**
      // const drinkLikes = document.createElement('p')
      // drinkLikes.innerText = "Like: " + drinkObj.drinkLikes

      // const Likebtn = document.createElement('button')
      // Likebtn.innerText = ''
      // Likebtn.addEventListener('click', () => {
      //   ++drinkObj.likes
      //   drinkLikes.innerText = `Like: ${drinkObj, likes}`
      // })
      // drinkDiv.append(likeBtn)
      //OR****
      // var clickMeButton = document.createElement('button');
      // clickMeButton.id = 'myButton';
      // clickMeButton.innerHTML = 'Click Me!';
      // clickMeButton.style.background = '#3dfe3a';
      // document.body.appendChild(clickMeButton);

      // Defining text characters for the empty and full hearts for you to use later.
// const EMPTY_HEART = '♡'
// const FULL_HEART = '♥'
// FULL_HEART.class = `.activated-heart`

// document.addEventListener("DOMContentLoaded", () => {
// const hearts = document.querySelectorAll("span.like-glyph")

// hearts.forEach(hearts => hearts.addEventListener("click", likeCallback))

// function likeCallback(hearts) {
//   console.log(hearts.target)
//   mimicServerCall()
//   .then(() => {
//     if (hearts.target.innerText === EMPTY_HEART) {
//       hearts.target.innerText = FULL_HEART
//     }
//     else if (hearts.target.innerText === FULL_HEART) {
//       hearts.target.innerText = EMPTY_HEART
//     }
//   })
//   .catch(() => {
//     const erMsg = document.getElementById("modal")
//     console.log(erMsg)
//     erMsg.className = "show"

//     setTimeout(() => {
//       const erMsg = document.getElementById("modal")
//       console.log(erMsg)
//       erMsg.className = "hidden"}, 3000)}

//   )}
//   })

      
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

