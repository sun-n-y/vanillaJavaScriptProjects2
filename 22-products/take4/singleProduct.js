const url = 'https://course-api.com/javascript-store-single-product';
const productDOM = document.querySelector('.product');

const fetchProduct = async () => {
  try {
    productDOM.innerHTML = `<div class="loading"></div>`;
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const response = await fetch(`${url}?id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    productDOM.textContent = `${error}`;
  }
};

const displayProduct = (product) => {
  const {
    company,
    colors,
    price,
    name: title,
    description: desc,
    image,
  } = product.fields;
  const { url: img } = image[0];
  const colorsList = colors
    .map((color) => {
      return `<span class="product-color" style="background:${color}"></span>`;
    })
    .join('');
  productDOM.innerHTML = `<div class="product-wrapper">
            <img src="${img}" class="img" alt="${title}">
            <div class="product-info">
                <h3>${title}</h3>
                <h5>${company}</h5>
                <span>$${price / 100}</span>
                <div class="colors">${colorsList}
                </div>
                <p>${desc}</p>
                <button class="btn">add to cart</button>
            </div>
        </div>`;
};

const start = async () => {
  const product = await fetchProduct();
  displayProduct(product);
};

start();
