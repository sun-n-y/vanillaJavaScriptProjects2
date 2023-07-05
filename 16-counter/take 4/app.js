//helper funciton, to get target element
function getElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  } else {
    throw new Error(`error in ${selector} selctor`);
  }
}

//constructor funciton
function Counter(element, value) {
  this.counter = element;
  this.value = value;
  this.decreaseBtn = element.querySelector('.decrease');
  this.increaseBtn = element.querySelector('.increase');
  this.resetBtn = element.querySelector('.reset');
  this.valueDOM = element.querySelector('.value');
  this.valueDOM.textContent = value;
  //event listener
  this.increaseBtn.addEventListener('click', this.increase.bind(this));
  this.decreaseBtn.addEventListener('click', this.decrease.bind(this));
  this.resetBtn.addEventListener('click', this.reset.bind(this));
}

//prototypes for counter
Counter.prototype.increase = function () {
  this.value++;
  this.valueDOM.textContent = this.value;
};
Counter.prototype.decrease = function () {
  this.value--;
  this.valueDOM.textContent = this.value;
};
Counter.prototype.reset = function () {
  this.value = 0;
  this.valueDOM.textContent = this.value;
};

//instances
const counterOne = new Counter(getElement('.first-counter'), 77);
const counterTwo = new Counter(getElement('.second-counter'), 88);
