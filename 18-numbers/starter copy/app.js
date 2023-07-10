//target elements
const items = [...document.querySelectorAll('.number')];

//for each
const updateCounter = items.forEach((item) => {
  increaseCount(item);
});

//function
function increaseCount(el) {
  const value = el.dataset.value;
  const increment = Math.ceil(value / 1000);
  let intialValue = 0;
  const counter = setInterval(() => {
    intialValue += increment;
    if (intialValue >= value) {
      clearInterval(counter);
    }
    el.textContent = `${intialValue}+`;
  }, 1);
}
