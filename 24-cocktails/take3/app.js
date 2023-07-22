import showDrinks from './src/presentDrinks.js';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

window.addEventListener('DOMContentLoaded', () => {
  showDrinks(url);
});
