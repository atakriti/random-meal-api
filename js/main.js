let container = document.querySelector("#container");
async function randomMeal() {
  let fetching = await fetch(
    `https://www.themealdb.com/api/json/v1/1/random.php`
  );
  let json = await fetching.json();
  let arr = [];
  for (let i = 1; i <= 20; i++) {
    if (json.meals[0][`strIngredient${i}`]) {
      let element = `<li>${json.meals[0][`strIngredient${i}`]}</li>`;
      arr.push(element);
    }
  }

  // JSX
  let div = `<div>
    <h1><span>Meal: </span> ${json.meals.map((p) => p.strMeal)}</h1>
    <h2><span>Category: </span>${json.meals.map((p) => p.strCategory)}</h2>
    <h3><span>Country: </span>${json.meals.map((p) => p.strArea)}</h3>
    <a><img src=${json.meals.map((p) => p.strMealThumb)}></a>
    
    <ul><span>Ingredient: </span>${arr.join(" ")}</ul>
    <p><span>Instructions: </span>${json.meals.map(
      (p) => p.strInstructions
    )} </p>
    </div>`;

  container.innerHTML += div;
}
randomMeal();

