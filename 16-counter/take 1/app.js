//constructor funciton
function Counter(element, value) {
  console.log(element, value);
}

const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);

console.log(firstCounter);
console.log(secondCounter);

//function to get element
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
