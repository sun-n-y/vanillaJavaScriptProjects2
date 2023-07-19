import presentDrinks from './src/presentDrinks.js';
import './src/searchForm.js';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

window.addEventListener('DOMContentLoaded', () => {
  presentDrinks(url);
});
