//
let filterdProducts = [...products];

const productsContainer = document.querySelector('.products-container');

const displayProducts = () => {
  if (filterdProducts.length < 1) {
    productsContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
    return;
  }
  productsContainer.innerHTML = filterdProducts
    .map(({ id, title, image, price }) => {
      return `<article class="product" data-id="${id}">
        <img src="${image}" class="product-img img">
        <footer>
          <h5 class="product-name">${title}</h5>
          <span class="product-price">$${price}</span>
        </footer>
      </article>`;
    })
    .join('');
};

displayProducts();

//text filter
const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup', () => {
  const inputValue = searchInput.value;
  filterdProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  displayProducts();
});
