// - setup a function displayProducts, iterate over products, display them

let filteredProducts = [...products];

const productContainer = document.querySelector('.products-container');

const displayProducts = () => {
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
