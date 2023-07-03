//helper function, get target element
function getElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  } else {
    return new Error('error');
  }
}

//constructor function
function Counter(element, value) {
  this.counter = element;
  this.value = value;
  this.increaseBtn = element.querySelector('.increase');
  this.decreaseBtn = element.querySelector('.decrease');
  this.resetBtn = element.querySelector('.reset');
  this.valueDOM = element.querySelector('.value');
  this.valueDOM.textContent = value;
  //binds
  this.increase = this.increase.bind(this);
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);
  //event listeners
  this.increaseBtn.addEventListener('click', this.increase);
  this.decreaseBtn.addEventListener('click', this.decrease);
  this.resetBtn.addEventListener('click', this.reset);
}

//proto functions
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

const firstContainer = new Counter(getElement('.first-counter'), 11);
const secondContainer = new Counter(getElement('.second-counter'), 44);
