fetch('recipes.json')
  .then(response => response.json())
  .then(data => {
    const recipes = data.Yummy;

    const recipesList = document.getElementById('recipesList');

    recipes.forEach(recipe => {
      const listItem = document.createElement('li');

      const name = document.createElement('h3');
      name.textContent = recipe.name;

      const ingredients = document.createElement('p');
      ingredients.textContent = 'Ingredients: ' + recipe.ingredients.join(', ');

      const instructions = document.createElement('p');
      instructions.textContent = 'Instructions: ' + recipe.instructions;

      listItem.appendChild(name);
      listItem.appendChild(ingredients);
      listItem.appendChild(instructions);

      recipesList.appendChild(listItem);
    });
  })
  .catch(error => console.log('Error fetching data:', error));

