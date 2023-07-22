import fetchDrinks from './fetchDrinks.js';

const showDrinks = async (url) => {
  const data = await fetchDrinks(url);
  console.log(data);
};

export default showDrinks;
