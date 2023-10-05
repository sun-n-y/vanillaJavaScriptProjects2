// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from '../utils.js';
import { openCart } from './toggleCart.js';
import { findProduct } from '../store.js';
import addToCartDOM from './addToCartDOM.js';
// set items

const cartItemCountDOM = getElement('.cart-item-count');
const cartItemsDOM = getElement('.cart-items');
const cartTotalDOM = getElement('.cart-total');

let cart = getStorageItem('cart');

export const addToCart = (id) => {
  let item = cart.find((cartItem) => {
    return cartItem.id === id;
  });
  if (!item) {
    //add item to cart
    let product = findProduct(id);
    product = { ...product, amount: 1 };
    cart = [...cart, product];
    //add to dom
    addToCartDOM(product);
    console.log(cart);
  } else {
    //update value
  }

  //more later
  openCart();
};

const init = () => {
  console.log(cart);
};
init();
