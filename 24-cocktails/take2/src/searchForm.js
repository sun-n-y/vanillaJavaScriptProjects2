import get from './getElement.js';
import presentDrinks from './presentDrinks.js';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const searchForm = get('.search-form');
const input = get('[name=drink]');

searchForm.addEventListener('keyup', (e) => {
  e.preventDefault();
  if (!input.value) {
    return;
  }
  presentDrinks(`${baseURL}${input.value}`);
});
