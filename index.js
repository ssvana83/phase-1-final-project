const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/"
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
  
const search = (event) => {
    event.preventDefault();

    const userInput = document.querySelector('input#searchForDrinks');

    fetch(BASE_URL + "search.php?s=" + userInput.value)
    .then(response => response.json())
    .then(data => {

    const searchResults = document.getElementById('searchResults');

    let drinkArr = data.drinks
    console.log(data)
    
    
    drinkArr.forEach((drink => {
     
      const drinkDiv = document.createElement('div')
      drinkDiv.className = "card"

      const drinkName = document.createElement('h1')
      drinkName.textContent=drink.strDrink
      drinkDiv.append(drinkName)

      const drinkImg = document.createElement('img')
      drinkImg.setAttribute("src", drink.strDrinkThumb)
      drinkDiv.append(drinkImg)

      const drinkLikes = document.createElement('button')
      drinkLikes.innerText = "like: " 
      drinkDiv.append(drinkLikes)
      
      drinkLikes.addEventListener('click', () => {
        if (button.classList.contains("liked")) {
          button.classList.remove("liked");
        } else {
          button.classList.add("liked");
        }
      });
        
      
      const drinkRecipeInstructions = document.createElement('h2')
      drinkRecipeInstructions.innerHTML = drink.strInstructions
      drinkDiv.append(drinkRecipeInstructions)
      drinkRecipeInstructions.setAttribute("onClick", drink.strInstructions)


      searchResults.parentNode.insertBefore(drinkDiv, searchResults.nextSibling)

    })
    )
  })
};

document.addEventListener('submit', search);


  // const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
  


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


      
      //Append drinkDiv to searchResults
    
// //create a tag for href***need to figure out how to have a tag populate
      //the link i want 
      // const a = document.createElement("a");
      // a.href = '${drink.strVideo}';
      // a.innerHTML = "Click to watch how to video"
      // drinkDiv.append(a)
      //** add a fetch here? */
      // fetch(base url)
      // .then(res => res.json())
      // .then(data => {
      //   console.log(data)
      // })
//******* */
      // const attachClicksToLinks = () => {
      //   const drinks = document.querySelectorAll('a')
      //   drinks.forEach((drink) => {
      //     drinks.addEventListener('click', displayDrink)
      //   })
      // }

//**Get ingrediants */
    // function getIngredients(strIngrediants) {
    //   const ingDiv = document.createElement('div')
    //   ingDiv.className = "card"
    // }

    // const ingName = document.createElement('h2')
    // ingName.innerText = ingObj.ingName




//Show image at page open at all times
// var img = document.createElement("img");
// img.src = "";
// var src = document.getElementById("header");
// src.appendChild(img);

//Clear previous results
    // searchResults.remove()




//toggle color change
      // const button = document.getElementById('button');
      // button.addEventListener('click', function onClick(event) {
      //   const backgroundColor = button.style.backgroundColor;

      //   if(backgroundColor === 'salmon') {
      //     button.style.backgroundColor = 'green';
      //   }
      // })

      // let btn = document.createElement("button");
      // btn.innerHTML = "Read More";
      // document.body.appendChild(btn);

