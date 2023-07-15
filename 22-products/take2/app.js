const url = 'https://course-api.com/javascript-store-products';
const productDOM = document.querySelector('.products-center');

const fetchProducts = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayProducts(data);
  } catch (error) {
    console.log(error);
  }
};

const displayProducts = (products) => {
  console.log(products);
};

const start = () => {
  fetchProducts();
};

start();
