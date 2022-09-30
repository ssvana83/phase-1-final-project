const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/"
const whiteHeart = '\u2661';
const blackHeart = '\u2665';

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
      drinkRecipeInstructions.setAttribute("onClick", drink.strInstructions)

      let count = 0;

      const likeCount = document.createElement("p");
      likeCount.className = "likes-count";
      likeCount.textContent = `${count} likes`;

      const like = document.createElement("button");
      like.setAttribute("class", "like-btn");
      like.setAttribute("id", drink.id);
      like.textContent = "Like"
      
      like.addEventListener('click', () => {
        
        count ++
        likeCount.textContent = `${count} likes`;
      })
      drinkDiv.appendChild(likeCount)
      drinkDiv.appendChild(like)


      searchResults.parentNode.insertBefore(drinkDiv, searchResults.nextSibling)

    })
    )
  })
};

document.addEventListener('submit', search);

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


  // const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
  

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

