import get from './getElement.js';

const displayDrinks = ({ drinks }) => {
  const section = get('.section-center');
  const title = get('.title');
  if (!drinks) {
    //hide loading
    title.textContent = 'Sorry, error in fetch request';
    section.innerHTML = null;
    return;
  }
  const newDrinks = drinks
    .map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
      return `<a href="drink.html">
        <article class="cocktail">
          <img src="${image}" data-id="${id}" alt="${name}">
          <h3>${name}</h3>
        </article>
      </a>`;
    })
    .join('');
  //hide loading
  title.textContent = null;
  section.innerHTML = newDrinks;
  return section;
};

export default displayDrinks;
