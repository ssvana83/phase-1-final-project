const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/"

//EVENT LISTENER #1: SEARCH BUTTON
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
          
      const drinkRecipeInstructions = document.createElement('h2')
      drinkRecipeInstructions.innerHTML = drink.strInstructions
      drinkDiv.append(drinkRecipeInstructions)

      const alcoholic = document.createElement('h3')
      alcoholic.innerHTML = drink.strAlcoholic
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
    })
    )
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



