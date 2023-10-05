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
  } else {
    //update value
  }
  //add one to item count
  displayCartItemCount();
  // display cart totals
  displayCartTotal();
  //set cart in locale storage
  setStorageItem('cart', cart);
  //more later
  openCart();
};

function displayCartItemCount() {
  const amount = cart.reduce((total, cartItem) => {
    return (total += cartItem.amount);
  }, 0);
  cartItemCountDOM.textContent = amount;
}

function displayCartTotal() {
  let total = cart.reduce((total, cartItem) => {
    return (total += cartItem.price * cartItem.amount);
  }, 0);
  cartTotalDOM.textContent = `Total : ${formatPrice(total)}`;
}

const init = () => {
  console.log(cart);
};
init();
