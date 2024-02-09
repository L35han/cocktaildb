const nameElement  = document.querySelector('#name');
const alcoholElement = document.querySelector("#alcohol");

fetch (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nameElement.value}`)
.then(response => response.json()) // Parse the JSON data
.then((data) => {
    console.log(data); // Log the data in the console
    
    let drink = data.drinks[0]; // Get the first drink from the list of cocktails

    // Display the ingredients and instructions on the page using the HTML elements we selected earlier
    nameElement.textContent = `${drink.strDrink}`;
    alcoholElement.textContent = `Alcol-Volume: ${drink.StrAlcohol}%`;
});
// Function to handle the form submission event
function handleFormSubmit(event){
    // Prevent the default form submission
    event.preventDefault();

    //  Search for a drink from an online API
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nameElement.value}`)
        .then(response => response.json())
        .then(data => {
            // If there is no result, show an error message
            if(!data.drinks) {
                window.alert("No results found!");
            } else {
              // Show the recipe with the provided ingredient
              displayRecipe (data.drinks.filter(ingredient => ingredient.idIngredient == parseInt(event.target.ingredient.value))
        )}
        });
};

function displayRecipe (recipe) {
    // Create a new div element for each measurement unit
    const measuresDiv = document.createElement('div');
    measuresDiv.className = 'measures';

    // For each measure unit, create a label and input pair
    Object.keys(recipe).forEach(key => {
      if (key.includes('strIngredient')) {
          // Create a label and an input field
          const label = document.createElement('label');
          label.innerText = recipe[`strIngredient_${parseInt(key.slice(-1))}`];

          const inputField = document.createElement('input');
          inputField.type = "number";
          inputField.name = key;
          inputField.value = recipe[key];

          // Add the label and the input field to the measures div
          measuresDiv.appendChild(label);
          measuresDiv.appendChild(document.createDocumentFragment());
          measuresDiv.appendChild(inputField);
      };
    });

    // Append the measures div to the page
    document.body.appendChild(measuresDiv);
    measuresDiv.style.display = "block";
};

// Function that handles the click event on the submit button
submitButton.onclick = () => {
    // Clear any previous search results before making a new one
    clearPrevious();

    // Get all of the values from the input fields
    const measurements = Array.from(document.getElementsByName("measure")).map((el) => el.value);
    const ingredients = Array.from(document.getElementsByName("ingredient"))
                            .filter((el) => el.value !== "")
                            .map((el) => el.value);

    // If there are no ingredients or measurements entered, alert the user and return
    if (!ingredients.length || !measurements.length){
        alert("Please enter at least one ingredient and its measurement.");
        return;
    }

    // Make a request to the API with the form data
    fetch('/https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"method": "search", "ingredients": ingredients, "measurements": measurements})
    })
    .then(response => response.json())
    .then(data => displayRecipes(data));
};


    // Get the search term from the input field
    let searchTerm = document.querySelector('#search-term').value;

    // Make a GET request to the API with the search term
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
    .then(response => response.json()) // Parse the JSON data
    .then(data => {
        // If there is no data, show an error message
        if(!data.drinks) {  
            window.alert('No results found! Please try again.');
        } else {
            // Show the recipe on the page  
        }
        displayRecipe(data.drinks[0]);
    })
    .catch(error => console.log(error));
