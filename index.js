const nameElement = document.getElementById('name');
const alcoholicElement = document.querySelector('alcoholic');
const button = document.querySelector("my-button");

fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?f=a`)
.then(db => db.json())
.then(data =>{
console.log(data)
});

function goBack() {
  window.history.back();
}

// button.addEventListener("click", function() {
//   if (button.style.backgroundColor === "blue") {
//     button.style.backgroundColor = "red";
//   } else {
//     button.style.backgroundColor = "blue";
//   }
// });
// function navigateToPage() {
//   location.href = "https://thecocktaildb.com/api/json/v1/1/search.php?f=a";
// }

// let selectedItem = null;

// function filterList() {
//   const searchBar = document.getElementById("searchBar");
//   const filter = searchBar.value.toUpperCase();
//   const list = document.getElementById("list");
//   const listItems = list.getElementsByTagName("li");

//   for (let i = 0; i < listItems.length; i++) {
//     const liText = listItems[i].textContent || listItems[i].innerText;
//     if (liText.toUpperCase().indexOf(filter) > -1) {
//       listItems[i].style.display = "";
//     } else {
//       listItems[i].style.display = "none";
//     }
//   }
// }
function search(event) {
  event.preventDefault();
  const searchBar = document.getElementById("searchBar");
  const searchTerm = searchBar.value;
  const results = document.getElementById("results");
  results.innerHTML = "";

  // Send a request to the server with the search term
  fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?f=${" ingredient"}&s=${searchTerm}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.drinks.forEach((item) => {
        const resultDiv = document.createElement("div");
        resultDiv.classList.add("result-card");
        resultDiv.dataset.id = item.idDrink;

        const imgContainer = document.createElement("div");
        imgContainer.classList.add("img-container");

        const img = document.createElement("img");
        img.src = `http://www.thecocktaildb.com/images/media/${item.strImageSource}`;
        img.alt = item.strDrink;

        const infoContainer = document.createElement("div");
        infoContainer.classList.add("info-container");

        const titleH2 = document.createElement("h2");
        titleH2.textContent = `${item.strDrink}`;

        const ingredientsUl = document.createElement("ul");
        ingredientsUl.classList.add("ingredients");
        item.strIngredient1 && ingredientsUl.append(createLi(item.strIngredient1, item.strMeasure1));
        item.strIngredient2 && ingredientsUl.append(createLi(item.strIngredient2, item.strMeasure2));
        item.strIngredient3 && ingredientsUl.append(createLi(item.strIngredient3, item.strMeasure3));

        infoContainer.append(titleH2, ingredientsUl);

        imgContainer.append(img);
        resultDiv.append(imgContainer, infoContainer);

        results.appendChild(resultDiv);
      });
    })
    .catch((err) => console.error(err));
};

// Function that creates an li element for each ingredient and measures pairing
function createLi(ingredient, measure) {
  const li = document.createElement("li");
  const spanIngredient = document.createElement("span");
  spanIngredient.classList.add("ingredient");
  spanIngredient.textContent = `${ingredient}:`;

  const spanMeasure = document.createElement("span");
  spanMeasure.classList.add("measure");
  spanMeasure.textContent = `${measure} `;
}
//     .then(response => response.json())
//     .then(data => {
//       // Display the results in the list
//       data.forEach(item => {
//         const li = document.createElement("li");
//         li.textContent = item.name;
//         results.appendChild(li);
//       });
//     })
//     .catch(error => {
//       // Handle any errors
//       console.error(error);
//     });
// }

// function selectItem(button) {
//   const listItem = button.parentNode;
//   if (selectedItem !== null) {
//     selectedItem.style.backgroundColor = "#f2f2f2";
//   }
//   listItem.style.backgroundColor = "lightgreen";
//   selectedItem = listItem;
//   const output = document.getElementById("output");
//   output.textContent = "Selected item: " + listItem.textContent;
// }