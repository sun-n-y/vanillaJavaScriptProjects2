const url = 'https://course-api.com/javascript-store-single-product';
const productDOM = document.querySelector('.product');

const fetchProduct = async () => {
  try {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const reponse = await fetch(`${url}?id=${id}`);
    const data = await reponse.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const displayProduct = (product) => {
  const {
    id,
    company,
    name: title,
    price,
    description: desc,
    colors,
  } = product.fields;
  const { url: img } = product.fields.image[0];
  document.title = title.toUpperCase();
  colorsList = colors
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
  const data = await fetchProduct();
  displayProduct(data);
};

start();
