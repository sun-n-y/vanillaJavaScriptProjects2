// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editID = '';

// ****** EVENT LISTENERS **********
//submit form
form.addEventListener('submit', addItem);

// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    //create new item
    const element = document.createElement('article');
    //add class to element
    element.classList.add('grocery-item');
    //create datset id
    const attr = document.createAttribute('data-id');
    attr.value = id;
    //add attr to element
    element.setAttributeNode(attr);
    //add html to element
    element.innerHTML = `<p class="title">${value}</p>
          <div class="btn-container">
            <button type="button" class="edit-btn"><i class="fas fa-edit"></i></button>
            <button type="button" class="delete-btn"><i class="fas fa-trash"></i></button>
          </div>`;
    //append child to list
    list.appendChild(element);
    //display alert
    displayAlert('item added to list', 'success');
    //show container
    container.classList.add('show-container');
    //add to local storage
    addToLocalStorage(id, value);
    //set back to default
    setBackToDefault();
  } else if (value && editFlag) {
    console.log('editing');
  } else {
    displayAlert('please enter value', 'danger');
  }
}

//display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  setTimeout(function () {
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
  }, 1500);
}

//set back to defualt
function setBackToDefault() {
  grocery.value = '';
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
  console.log('added to local storage');
  editFlag = false;
  editID = '';
  submitBtn.textContent = 'submit';
}

// ****** SETUP ITEMS **********
