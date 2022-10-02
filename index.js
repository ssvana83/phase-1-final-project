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
        // console.log(body.style.cssText)
        // body.style.cssText = "background: lightgray;"
        if(backgroundColor === 'rgb(173, 216, 230) none repeat scroll 0% 0% / auto padding-box border-box') {
          body.style.cssText = 'background: gray;'
        } else {
          body.style.cssText = 'background: lightblue;'
        }
      }

      
//OPTION4 MOUSEOVER

      const cardHover = document.querySelectorAll(".card");
      cardHover.addEventListener('mouseover', myScript) 
      function myScript() {
        cardHover.style.cssText = 'border: purple'
      }

      // const searchResults = document.getElementById('searchResults');
      // searchResults.addEventListener("mouseover", myScript);

      //OPTION3 MOUSEOVER
      // const searchResults = document.getElementById ('searchResults');
      
      // searchResults.addEventListener("mouseenter", (e) => {
      //   searchResults.style.border = '5px dotted orange';
      // })

      // searchResults.addEventListener("mouseleave", (e) => {
      //   searchResults.style.border = '1px solid yellow';
      // })

      //mouseover option
// var item = document.getElementById("searchResults");
// item.addEventListener("mouseover", func, false);

// function func() {
//   var item = document.getElementById("searchResults");
//   item.setAttribute("style", "background-color:blue;")
// }

//OPTION1 MOUSEOVER searchResults=target
      // const searchResults = document.querySelector('.img');
      // searchResults.addEventListener('mouseover', mOver, false);
      // searchResults.addEventListener('mouseout', mOut, false);

      // function mOver() {
      //   searchResults.setAttribute("style", "background-color:purple;")
      // }

      // function mOut() {
      //   searchResults.setAttribute("style", "background-color:pink;")
      // }


//OPTION2 MOUSEOVER
      // const hover = false;
      // document.getElementById("searchResults").addEventListener("mouseover", function(event) {
      // // console.log('called on hover'); //just to make sure the function is getting called   
      // if(!hover) {
      //     buttonTL.reversed() ? buttonTL.restart() : buttonTL.reverse();
      // }
      //     hover = true;
      // }, false);

      // document.getElementById("searchResults").addEventListener("mouseleave", function( event ) {
      // // console.log('called on dhjhhhjs'); //just to make sure the function is getting called   
      // hover = false;
      // buttonTL.reversed() ? buttonTL.restart() : buttonTL.reverse();
      // }, false);


    





//Show image at page open at all times
// var img = document.createElement("img");
// img.src = "";
// var src = document.getElementById("header");
// src.appendChild(img);

//Clear previous results
    // searchResults.remove()



