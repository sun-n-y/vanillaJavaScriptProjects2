//
import get from './getElement.js';

//
const img = get('.user-img');
const title = get('.user-title');
const value = get('.user-value');
const btns = [...document.querySelectorAll('.icon')];

//
const displayUser = (person) => {
  img.src = person.image;
  value.textContent = person.name;
  title.textContent = `My name is`;
  btns.forEach((btn) => {
    btn.classList.remove('active');
  });
  btns[0].classList.add('active');
  btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const label = e.currentTarget.dataset.label;
      title.textContent = `My ${label} is`;
      value.textContent = person[label];
      btns.forEach((btn) => {
        btn.classList.remove('active');
      });
      btn.classList.add('active');
    });
  });
};

export default displayUser;
