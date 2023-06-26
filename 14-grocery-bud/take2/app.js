// ****** SELECT ITEMS **********
const form = document.querySelector('.grocery-form');
const alert = document.querySelector('.alert');
const groceryInput = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editID = '';

// ****** EVENT LISTENERS **********
form.addEventListener('submit', addItem);

// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  const value = groceryInput.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    console.log('add new item');
  } else if (value && editFlag) {
    console.log('edit item');
  } else {
    displayAlert('please enter value', 'danger');
  }
}

//display alert funciton
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  setTimeout(function () {
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
