//
const url = 'https://course-api.com/javascript-store-single-product';
const productDOM = document.querySelector('.product');

const fetchProduct = async () => {
  try {
    productDOM.innerHTML = `<h4 class="product-loading">Loading...</h4>`;
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const response = await fetch(`${url}?id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    productDOM.innerHTML = `<p class="error">Error</p>`;
  }
};

const displayProduct = (product) => {
  const { company, colors, description, name: title, price } = product.fields;
  const { url: img } = product.fields.image[0];
  const formatPrice = price / 100;
  document.title = title.toUpperCase();

  const productColors = colors
    .map((color) => {
      return `<span class="product-color" style="background: ${color};"></span>`;
    })
    .join('');

  productDOM.innerHTML = `<div class="product-wrapper">
            <img src="${img}" class="img" alt="${title}">
            <div class="product-info">
                <h3>${title}</h3>
                <h5>${company}</h5>
                <span>$${formatPrice}</span>
                <div class="colors">${productColors}
                </div>
                <p>${description}</p>
                <button class="btn">add to cart</button>
            </div>
        </div>`;
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};

start();
