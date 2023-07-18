import get from './utils/getElement.js';
import fetchUser from './utils/fetchUser.js';
import displayUser from './utils/displayUser.js';

const btn = get('.btn');

const showUser = async () => {
  const data = await fetchUser();
  displayUser(data);
};

window.addEventListener('DOMContentLoaded', showUser);

btn.addEventListener('click', showUser);
