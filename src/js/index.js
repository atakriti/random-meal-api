let container = document.getElementById("container");



async function randomMeal(e) {
  let fetching = await fetch(
    `https://www.themealdb.com/api/json/v1/1/random.php`
  );
  let json = await fetching.json();
  let div = `<div> 
    <h1><span>Meal:</span> ${json.meals.map((p) => p.strMeal)} </h1>
    <h2><span>Category: </span>${json.meals.map((p) => p.strCategory)} </h2>
    <h3><span>Country: </span>${json.meals.map((p) => p.strArea)} </h3>
    <img src= ${json.meals.map((p) => p.strMealThumb)}>
    <strong><span>Ingredient: </span>${json.meals.map((p) => p.strIngredient1)}  ${json.meals.map((p) => p.strMeasure1)} </strong>
    <p><span>Instructions: </span>${json.meals.map((p) => p.strInstructions)} </p>
    <video controls ><source src =" https://www.youtube.com/watch?v=H5SmjR-fxUs" ></source></video>
    
    <iframe src = "https://www.youtube.com/watch?v=H5SmjR-fxUs" ></iframe>

  
    </div>`;
  container.innerHTML += div;
  return json;
}
randomMeal();
// ${json.meals.map(p => p.strYoutube)}