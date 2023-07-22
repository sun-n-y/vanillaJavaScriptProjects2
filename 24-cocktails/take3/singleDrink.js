import fetchDrinks from './src/fetchDrinks.js';
import displayDrink from './src/displaySingleDrink.js';

const presentDrink = async () => {
  const id = localStorage.getItem('drinkId');
  if (!id) {
    window.location.replace('index.html');
  }
  const drink = await fetchDrinks(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  console.log(drink, window);
};

window.addEventListener('DOMContentLoaded', presentDrink);
