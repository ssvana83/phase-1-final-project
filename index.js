const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/"


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

      
//toggle color change
      const slider = document.getElementById('nightMode');
      slider.addEventListener('click', () => {
        const body = slider.style.backgroundColor;

        if(backgroundColor === 'lightblue') {
          slider.style.backgroundColor = 'gray';
        }
      })

      // let btn = document.createElement("button");
      // btn.innerHTML = "Read More";
      // document.body.appendChild(btn);
    

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



