import fetchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';

const showDrinks = async (url) => {
  const data = await fetchDrinks(url);

  const section = await displayDrinks(data);
  console.log(section);
};

export default showDrinks;
