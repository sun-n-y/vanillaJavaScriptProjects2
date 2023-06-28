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
clearBtn.addEventListener('click', clearItems);
window.addEventListener('DOMContentLoaded', setupItems);

// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  const value = groceryInput.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    createElement(id, value);
    displayAlert('item added to list', 'success');
    container.classList.add('show-container');
    addItemToLocaleStorage(id, value);
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    displayAlert('item edited', 'success');
    editLocalStorage(editID, value);
    setBackToDefault();
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
  }, 1500);
}

//clear items
function clearItems() {
  const items = document.querySelectorAll('.grocery-item');
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  container.classList.remove('show-container');
  displayAlert('list emptied', 'danger');
  setBackToDefault();
  localStorage.removeItem('list');
}

//delete item
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove('show-container');
  }
  displayAlert('item deleted', 'success');
  deleteItemFromLocalStorage(id);
  setBackToDefault();
}

//edit item
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  groceryInput.value = editElement.innerHTML;
  editID = element.dataset.id;
  editFlag = true;
  submitBtn.innerHTML = 'edit';
  //edit local storage
}

//set back to default
function setBackToDefault() {
  groceryInput.value = '';
  editFlag = false;
  editID = '';
  submitBtn.textContent = 'submit';
}

// ****** LOCAL STORAGE **********
function addItemToLocaleStorage(id, value) {
  const grocery = { id, value };
  let items = getLocaleStorage();
  items.push(grocery);
  localStorage.setItem('list', JSON.stringify(items));
}

function deleteItemFromLocalStorage(id) {
  let items = getLocaleStorage();
  items = items.filter(function (item) {
    if (item.id != id) {
      return item;
    }
  });
  localStorage.setItem('list', JSON.stringify(items));
}

function editLocalStorage(id, value) {
  let items = getLocaleStorage();
  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem('list', JSON.stringify(items));
}

function getLocaleStorage() {
  return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : [];
}

// ****** SETUP ITEMS **********
function setupItems() {
  let items = getLocaleStorage();
  if (items.length > 0) {
    items.forEach(function (item) {
      createElement(item.id, item.value);
    });
    container.classList.add('show-container');
  }
}

function createElement(id, value) {
  const element = document.createElement('article');
  element.classList.add('grocery-item');
  const attr = document.createAttribute('data-id');
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = `<p class="title">${value}</p>
          <div class="btn-container">
            <button type="button" class="edit-btn"><i class="fas fa-edit"></i></button>
            <button type="button" class="delete-btn"><i class="fas fa-trash"></i></button>
          </div>`;
  const deleteBtn = element.querySelector('.delete-btn');
  const editBtn = element.querySelector('.edit-btn');
  deleteBtn.addEventListener('click', deleteItem);
  editBtn.addEventListener('click', editItem);
  list.appendChild(element);
}
