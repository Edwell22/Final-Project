document.addEventListener("DOMContentLoaded", function() {
    fetch("recipies.json")
        .then(response => response.json())
        .then(data => {
            const recipesContainer = document.getElementById("recipes");
            data.forEach(recipe => {
                const recipeDiv = document.createElement("div");
                recipeDiv.classList.add("recipe");

                const nameHeader = document.createElement("h2");
                nameHeader.textContent = recipe.name;

                const ingredientsParagraph = document.createElement("p");
                ingredientsParagraph.textContent = "Ingredients: " + recipe.ingredients.join(", ");

                const instructionsParagraph = document.createElement("p");
                instructionsParagraph.textContent = "Instructions: " + recipe.instructions;

                recipeDiv.appendChild(nameHeader);
                recipeDiv.appendChild(ingredientsParagraph);
                recipeDiv.appendChild(instructionsParagraph);

                recipesContainer.appendChild(recipeDiv);
            });
        })
        .catch(error => console.error("Error fetching recipes:", error));
});
