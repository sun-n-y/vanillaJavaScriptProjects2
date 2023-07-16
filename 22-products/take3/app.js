const url = 'https://course-api.com/javascript-store-products';
const productsCenter = document.querySelector('.products-center');

const fetchProducts = async () => {
  try {
    productsCenter.innerHTML = `<div class="loading"></div>`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    productsCenter.innerHTML = `<p class="error">Error...</p>`;
  }
};

const displayProducts = (list) => {
  const productsList = list
    .map((product) => {
      const { id } = product;
      const { price, name: title, image } = product.fields;
      const { url: img } = image[0];
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
  productsCenter.innerHTML = `<div class="products-container">${productsList}</div>`;
};

const start = async () => {
  const data = await fetchProducts();
  displayProducts(data);
};

start();
