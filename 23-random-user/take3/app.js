//
import get from './getElement.js';
import getUser from './fetchUser.js';

//
const img = get('.user-img');
const title = get('.user-title');
const value = get('.user-value');
const btn = get('.btn');
const btns = [...document.querySelectorAll('.icon')];

//
const displayUser = (person) => {
  console.log(person);
};

const showUser = async () => {
  const person = await getUser();
  displayUser(person);
};

//
window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);
