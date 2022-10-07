//declare
//create an alpha button
//naming
//append
//then listener
const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/"
let drinkArr = data.drinks
const searchResults = document.getElementById('searchResults');

const search = (event) => {
    event.preventDefault();

    const userInput = document.querySelector('input#searchForDrinks');

    fetch(BASE_URL + "search.php?s=" + userInput.value)
    .then(response => response.json())
    .then(data => {

    drinkArr = data.drinks
    console.log(data)

    drinkArr.forEach(drink => renderDrink(drink))
  })
};
document.addEventListener('submit', search);

      function nightMode() {
      const slider = document.getElementById("nightMode");
        const body = document.querySelector("body");
        const backgroundColor = window.getComputedStyle(body).background;
        console.log(backgroundColor)
        if(backgroundColor === 'rgb(173, 216, 230) none repeat scroll 0% 0% / auto padding-box border-box') {
          body.style.cssText = 'background: gray;'
        } else {
          body.style.cssText = 'background: lightblue;'
        }
      }


function renderDrink (drinkObj) {

     
    const drinkDiv = document.createElement('div')
    drinkDiv.className = "card"

    const drinkName = document.createElement('h1')
    drinkName.textContent=drinkObj.strDrink
    drinkDiv.append(drinkName)

    const drinkImg = document.createElement('img')
    drinkImg.setAttribute("src", drinkObj.strDrinkThumb)
    drinkDiv.append(drinkImg)
        
    const drinkRecipeInstructions = document.createElement('h2')
    drinkRecipeInstructions.innerHTML = drinkObj.strInstructions
    drinkDiv.append(drinkRecipeInstructions)

    const alcoholic = document.createElement('h3')
    alcoholic.innerHTML = drinkObj.strAlcoholic
    drinkDiv.append(alcoholic)
    alcoholic.addEventListener('mouseover', () => {
      alcoholic.style.cssText = "color: purple"
    })

  
    alcoholic.addEventListener('mouseout', () => {
      alcoholic.style.cssText = "color: black"
    })

    let count = 0;
    const likeCount = document.createElement("p");
    likeCount.className = "likes-count";
    likeCount.textContent = `${count} likes`;
    drinkDiv.appendChild(likeCount)

    const like = document.createElement("button");
    like.setAttribute("class", "like-btn");
    like.textContent = "Like"
    drinkDiv.appendChild(like)
    like.addEventListener('click', () => {
      count ++
      likeCount.textContent = `${count} likes`;
    })
    searchResults.parentNode.insertBefore(drinkDiv, searchResults.nextSibling)
  }
