//store products
const url = 'https://course-api.com/javascript-store-productss';
const productsDOM = document.querySelector('.products-center');

const fetchProduct = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fetchProduct();
