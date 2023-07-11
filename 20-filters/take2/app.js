//display products
let filteredProducts = [...products];

const productContainer = document.querySelector('.products-container');

const displayProducts = () => {
  //empty Array
  if (filteredProducts.length < 1) {
    productContainer.innerHTML = `<h6>Sorry, product not found</h6>`;
    return;
  }
  productContainer.innerHTML = filteredProducts
    .map(({ id, title, image, price }) => {
      return `<article class="product" data-id="${id}">
        <img src="${image}" alt="" class="product-img img">
        <footer>
          <h5 class="product-name">${title}</h5>
          <span class="product-price">$${price}</span>
        </footer>
      </article>`;
    })
    .join('');
};

displayProducts();

//search based on text
const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup', () => {
  const inputValue = searchInput.value.toLowerCase();
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  displayProducts();
});

//display filter buttons
const btnContainer = document.querySelector('.companies');

const displayButtons = () => {
  const buttons = [
    'All',
    ...new Set(
      products.map((product) => {
        return product.company;
      })
    ),
  ];
  btnContainer.innerHTML = buttons
    .map((button) => {
      return `<button class="company-btn">${button}</button>`;
    })
    .join('');
};

displayButtons();
