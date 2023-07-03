//helper function: to get target element
function getElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  } else {
    new Error(`Plesase check "${selector}", because it is wrong`);
  }
}

//create class setup
class Counter {
  constructor(element, value) {
    this.counter = element;
    this.value = value;
    this.restBtn = element.querySelector('.reset');
    this.increaseBtn = element.querySelector('.increase');
    this.decreaseBtn = element.querySelector('.decrease');
    this.valueDOM = element.querySelector('.value');
    this.valueDOM.textContent = value;
    //binds
    this.reset = this.reset.bind(this);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    //add event listeners
    this.restBtn.addEventListener('click', this.reset);
    this.increaseBtn.addEventListener('click', this.increase);
    this.decreaseBtn.addEventListener('click', this.decrease);
  }
  increase() {
    this.value++;
    this.valueDOM.textContent = this.value;
  }
  reset() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
  }
  decrease() {
    this.value--;
    this.valueDOM.textContent = this.value;
  }
}

//create instances
const firstCounter = new Counter(getElement('.first-counter'), 77);
const secondCounter = new Counter(getElement('.second-counter'), 88);
