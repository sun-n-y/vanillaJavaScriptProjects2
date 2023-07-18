const url = 'https://course-api.com/javascript-store-products';
const productsDOM = document.querySelector('.products-center');

const fetchProdcuts = async () => {
  try {
    productsDOM.innerHTML = `<div class="loading"></div>`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    productsDOM.innerHTML = `<div class="error">Error...</div>`;
  }
};

const displayProducts = (list) => {
  const productList = list
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
  productsDOM.innerHTML = `<div class="products.container">${productList}</div>`;
};

const start = async () => {
  const data = await fetchProdcuts();
  displayProducts(data);
};

start();
