import presentDrinks from './src/presentDrinks.js';

const url = 'www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

window.addEventListener('DOMContentLoaded', () => {
  presentDrinks(url);
});
