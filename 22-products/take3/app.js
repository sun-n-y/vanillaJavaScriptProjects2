const url = 'https://course-api.com/javascript-store-products';
const productDOM = document.querySelector('.products-center');

const fetchProducts = async () => {
  try {
    productDOM.innerHTML = `<div class="loading"></div>`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    productDOM.innerHTML = `<p class="error">Error...</p>`;
  }
};

const displayProducts = (list) => {
  const productList = list
    .map((product) => {
      const { id } = product;
      const { name: title, price } = product.fields;
      const { url: img } = product.fields.image[0];
      formatPrice = price / 100;
      return `<a href="singleProduct.html?id=${id}&name=john&age=25" class="single-product">
          <img src="${img}" alt="${title}" class="single-product-img img">
          <footer>
            <h5 class="name">${title}</h5>
            <span class="price">$${formatPrice}</span>
          </footer>
        </a>`;
    })
    .join('');
  productDOM.innerHTML = `<div class="products-container">${productList}</div>`;
};

const start = async () => {
  const data = await fetchProducts();
  displayProducts(data);
};

start();
