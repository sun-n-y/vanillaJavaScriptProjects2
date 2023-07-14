//store products
const url = 'https://course-api.com/javascript-store-products';
const productsDOM = document.querySelector('.products-center');

//this function is responsible for getting data
const fetchProduct = async () => {
  productsDOM.innerHTML = `<div class="loading"></div>`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    productsDOM.innerHTML = `<div class="error">There was an error.</div>`;
  }
};

//this fucntion is responsible for displaying data
const displayProducts = (list) => {
  const productList = list
    .map((product) => {
      //pull desired data pieces
      //id,name, price, image
      const { id } = product;
      const { name: title, price } = product.fields;
      const formatPrice = price / 100;
      const { url: img } = product.fields.image[0];
      return `<a href="product.html" class="single-product">
          <img src="${img}" alt="${title}" class="single-product-img img">
          <footer>
            <h5 class="name">${title}</h5>
            <span class="price">$${formatPrice}</span>
          </footer>
        </a>`;
    })
    .join('');
  productsDOM.innerHTML = `<div class="products-container">${productList}</div>`;
};

//this fucntion is responsible for modifying data
const start = async () => {
  const data = await fetchProduct();
  displayProducts(data);
};

start();
