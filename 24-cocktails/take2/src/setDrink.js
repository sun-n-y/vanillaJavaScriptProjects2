import get from './getElement.js';

const setDrink = (seciton) => {
  seciton.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    localStorage.setItem('drinkID', id);
  });
};

export default setDrink;
