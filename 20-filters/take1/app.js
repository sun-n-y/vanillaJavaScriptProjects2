//products copy
let filteredProducts = [...products];

//target elements
const productsContainer = document.querySelector('.products-container');
const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');
const compainesContainer = document.querySelector('.companies');

//event listener
form.addEventListener('keyup', () => {
  const inputValue = searchInput.value;
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  displayProducts();
});

//funciton
const displayProducts = () => {
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `Sorry, no results found for search input`;
    return;
  }
  productsContainer.innerHTML = filteredProducts
    .map(({ id, title, image, price }) => {
      return `<article data-id="${id}" class="product">
        <img src=${image} alt="" class="product-img img">
        <footer>
          <h5 class="product-name">${title}</h5>
          <span class="product-price">${price}</span>
        </footer>
      </article>`;
    })
    .join('');
};

displayProducts();

//filter buttons
const displayButtons = () => {
  const buttons = [
    'All',
    ...new Set(products.map((product) => product.company)),
  ];
  compainesContainer.innerHTML = buttons
    .map((company) => {
      return `<button class="company-btn" data-id="${company}">${company}</button>`;
    })
    .join('');
};

displayButtons();

//
compainesContainer.addEventListener('click', (e) => {
  const el = e.target;
  if (el.classList.contains('company-btn')) {
    if (el.dataset.id === 'All') {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter((product) => {
        return product.company === el.dataset.id;
      });
    }
    searchInput.value = '';
    displayProducts();
  }
});
