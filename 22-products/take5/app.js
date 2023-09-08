//
const url = 'https://course-api.com/javascript-store-productsss';
const productDOM = document.querySelector('.products-center');

const fetchProduct = async () => {
  productDOM.innerHTML = `<div class="loading"></div>`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('error');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    productDOM.innerHTML = `<p class="error">there was an error...</p>`;
  }
};

fetchProduct();
