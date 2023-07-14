//single product js
const url = 'https://course-api.com/javascript-store-single-product';
const productDOM = document.querySelector('.product');

const fetchProduct = async () => {
  try {
    productDOM.innerHTML = '<h4 class="product-loading">Loading...</h4>';
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id);
    const response = await fetch(`${url}?id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    productDOM.innerHTML = '<p class="error">Error...</p>';
  }
};

const displayProduct = (product) => {
  //company, colors, desc, name:title, price, image(url:img)
  const {
    company,
    colors,
    description,
    name: title,
    price,
    image,
  } = product.fields;
  const { url: img } = image[0];
  //title of page/tab
  document.title = title.toUpperCase();
  //colors
  productDOM.innerHTML = `<div class="product-wrapper">
            <img src="${img}" class="img" alt="${title}">
            <div class="product-info">
                <h3>${title}</h3>
                <h5>${company}</h5>
                <span>${price / 100}</span>
                <div class="colors">
                    <span class="product-color"></span>
                    <span class="product-color"></span>
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
