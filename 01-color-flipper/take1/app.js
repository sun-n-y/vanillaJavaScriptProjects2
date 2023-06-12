//color flipper
const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

//target elements
const btn = document.querySelector('#btn');
const main = document.querySelector('main');
const colorName = document.querySelector('.color');

//event listner
btn.addEventListener('click', function () {
  const number = randomNumber();
  main.style.backgroundColor = colors[number];
  colorName.textContent = colors[number];
});

//functions
function randomNumber() {
  return Math.floor(Math.random() * colors.length);
}
