//helper function: to get target element
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(
      `Please check "${selection}" selector, no such element exists`
    );
  }
}

//constructor funciton
function Counter(element, value) {
  this.counter = element;
  this.value = value;
  this.decreaseBtn = element.querySelector('.decrease');
  this.resetBtn = element.querySelector('.reset');
  this.increaseBtn = element.querySelector('.increase');
  this.valueDOM = element.querySelector('.value');
  this.valueDOM.textContent = value;

  //bind "this" to all functions
  this.increase = this.increase.bind(this);
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);
  //event listeners for buttons
  this.increaseBtn.addEventListener('click', this.increase);
  this.resetBtn.addEventListener('click', this.reset);
  this.decreaseBtn.addEventListener('click', this.decrease);
}

//add functions to prototype
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
  this.valueDOM.textContent = 0;
};

//create instances
const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);
