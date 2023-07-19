import fetchDrinks from './fetchDrinks.js';

const showDrinks = async (url) => {
  const data = await fetchDrinks(url);
  console.log(data);
  //fetch drinks
  //displat drinks
};

export default showDrinks;
