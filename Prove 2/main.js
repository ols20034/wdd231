fetch("recipes.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    console.log("Loaded recipes:", data);

    // Example: loop through recipes
    data.forEach(recipe => {
      console.log("Recipe Name:", recipe.recipe_name);
      console.log("Ingredients:");
      recipe.ingredients.forEach(ingredient => {
        console.log(`- ${ingredient.name}: ${ingredient.amounts.amount} ${ingredient.amounts.unit}`);
      });
      console.log("Steps:", recipe.steps);
      console.log("-----");
    });
  })
  .catch(error => {
    console.error("Error loading JSON:", error);
  });
