document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const recipeDetailsContainer = document.getElementById("recipeDetails");

    searchButton.addEventListener("click", function() {
        const searchTerm = searchInput.value.toLowerCase();hh
        fetch("recipes.json")
            .then(response => response.json())
            .then(data => {
                const recipe = data.find(recipe => recipe.name.toLowerCase() === searchTerm);
                if (recipe) {
                    displayRecipeDetails(recipe);
                } else {
                    recipeDetailsContainer.innerHTML = "<p>Recipe not found.</p>";
                }
            })
            .catch(error => console.error("Error fetching recipes:", error));
    });

    function displayRecipeDetails(recipe) {
        const recipeDetailsHTML = `
            <div class="recipe-details">
                <img src="${recipe.image}" alt="${recipe.name}">
                <h2>${recipe.name}</h2>
                <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
                <p><strong>Instructions:</strong> ${recipe.instructions}</p>
            </div>
        `;
        recipeDetailsContainer.innerHTML = recipeDetailsHTML;
    }
});
