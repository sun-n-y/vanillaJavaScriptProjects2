import get from './getElement.js';
import { hideLoading } from './toggleLoading.js';

const section = get('.section-center');
const title = get('.title');

const displayDrinks = ({ drinks }) => {
  if (!drinks) {
    hideLoading();
    title.textContent = 'Sorry, error in fetch request';
    section.innerHTML = null;
    return;
  }
  const newDrink = drinks
    .map((drink) => {
      const { idDrink: id, strDrinkThumb: image, strDrink: name } = drink;
      return `<a href="drink.html">
        <article class="cocktail data-id="${id}" ">
        <img src="${image}" alt="${name}">
        <h3>${name}</h3>
        </article>
        </a>`;
    })
    .join('');
  hideLoading();
  title.textContent = '';
  section.innerHTML = newDrink;
  return section;
};

export default displayDrinks;
