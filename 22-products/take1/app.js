//store products
const url = 'https://course-api.com/javascript-store-products';
const productsDOM = document.querySelector('.products-center');

const fetchProduct = async () => {
  productsDOM.innerHTML = `<div class="loading"></div>`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayProducts(list);
  } catch (error) {
    productsDOM.innerHTML = `<div class="error">There was an error.</div>`;
  }
};

const displayProducts = (list) => {
  console.log(list);
};

fetchProduct();
