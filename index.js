// const cocktailNameElement = document.getElementById('cocktail-name');
// const descriptionElement = document.getElementById('description');
// const procedureElement = document.getElementById('procedure');
// const ingredientsElement = document.getElementById('ingredients');
// const searchTermElement = document.querySelector("searchTerm");
// const searchBarElement = document.querySelector(".search-bar");
//  const results = document.getElementById("results");
//  const searchInput = document.getElementById('searchInput');
// const searchButton = document.getElementById('searchButton');
// const cocktailList = document.getElementById( 'cocktails' );
// const placeholder = document.querySelectorAll('.placeholder') ;
//  document.addEventListener("DOMContentLoaded", function() {
//     searchCocktails();
// });

// function searchCocktails() {
//     const searchInput = document.getElementById("searchBar").value;

//     searchCocktails.innerHTML ="";

// //Fetch data from the API
// fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`)
// .then(response => response.json())
// .then(data => {
// console.log(data)
// })
// .catch(error => {
//     console.error("Error fetching data", error);
// })
// };
// searchButton.onclick= ()=>{
//    searchCocktails();
// }


// // function displayCocktail(cocktail) {
// //     //Clear out any existing content
// //     cocktailNameElement.innerText = "";
// //     descriptionElement.innerText = "";
// //     procedureElement.innerText = "";
// //     ingredientsElement.innerText = "";
// // }

// // //Event listener for the search button
// // // Add event listener to the search button
// // searchButton.addEventListener('click', function() {
// //     // Get the value from the search input
// //     const searchTerm = searchInput.value;

// //     // Call a function to perform the search
// //     performSearch(searchTerm);
// // });

// // // Function to perform the search
// // function performSearch(term) {
// //     // Example: Displaying search term in the search results div
// //     searchTermElement.textContent = `You searched for "${term}"`;

// //    showResults(term);
// // }

// // function showResults(term){
// //   let output="";
// //   const list=document.createElement('ul');
// //   if (term===''){
// //       alert ("Please enter something!");
// //   }else{
// //       cocktailsData.forEach((cocktail)=>{
// //           if(cocktail.strDrink===term || cocktail.strIngredient1===term || cocktail.strMeasure1===term ){
// //               output +=`<li class="card"> <div class="img-container"><img src="${cocktail.strImageSource}" alt="${cocktail.strDrink}"></div
// //               output +=`<li class="card"> <div class="img-container"><img src="${cocktail.strImageSource}" alt="${cocktail.strDrink}"></div>
// //     const searchResults = document.getElementById('searchResults')
// //     searchResults.innerHTML = `<p>You searched for: ${term}</p>`


// const form = document.getElementById("search-form"),
//  input = document.getElementById("search-input"),
//   container = document.getElementById("result-container"),
//    message = document.getElementById("result-message"),
//     image = document.getElementById("result-image"),
//     title = document.getElementById("result-title"),
//     ingredients = document.getElementById("result-ingredients");



// // Show the result container and hide the search form
//  const showResult = () => {
//      container.style.display = "block"; form.style.display = "none"; };

// // Hide the result container and show the search form
// const hideResult = () => {
//      container.style.display = "none"; form.style.display = "block"; };

// // Display the cocktail result
// const displayResult = (cocktail) => {
//      message.textContent = "";
//       image.src = cocktail.strDrinkThumb;
//        title.textContent = cocktail.strDrink;
//        ingredients.innerHTML = "";
//        for (let i = 1; i <= 15; i++) { const ingredient = cocktail[]}};

// `const` form = document.getElementById("search-form"), input = document.getElementById("search-input"), container = document.getElementById("result-container"), message = document.getElementById("result-message"), image = document.getElementById("result-image"), title = document.getElementById("result-title"), ingredients = document.getElementById("result-ingredients");

// // Show the result container and hide the search form
// const showResult = () => { container.style.display = "block"; form.style.display = "none"; };

// // Hide the result container and show the search form
// const hideResult = () => { container.style.display = "none"; form.style.display = "block"; };

// // Display the cocktail result
// const displayResult = (cocktail) => { message.textContent = ""; image.src = cocktail.strDrinkThumb; title.textContent = cocktail.strDrink; ingredients.innerHTML = ""; for (let i = 1; i <= 15; i++) { const ingredient = cocktail[strIngredient${i}]; if (ingredient) { ingredients.innerHTML += <li>${ingredient} - ${cocktail[strMeasure${i}]}</li>; } } };

// const searchButton = document.getElementById("searchButton");

// // Handle search button click
//  function searchCocktails() { const searchInput = input.value.trim(); if (!searchInput) { message.textContent = "Please enter a cocktail name."; return; } hideResult();

// // Fetch data from the API
// fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`)
// .then(response => {
//      if (!response.ok) {
//          throw new Error("Error fetching data");
//          } return response.json();
//         })
//         .then(data => {
//              if (data.drinks && data.drinks.length > 0) {
//                 displayResult(data.drinks[0]);
//                  showResult();
//                  } else { message.textContent = "No cocktails found with that name."; } })
//                   .catch(error => { console.error("Error fetching data", error); message.textContent = "An error occurred while searching. Please try again."; showResult(); }); }

// searchButton.onclick = searchCocktails;

//  form = document.getElementById("search-form"),
//  input = document.getElementById("search-input"),
//  container = document.getElementById("result-container"),
//  message = document.getElementById("result-message"),
//  image = document.getElementById("result-image"),
//  title = document.getElementById("result-title"),
//  ingredients = document.getElementById("result-ingredients");

// // Show the result container and hide the search form
//  const showResult = () => {
//      container.style.display = "block";
//       form.style.display = "none"; };

// // Hide the result container and show the search form
//  const hideResult = () => {
//      container.style.display = "none";
//       form.style.display = "block";
//      };

// // Display the cocktail result
//  const displayResult = (cocktail) => {
//     message.textContent = "";
//     image.src = cocktail.strDrinkThumb;
//     title.textContent = cocktail.strDrink;
//     ingredients.innerHTML = ""; for (let i = 1;
//     i <= 15; i++) { const ingredient = cocktail[strIngredient${i}];
//     if (ingredient) { ingredients.innerHTML += <li>${ingredient} - ${cocktail[strMeasure${i}]}</li>; } } };

// const searchButton = document.getElementById("searchButton");

// // Handle search button click
//  function searchCocktails() { const searchInput = input.value.trim(); if (!searchInput) { message.textContent = "Please enter a cocktail name."; return; } hideResult();

// // Fetch data from the API
//  fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`)
//  .then(response => { if (!response.ok)
//     { throw new Error("Error fetching data"); } return response.json(); }) .then(data => { if (data.drinks && data.drinks.length > 0) { displayResult(data.drinks[0]); showResult(); } else { message.textContent = "No cocktails found with that name."; } }) .catch(error => { console.error("Error fetching data", error); message.textContent = "An error occurred while searching. Please try again."; showResult(); }); }

// searchButton.onclick = searchCocktails;

const form = document.getElementById("search-form"),
      input = document.getElementById("search-input"),
      container = document.getElementById("result-container"),
      message = document.getElementById("result-message"),
      image = document.getElementById("result-image"),
      title = document.getElementById("result-title"),
      ingredients = document.getElementById("result-ingredients");

const showResult = () => {
    container.style.display = "block";
    form.style.display = "none";
};

const hideResult = () => {
    container.style.display = "none";
    form.style.display = "block";
};

const displayResult = (cocktail) => {
    message.textContent = "";
    image.src = cocktail.strDrinkThumb;
    title.textContent = cocktail.strDrink;
    ingredients.innerHTML = "";

    // Loop through ingredients and measures
    for (let i = 1; i <= 15; i++) {
        const ingredient = cocktail[`strIngredient${i}`];
        const measure = cocktail[`strMeasure${i}`];

        // Check if both ingredient and measure exist
        if (ingredient && measure) {
            ingredients.innerHTML += `<li>${ingredient} - ${measure}</li>`;
        } else if (ingredient) {
            ingredients.innerHTML += `<li>${ingredient}</li>`;
        }
    }
};

const searchButton = document.getElementById("searchButton");

function searchCocktails() {
    const searchInput = input.value.trim();
    if (!searchInput) {
        message.textContent = "Please enter a cocktail name.";
        return;
    }
    hideResult();

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error fetching data");
            }
            return response.json();
        })
        .then(data => {
            if (data.drinks && data.drinks.length > 0) {
                displayResult(data.drinks[0]);
                showResult();
            } else {
                message.textContent = "No cocktails found with that name.";
            }
        })
        .catch(error => {
            console.error("Error fetching data", error);
            message.textContent = "An error occurred while searching. Please try again.";
            showResult();
        });
}

searchButton.addEventListener("click", searchCocktails);
