//
const url = 'https://course-api.com/javascript-store-products';
const productDOM = document.querySelector('.products-center');

const fetchProduct = async () => {
  productDOM.innerHTML = `<div class="loading"></div>`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('error');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    productDOM.innerHTML = `<p class="error">there was an error...</p>`;
  }
};

const displayProducts = (list) => {
  console.log(list);
};

const start = async () => {
  const data = await fetchProduct();
  displayProducts(data);
};

start();
