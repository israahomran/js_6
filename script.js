async function fetchRecipes() {
    const response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
    const data = await response.json();
    displayRecipes(data.recipes);
}

function displayRecipes(recipes) {
    const recipesContainer = document.getElementById('recipes');
    recipesContainer.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.className = 'recipe';
        recipeDiv.innerHTML = `
            <img src="${recipe.image_url}" alt="${recipe.title}">
            <h2>${recipe.title}</h2>
            <a href="${recipe.source_url}" target="_blank">تفاصيل الوصفة</a>
        `;
        recipesContainer.appendChild(recipeDiv);
    });
}

fetchRecipes();
